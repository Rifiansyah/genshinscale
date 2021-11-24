import AscensionCostTable from "../data/AscensionCostTable";
import { IBaseCharacter } from "../data/contracts/IBaseCharacter";
import { ICharacter } from "../data/contracts/ICharacter";
import { ITraveler } from "../data/contracts/ITraveler";
import { IItemWithAmountNotNull, ItemWithAmount } from "../data/entities/ItemWithAmount";
import { Items } from "../data/Items";
import LevelingCostTable from "../data/LevelingCostTable";
import TalentCostTable from "../data/TalentCostTable";
import { getAscensionStage } from "../getAscensionStage";
import getLevelingIndex from "../getLevelingIndex";
import { AscensionLevel } from "../interfaces/AscensionLevel";
import mergeAmountByName from "../mergeAmountByName";
import { range } from "../range";

export function calculateLeveling(
  start: AscensionLevel,
  goal: AscensionLevel
): { mora: IItemWithAmountNotNull; lazy: IItemWithAmountNotNull; accurate: IItemWithAmountNotNull[] } {
  const startLevelIndex = getLevelingIndex(start);
  const goatLevelIndex = getLevelingIndex(goal);

  const cost = LevelingCostTable.slice(startLevelIndex, goatLevelIndex).reduce(
    (prev, current) => {
      prev.xp += current.xp;
      prev.mora += current.mora;
      prev.accurate[0] += current.accurate[0];
      prev.accurate[1] += current.accurate[1];
      prev.accurate[2] += current.accurate[2];

      return prev;
    },
    { xp: 0, mora: 0, accurate: [0, 0, 0] }
  );

  return {
    mora: { item: Items.mora, amount: cost.mora },
    lazy: { item: Items.heros_wit, amount: Math.ceil(cost.xp / 20000) },
    accurate: [
      { item: Items.heros_wit, amount: cost.accurate[0] },
      { item: Items.adventurers_experience, amount: cost.accurate[1] },
      { item: Items.wanderers_advice, amount: cost.accurate[2] },
    ],
  };
}

export function calculateAscension(
  character: IBaseCharacter,
  start: AscensionLevel,
  goal: AscensionLevel
): IItemWithAmountNotNull[] {
  // this works like rusts match as expression https://doc.rust-lang.org/rust-by-example/flow_control/match.html
  const items = (() => {
    switch (character.meta) {
      case "traveler":
        const traveler = character as ITraveler;
        return {
          gemGroup: traveler.gemGroup,
          local: traveler.local,
          commonGroup: traveler.ascensionCommonGroup,
          boss: undefined,
        };
      default:
        return character as ICharacter;
    }
  })();

  const startAscension = getAscensionStage(start);
  const goalAscension = getAscensionStage(goal);

  return mergeAmountByName(AscensionCostTable(items).slice(startAscension, goalAscension));
}

function calculateSingleTalent(character: IBaseCharacter, level: number, normalTalent = false) {
  const items = (() => {
    switch (character.meta) {
      case "traveler":
        const traveler = character as ITraveler;
        return {
          commonGroup: normalTalent ? traveler.normalTalentCommonGroup : traveler.talentCommonGroup,
          bookGroup: normalTalent ? traveler.normalTalentBooks[level] : traveler.talentBooks[level],
          weekly: normalTalent ? traveler.normalTalentBoss : traveler.talentBoss,
        };
      default:
        return character as ICharacter;
    }
  })();

  return TalentCostTable(items, level);
}

export function calculateTalent(
  character: IBaseCharacter,
  start: number,
  goal: number,
  normalTalent = false
): IItemWithAmountNotNull[] {
  return mergeAmountByName(
    range(goal - start, start).map<ItemWithAmount[]>((level) => {
      return calculateSingleTalent(character, level, normalTalent);
    })
  );
}
