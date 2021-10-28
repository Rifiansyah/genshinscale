import { ICharacter } from "./contracts/ICharacter";
import { IdIndex } from "./contracts/UsingId";
import { Elements } from "./Elements";
import { ItemGroups } from "./ItemGroups";
import { Items } from "./Items";
import { getById } from "./util/getById";
import WeaponTypes from "./WeaponTypes";

export const getCharacterById = (id: string) => getById(Characters, id);

export const Characters: IdIndex<ICharacter> = {
    kokomi: {
        name: "Kokomi",
        normalizedName: "kokomi",
        element: Elements.hydro,
        weaponType: WeaponTypes.catalyst,
        rarity: 5,
        sub: "Hydro DMG%",
        constellation: "Dracaena Somnolenta",
        description:
            "The Divine Priestess of Watatsumi Island. All of the island's affairs are at this young lady's fingertips.",
        localId: Items.sango_pearl,
        commonGroupId: ItemGroups.spectral,
        bossId: Items.dew_of_repudiation,
        gemGroupId: ItemGroups.hydro_gem,
        bookGroupId: ItemGroups.transience,
        weeklyId: Items.hellfire_butterfly,
    },
    aloy: {
        name: "Aloy",
        normalizedName: "aloy",
        element: Elements.cryo,
        weaponType: WeaponTypes.bow,
        rarity: 5,
        sub: "Cryo DMG Bonus",
        constellation: "Nora Fortis",
        description:
            "An agile hunter from the Nora tribe. With bow in hand, she's always ready to protect the innocent.",
        localId: Items.crystal_marrow,
        commonGroupId: ItemGroups.spectral,
        bossId: Items.crystalline_bloom,
        gemGroupId: ItemGroups.cryo_gem,
        bookGroupId: ItemGroups.freedom,
        weeklyId: Items.molten_moment,
    },
    sara: {
        name: "Sara",
        normalizedName: "sara",
        element: Elements.electro,
        weaponType: WeaponTypes.bow,
        rarity: 4,
        sub: "ATK",
        constellation: "Flabellum",
        description: "A general of the Tenryou Commission. Bold, decisive, and skilled in battle.",
        localId: Items.dendrobium,
        commonGroupId: ItemGroups.mask,
        bossId: Items.storm_beads,
        gemGroupId: ItemGroups.electro_gem,
        bookGroupId: ItemGroups.elegance,
        weeklyId: Items.ashen_heart,
    },
    raiden: {
        name: "Raiden",
        normalizedName: "raiden",
        element: Elements.electro,
        weaponType: WeaponTypes.polearm,
        rarity: 5,
        sub: "Energy Recharge",
        constellation: "Imperatrix Umbrosa",
        description:
            "Her Excellency, the Almighty Narukami Ogosho, who promised the people of Inazuma an unchanging Eternity.",
        localId: Items.amakumo_fruit,
        commonGroupId: ItemGroups.handguard,
        bossId: Items.storm_beads,
        gemGroupId: ItemGroups.electro_gem,
        bookGroupId: ItemGroups.light,
        weeklyId: Items.molten_moment,
    },
    yoimiya: {
        name: "Yoimiya",
        normalizedName: "yoimiya",
        element: Elements.pyro,
        weaponType: WeaponTypes.bow,
        rarity: 5,
        sub: "CRIT Rate",
        constellation: "Carassius Auratus",
        description:
            'Owner of Naganohara Fireworks. Known as "Queen of the Summer Festival," she excels in her craft of creating fireworks that symbolize people\'s hopes and dreams.',
        localId: Items.naku_weed,
        commonGroupId: ItemGroups.scroll,
        bossId: Items.smoldering_pearl,
        gemGroupId: ItemGroups.pyro_gem,
        bookGroupId: ItemGroups.transience,
        weeklyId: Items.dragon_lords_crown,
    },
    sayu: {
        name: "Sayu",
        normalizedName: "sayu",
        element: Elements.anemo,
        weaponType: WeaponTypes.claymore,
        rarity: 4,
        sub: "Elemental Mastery",
        constellation: "Nyctereutes Minor",
        description: "A pint-sized ninja attached to the Shuumatsuban, who always seems sleep-deprived.",
        localId: Items.crystal_marrow,
        commonGroupId: ItemGroups.nectar,
        bossId: Items.marionette_core,
        gemGroupId: ItemGroups.anemo_gem,
        bookGroupId: ItemGroups.light,
        weeklyId: Items.gilded_scale,
    },
    ayaka: {
        name: "Ayaka",
        normalizedName: "ayaka",
        element: Elements.cryo,
        weaponType: WeaponTypes.sword,
        rarity: 5,
        sub: "CRIT DMG",
        constellation: "Grus Nivis",
        description:
            "Daughter of the Yashiro Commission's Kamisato Clan. Dignified and elegant, as well as wise and strong.",
        localId: Items.sakura_bloom,
        commonGroupId: ItemGroups.handguard,
        bossId: Items.perpetual_heart,
        gemGroupId: ItemGroups.cryo_gem,
        bookGroupId: ItemGroups.elegance,
        weeklyId: Items.bloodjade_branch,
    },
    // traveler_electro: {
    //     name: "Traveler",
    // normalizedName: "traveler_electro",
    //     element: elements.electro,
    //     weaponType: WeaponTypes.sword,
    //     rarity: 5,
    //     sub: "ATK",
    //     constellation: "Viator/Viatrix",
    //     description:
    //         "A traveler from another world who had their only kin taken away, forcing them to embark on a journey to find The Seven.",
    //     localId: null,
    //     commonGroupId: ItemGroups.traveler_item,
    //     bossId: null,
    //     gemGroupId: ItemGroups.traveler_item,
    //     bookGroupId: ItemGroups.traveler_item,
    //     weeklyId: null,
    // },
    kazuha: {
        name: "Kazuha",
        normalizedName: "kazuha",
        element: Elements.anemo,
        weaponType: WeaponTypes.sword,
        rarity: 5,
        sub: "Elemental Mastery",
        constellation: "Acer Palmatum",
        description:
            "A wandering samurai from Inazuma who is currently with Liyue's Crux Fleet. A gentle and carefree soul whose heart hides a great many burdens from the past. It's hard to say if weathering life's storms has eroded any sharp edges he once had or his reserved nature keeps them hidden from view. The first time most people meet Kaedehara Kazuha, they presume he is just another traineee crew member aboard The Crux.",
        localId: Items.sea_ganoderma,
        commonGroupId: ItemGroups.treasure_hoarder_insignia,
        bossId: Items.marionette_core,
        gemGroupId: ItemGroups.anemo_gem,
        bookGroupId: ItemGroups.diligence,
        weeklyId: Items.gilded_scale,
    },
    eula: {
        name: "Eula",
        normalizedName: "eula",
        element: Elements.cryo,
        weaponType: WeaponTypes.claymore,
        rarity: 5,
        sub: "CRIT DMG",
        constellation: "Aphros Delos",
        description:
            "The Spindrift Knight, a scion of the old aristocracy, and the Captain of the Knights of Favonius Reconnaissance Company. The reason for which a descendant of the ancient nobles might join the Knights remains a great mystery in Mondstadt to this very day.",
        localId: Items.dandelion_seed,
        commonGroupId: ItemGroups.mask,
        bossId: Items.crystalline_bloom,
        gemGroupId: ItemGroups.cryo_gem,
        bookGroupId: ItemGroups.resistance,
        weeklyId: Items.dragon_lords_crown,
    },
    yanfei: {
        name: "Yanfei",
        normalizedName: "yanfei",
        element: Elements.pyro,
        weaponType: WeaponTypes.catalyst,
        rarity: 4,
        sub: "Pyro DMG Bonus",
        constellation: "Bestia Iustitia",
        description:
            "A well-known legal adviser active in Liyue Harbor. A brilliant young lady in whose veins runs the blood of an illuminated beast.",
        localId: Items.noctilucous_jade,
        commonGroupId: ItemGroups.treasure_hoarder_insignia,
        bossId: Items.juvenile_jade,
        gemGroupId: ItemGroups.pyro_gem,
        bookGroupId: ItemGroups.gold,
        weeklyId: Items.bloodjade_branch,
    },
    rosaria: {
        name: "Rosaria",
        normalizedName: "rosaria",
        element: Elements.cryo,
        weaponType: WeaponTypes.polearm,
        rarity: 4,
        sub: "ATK",
        constellation: "Spinea Corona",
        description:
            "A sister of the church, though you wouldn't know it if it weren't for her attire. Known for her sharp, cold words and manner, she often works alone.",
        localId: Items.valberry,
        commonGroupId: ItemGroups.fatui_insignia,
        bossId: Items.hoarfrost_core,
        gemGroupId: ItemGroups.cryo_gem,
        bookGroupId: ItemGroups.ballad,
        weeklyId: Items.shadow_of_the_warrior,
    },
    hu_tao: {
        name: "Hu Tao",
        normalizedName: "hu_tao",
        element: Elements.pyro,
        weaponType: WeaponTypes.polearm,
        rarity: 5,
        sub: "CRIT DMG",
        constellation: "Papilio Charontis",
        description:
            "The 77th Director of the Wangsheng Funeral Parlor. She took over the business at a rather young age.",
        localId: Items.silk_flower,
        commonGroupId: ItemGroups.nectar,
        bossId: Items.juvenile_jade,
        gemGroupId: ItemGroups.pyro_gem,
        bookGroupId: ItemGroups.diligence,
        weeklyId: Items.shard_of_a_foul_legacy,
    },
    xiao: {
        name: "Xiao",
        normalizedName: "xiao",
        element: Elements.anemo,
        weaponType: WeaponTypes.polearm,
        rarity: 5,
        sub: "CRIT Rate",
        constellation: "Alatus Nemeseos",
        description:
            'A yaksha adeptus who defends Liyue. Also heralded as the "Conqueror of Demons" and "Vigilant Yaksha."',
        localId: Items.qingxin,
        commonGroupId: ItemGroups.slime,
        bossId: Items.juvenile_jade,
        gemGroupId: ItemGroups.anemo_gem,
        bookGroupId: ItemGroups.prosperity,
        weeklyId: Items.shadow_of_the_warrior,
    },
    ganyu: {
        name: "Ganyu",
        normalizedName: "ganyu",
        element: Elements.cryo,
        weaponType: WeaponTypes.bow,
        rarity: 5,
        sub: "CRIT DMG",
        constellation: "Sinae Unicornis",
        description:
            "The secretary at Yuehai Pavilion. The blood of the qilin, an illuminated beast, flows within her veins.",
        localId: Items.qingxin,
        commonGroupId: ItemGroups.nectar,
        bossId: Items.hoarfrost_core,
        gemGroupId: ItemGroups.cryo_gem,
        bookGroupId: ItemGroups.diligence,
        weeklyId: Items.shadow_of_the_warrior,
    },
    albedo: {
        name: "Albedo",
        normalizedName: "albedo",
        element: Elements.geo,
        weaponType: WeaponTypes.sword,
        rarity: 5,
        sub: "Geo DMG Bonus",
        constellation: "Princeps Cretaceus",
        description:
            "A genius known as the Kreideprinz, he is the Chief Alchemist and Captain of the Investigation Team of the Knights of Favonius.",
        localId: Items.cecilia,
        commonGroupId: ItemGroups.scroll,
        bossId: Items.basalt_pillar,
        gemGroupId: ItemGroups.geo_gem,
        bookGroupId: ItemGroups.ballad,
        weeklyId: Items.tusk_of_monoceros_caeli,
    },
    zhongli: {
        name: "Zhongli",
        normalizedName: "zhongli",
        element: Elements.geo,
        weaponType: WeaponTypes.polearm,
        rarity: 5,
        sub: "Geo DMG Bonus",
        constellation: "Lapis Dei",
        description:
            "A mysterious expert contracted by the Wangsheng Funeral Parlor. Extremely knowledgeable in all things.",
        localId: Items.cor_lapis,
        commonGroupId: ItemGroups.slime,
        bossId: Items.basalt_pillar,
        gemGroupId: ItemGroups.geo_gem,
        bookGroupId: ItemGroups.gold,
        weeklyId: Items.tusk_of_monoceros_caeli,
    },
    xinyan: {
        name: "Xinyan",
        normalizedName: "xinyan",
        element: Elements.pyro,
        weaponType: WeaponTypes.claymore,
        rarity: 4,
        sub: "ATK",
        constellation: "Fila Ignium",
        description:
            "Liyue's sole rock 'n' roll musician. She rebels against ossified prejudices using her music and passionate singing.",
        localId: Items.violetgrass,
        commonGroupId: ItemGroups.treasure_hoarder_insignia,
        bossId: Items.everflame_seed,
        gemGroupId: ItemGroups.pyro_gem,
        bookGroupId: ItemGroups.gold,
        weeklyId: Items.tusk_of_monoceros_caeli,
    },
    tartaglia: {
        name: "Childe",
        normalizedName: "tartaglia",
        element: Elements.hydro,
        weaponType: WeaponTypes.bow,
        rarity: 5,
        sub: "Hydro DMG Bonus",
        constellation: "Monoceros Caeli",
        description: 'No. 11 of The Harbingers, also known as "Childe." His name is highly feared on the battlefield.',
        localId: Items.starconch,
        commonGroupId: ItemGroups.fatui_insignia,
        bossId: Items.cleansing_heart,
        gemGroupId: ItemGroups.hydro_gem,
        bookGroupId: ItemGroups.freedom,
        weeklyId: Items.shard_of_a_foul_legacy,
    },
    diona: {
        name: "Diona",
        normalizedName: "diona",
        element: Elements.cryo,
        weaponType: WeaponTypes.bow,
        rarity: 4,
        sub: "Cryo DMG Bonus",
        constellation: "Feles",
        description:
            "A young lady who has inherited trace amounts of non-human blood. She is the incredibly popular bartender of the Cat's Tail tavern.",
        localId: Items.calla_lily,
        commonGroupId: ItemGroups.arrowhead,
        bossId: Items.hoarfrost_core,
        gemGroupId: ItemGroups.cryo_gem,
        bookGroupId: ItemGroups.freedom,
        weeklyId: Items.shard_of_a_foul_legacy,
    },
    klee: {
        name: "Klee",
        normalizedName: "klee",
        element: Elements.pyro,
        weaponType: WeaponTypes.catalyst,
        rarity: 5,
        sub: "Pyro DMG Bonus",
        constellation: "Trifolium",
        description:
            "An explosives expert and a regular at the Knights of Favonius's confinement room. Also known as Fleeing Sunlight.",
        localId: Items.philanemo_mushroom,
        commonGroupId: ItemGroups.scroll,
        bossId: Items.everflame_seed,
        gemGroupId: ItemGroups.pyro_gem,
        bookGroupId: ItemGroups.freedom,
        weeklyId: Items.ring_of_boreas,
    },
    venti: {
        name: "Venti",
        normalizedName: "venti",
        element: Elements.anemo,
        weaponType: WeaponTypes.bow,
        rarity: 5,
        sub: "Energy Recharge",
        constellation: "Carmen Dei",
        description: "One of the many bards of Mondstadt, who freely wanders the city's streets and alleys.",
        localId: Items.cecilia,
        commonGroupId: ItemGroups.slime,
        bossId: Items.hurricane_seed,
        gemGroupId: ItemGroups.anemo_gem,
        bookGroupId: ItemGroups.ballad,
        weeklyId: Items.tail_of_boreas,
    },
    keqing: {
        name: "Keqing",
        normalizedName: "keqing",
        element: Elements.electro,
        weaponType: WeaponTypes.sword,
        rarity: 5,
        sub: "CRIT DMG",
        constellation: "Trulla Cementarii",
        description:
            "The Yuheng of the Liyue Qixing. Keqing has much to say about Rex Lapis's unilateral approach to policymaking in Liyue — but in truth, gods admire skeptics such as her quite a lot.",
        localId: Items.cor_lapis,
        commonGroupId: ItemGroups.nectar,
        bossId: Items.lightning_prism,
        gemGroupId: ItemGroups.electro_gem,
        bookGroupId: ItemGroups.prosperity,
        weeklyId: Items.ring_of_boreas,
    },
    mona: {
        name: "Mona",
        normalizedName: "mona",
        element: Elements.hydro,
        weaponType: WeaponTypes.catalyst,
        rarity: 5,
        sub: "Energy Recharge",
        constellation: "Astrolabos",
        description:
            'A mysterious young astrologer who proclaims herself to be "Astrologist Mona Megistus," and who possesses abilities to match the title. Erudite, but prideful.',
        localId: Items.philanemo_mushroom,
        commonGroupId: ItemGroups.nectar,
        bossId: Items.cleansing_heart,
        gemGroupId: ItemGroups.hydro_gem,
        bookGroupId: ItemGroups.resistance,
        weeklyId: Items.ring_of_boreas,
    },
    qiqi: {
        name: "Qiqi",
        normalizedName: "qiqi",
        element: Elements.cryo,
        weaponType: WeaponTypes.sword,
        rarity: 5,
        sub: "Healing Bonus",
        constellation: "Pristina Nola",
        description:
            "An apprentice and herb gatherer at Bubu Pharmacy. An undead with a bone-white complexion, she seldom has much in the way of words or emotion.",
        localId: Items.violetgrass,
        commonGroupId: ItemGroups.scroll,
        bossId: Items.hoarfrost_core,
        gemGroupId: ItemGroups.cryo_gem,
        bookGroupId: ItemGroups.prosperity,
        weeklyId: Items.tail_of_boreas,
    },
    diluc: {
        name: "Diluc",
        normalizedName: "diluc",
        element: Elements.pyro,
        weaponType: WeaponTypes.claymore,
        rarity: 5,
        sub: "CRIT Rate",
        constellation: "Noctua",
        description: "The tycoon of a winery empire in Mondstadt, unmatched in every possible way.",
        localId: Items.small_lamp_grass,
        commonGroupId: ItemGroups.fatui_insignia,
        bossId: Items.everflame_seed,
        gemGroupId: ItemGroups.pyro_gem,
        bookGroupId: ItemGroups.resistance,
        weeklyId: Items.dvalins_plume,
    },
    jean: {
        name: "Jean",
        normalizedName: "jean",
        element: Elements.anemo,
        weaponType: WeaponTypes.sword,
        rarity: 5,
        sub: "Healing Bonus",
        constellation: "Leo Minor",
        description:
            "The righteous and rigorous Dandelion Knight, and Acting Grand Master of Mondstadt's Knights of Favonius.",
        localId: Items.dandelion_seed,
        commonGroupId: ItemGroups.mask,
        bossId: Items.hurricane_seed,
        gemGroupId: ItemGroups.anemo_gem,
        bookGroupId: ItemGroups.resistance,
        weeklyId: Items.dvalins_plume,
    },
    sucrose: {
        name: "Sucrose",
        normalizedName: "sucrose",
        element: Elements.anemo,
        weaponType: WeaponTypes.catalyst,
        rarity: 4,
        sub: "Anemo DMG Bonus",
        constellation: "Ampulla",
        description: "An alchemist filled with curiosity about all things. She researches bio-alchemy.",
        localId: Items.windwheel_aster,
        commonGroupId: ItemGroups.nectar,
        bossId: Items.hurricane_seed,
        gemGroupId: ItemGroups.anemo_gem,
        bookGroupId: ItemGroups.freedom,
        weeklyId: Items.spirit_locket_of_boreas,
    },
    chongyun: {
        name: "Chongyun",
        normalizedName: "chongyun",
        element: Elements.cryo,
        weaponType: WeaponTypes.claymore,
        rarity: 4,
        sub: "ATK",
        constellation: "Nubis Caesor",
        description:
            "A young exorcist from a family of exorcists. He does everything he can to suppress his abundance of yang energy.",
        localId: Items.cor_lapis,
        commonGroupId: ItemGroups.mask,
        bossId: Items.hoarfrost_core,
        gemGroupId: ItemGroups.cryo_gem,
        bookGroupId: ItemGroups.diligence,
        weeklyId: Items.dvalins_sigh,
    },
    noelle: {
        name: "Noelle",
        normalizedName: "noelle",
        element: Elements.geo,
        weaponType: WeaponTypes.claymore,
        rarity: 4,
        sub: "DEF",
        constellation: "Parma Cordis",
        description: "A maid who faithfully serves the Knights of Favonius. She dreams of joining their ranks someday.",
        localId: Items.valberry,
        commonGroupId: ItemGroups.mask,
        bossId: Items.basalt_pillar,
        gemGroupId: ItemGroups.geo_gem,
        bookGroupId: ItemGroups.resistance,
        weeklyId: Items.dvalins_claw,
    },
    bennett: {
        name: "Bennett",
        normalizedName: "bennett",
        element: Elements.pyro,
        weaponType: WeaponTypes.sword,
        rarity: 4,
        sub: "Energy Recharge",
        constellation: "Rota Calamitas",
        description: "A good-natured adventurer from Mondstadt who's unfortunately extremely unlucky.",
        localId: Items.windwheel_aster,
        commonGroupId: ItemGroups.treasure_hoarder_insignia,
        bossId: Items.everflame_seed,
        gemGroupId: ItemGroups.pyro_gem,
        bookGroupId: ItemGroups.resistance,
        weeklyId: Items.dvalins_plume,
    },
    fischl: {
        name: "Fischl",
        normalizedName: "fischl",
        element: Elements.electro,
        weaponType: WeaponTypes.bow,
        rarity: 4,
        sub: "ATK",
        constellation: "Corvus",
        description:
            'A mysterious girl who calls herself "Prinzessin der Verurteilung" and travels with a night raven named Oz.',
        localId: Items.small_lamp_grass,
        commonGroupId: ItemGroups.arrowhead,
        bossId: Items.lightning_prism,
        gemGroupId: ItemGroups.electro_gem,
        bookGroupId: ItemGroups.ballad,
        weeklyId: Items.spirit_locket_of_boreas,
    },
    ningguang: {
        name: "Ningguang",
        normalizedName: "ningguang",
        element: Elements.geo,
        weaponType: WeaponTypes.catalyst,
        rarity: 4,
        sub: "Geo DMG Bonus",
        constellation: "Opus Aequilibrium",
        description: "The Tianquan of the Liyue Qixing. Her wealth is unsurpassed in all of Teyvat.",
        localId: Items.glaze_lily,
        commonGroupId: ItemGroups.fatui_insignia,
        bossId: Items.basalt_pillar,
        gemGroupId: ItemGroups.geo_gem,
        bookGroupId: ItemGroups.prosperity,
        weeklyId: Items.spirit_locket_of_boreas,
    },
    xingqiu: {
        name: "Xingqiu",
        normalizedName: "xingqiu",
        element: Elements.hydro,
        weaponType: WeaponTypes.sword,
        rarity: 4,
        sub: "ATK",
        constellation: "Fabulae Textile",
        description:
            "A young man carrying a longsword who is frequently seen at book booths. He has a chivalrous heart and yearns for justice and fairness for all.",
        localId: Items.silk_flower,
        commonGroupId: ItemGroups.mask,
        bossId: Items.cleansing_heart,
        gemGroupId: ItemGroups.hydro_gem,
        bookGroupId: ItemGroups.gold,
        weeklyId: Items.tail_of_boreas,
    },
    beidou: {
        name: "Beidou",
        normalizedName: "beidou",
        element: Elements.electro,
        weaponType: WeaponTypes.claymore,
        rarity: 4,
        sub: "Electro DMG Bonus",
        constellation: "Victor Mare",
        description: "Captain of her crew, The Crux. She's quite an unbound and forthright woman.",
        localId: Items.noctilucous_jade,
        commonGroupId: ItemGroups.treasure_hoarder_insignia,
        bossId: Items.lightning_prism,
        gemGroupId: ItemGroups.electro_gem,
        bookGroupId: ItemGroups.gold,
        weeklyId: Items.dvalins_sigh,
    },
    xiangling: {
        name: "Xiangling",
        normalizedName: "xiangling",
        element: Elements.pyro,
        weaponType: WeaponTypes.polearm,
        rarity: 4,
        sub: "Elemental Mastery",
        constellation: "Trulla",
        description:
            "A renowned chef from Liyue. She's extremely passionate about cooking and excels at making her signature hot and spicy dishes.",
        localId: Items.jueyun_chili,
        commonGroupId: ItemGroups.slime,
        bossId: Items.everflame_seed,
        gemGroupId: ItemGroups.pyro_gem,
        bookGroupId: ItemGroups.diligence,
        weeklyId: Items.dvalins_claw,
    },
    razor: {
        name: "Razor",
        normalizedName: "razor",
        element: Elements.electro,
        weaponType: WeaponTypes.claymore,
        rarity: 4,
        sub: "Physical DMG Bonus",
        constellation: "Lupus Minor",
        description:
            "A boy who lives among the wolves in Wolvendom of Mondstadt, away from human civilization. As agile as lightning.",
        localId: Items.wolfhook,
        commonGroupId: ItemGroups.mask,
        bossId: Items.lightning_prism,
        gemGroupId: ItemGroups.electro_gem,
        bookGroupId: ItemGroups.resistance,
        weeklyId: Items.dvalins_claw,
    },
    barbara: {
        name: "Barbara",
        normalizedName: "barbara",
        element: Elements.hydro,
        weaponType: WeaponTypes.catalyst,
        rarity: 4,
        sub: "HP",
        constellation: "Crater",
        description: 'Every citizen of Mondstadt adores Barbara. She learned the word "idol" from a magazine.',
        localId: Items.philanemo_mushroom,
        commonGroupId: ItemGroups.scroll,
        bossId: Items.cleansing_heart,
        gemGroupId: ItemGroups.hydro_gem,
        bookGroupId: ItemGroups.freedom,
        weeklyId: Items.ring_of_boreas,
    },
    lisa: {
        name: "Lisa",
        normalizedName: "lisa",
        element: Elements.electro,
        weaponType: WeaponTypes.catalyst,
        rarity: 4,
        sub: "Elemental Mastery",
        constellation: "Tempus Fugit",
        description:
            "The languid but knowledgeable Librarian of the Knights of Favonius, deemed by Sumeru Academia to be their most distinguished graduate in the past two centuries.",
        localId: Items.valberry,
        commonGroupId: ItemGroups.slime,
        bossId: Items.lightning_prism,
        gemGroupId: ItemGroups.electro_gem,
        bookGroupId: ItemGroups.ballad,
        weeklyId: Items.dvalins_claw,
    },
    kaeya: {
        name: "Kaeya",
        normalizedName: "kaeya",
        element: Elements.cryo,
        weaponType: WeaponTypes.sword,
        rarity: 4,
        sub: "Energy Recharge",
        constellation: "Pavo Ocellus",
        description:
            "An accomplished swordsman and a strategic thinker in the Knights of Favonius, rumored to hail from beyond Mondstadt.",
        localId: Items.calla_lily,
        commonGroupId: ItemGroups.treasure_hoarder_insignia,
        bossId: Items.hoarfrost_core,
        gemGroupId: ItemGroups.cryo_gem,
        bookGroupId: ItemGroups.ballad,
        weeklyId: Items.spirit_locket_of_boreas,
    },
    amber: {
        name: "Amber",
        normalizedName: "amber",
        element: Elements.pyro,
        weaponType: WeaponTypes.bow,
        rarity: 4,
        sub: "ATK",
        constellation: "Lepus",
        description:
            "Always energetic and full of life, Amber's the best — albeit only — Outrider of the Knights of Favonius.",
        localId: Items.small_lamp_grass,
        commonGroupId: ItemGroups.arrowhead,
        bossId: Items.everflame_seed,
        gemGroupId: ItemGroups.pyro_gem,
        bookGroupId: ItemGroups.freedom,
        weeklyId: Items.dvalins_sigh,
    },
    jeffrey: {
        name: "Jeffrey",
        normalizedName: "jeffrey",
        element: Elements.anemo,
        weaponType: WeaponTypes.sword,
        rarity: 4,
        sub: "ATK",
        constellation: "Star",
        description: "This is Jeff.",
        localId: Items.small_lamp_grass,
        commonGroupId: ItemGroups.arrowhead,
        bossId: Items.everflame_seed,
        gemGroupId: ItemGroups.pyro_gem,
        bookGroupId: ItemGroups.freedom,
        weeklyId: Items.dvalins_sigh,
    },
    // traveler_geo: {
    //     name: "Traveler",
    // normalizedName: "traveler_geo",
    //     element: elements.geo,
    //     weaponType: WeaponTypes.sword,
    //     rarity: 5,
    //     sub: "ATK",
    //     constellation: "Viator/Viatrix",
    //     description:
    //         "A traveler from another world who had their only kin taken away, forcing them to embark on a journey to find The Seven.",
    //     localId: null,
    //     commonGroupId: ItemGroups.traveler_item,
    //     bossId: null,
    //     gemGroupId: ItemGroups.traveler_item,
    //     bookGroupId: ItemGroups.traveler_item,
    //     weeklyId: null,
    // },
    // traveler_anemo: {
    //     name: "Traveler",
    // normalizedName: "traveler_anemo",
    //     element: elements.anemo,
    //     weaponType: WeaponTypes.sword,
    //     rarity: 5,
    //     sub: "ATK",
    //     constellation: "Viator/Viatrix",
    //     description:
    //         "A traveler from another world who had their only kin taken away, forcing them to embark on a journey to find The Seven.",
    //     localId: null,
    //     commonGroupId: ItemGroups.traveler_item,
    //     bossId: null,
    //     gemGroupId: ItemGroups.traveler_item,
    //     bookGroupId: ItemGroups.traveler_item,
    //     weeklyId: null,
    // },
};

export default Characters;
