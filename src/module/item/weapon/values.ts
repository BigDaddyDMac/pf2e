const WEAPON_CATEGORIES = new Set(["unarmed", "simple", "martial", "advanced"] as const);

const MELEE_OR_RANGED_GROUPS = new Set(["dart", "knife"] as const);

const MELEE_WEAPON_GROUPS = new Set([
    ...MELEE_OR_RANGED_GROUPS,
    "axe",
    "brawling",
    "club",
    "flail",
    "hammer",
    "pick",
    "polearm",
    "shield",
    "spear",
    "sword",
] as const);

/** Groups that will be forced as ranged weapons */
const MANDATORY_RANGED_GROUPS = new Set(["bomb", "bow", "crossbow", "firearm", "sling"] as const);

const WEAPON_GROUPS = new Set([...MELEE_WEAPON_GROUPS, ...MANDATORY_RANGED_GROUPS] as const);

const WEAPON_PROPERTY_RUNE_TYPES = new Set([
    "ancestralEchoing",
    "anchoring",
    "ashen",
    "astral",
    "authorized",
    "bane",
    "bloodbane",
    "bloodthirsty",
    "brilliant",
    "called",
    "coating",
    "conducting",
    "corrosive",
    "crushing",
    "cunning",
    "dancing",
    "deathdrinking",
    "decaying",
    "demolishing",
    "disrupting",
    "earthbinding",
    "energizing",
    "extending",
    "fanged",
    "fearsome",
    "flaming",
    "flurrying",
    "frost",
    "ghostTouch",
    "giantKilling",
    "greaterGiantKilling",
    "greaterAnchoring",
    "greaterAshen",
    "greaterAstral",
    "greaterBloodbane",
    "greaterBrilliant",
    "greaterCorrosive",
    "greaterCrushing",
    "greaterDecaying",
    "greaterDisrupting",
    "greaterExtending",
    "greaterFanged",
    "greaterFearsome",
    "greaterFlaming",
    "greaterFrost",
    "greaterHauling",
    "greaterImpactful",
    "greaterRooting",
    "greaterShock",
    "greaterThundering",
    "grievous",
    "hauling",
    "holy",
    "hopeful",
    "hooked",
    "impactful",
    "impossible",
    "keen",
    "kinWarding",
    "majorFanged",
    "majorRooting",
    "merciful",
    "pacifying",
    "returning",
    "rooting",
    "serrating",
    "shifting",
    "shock",
    "speed",
    "spellStoring",
    "swarming",
    "thundering",
    "trueRooting",
    "underwater",
    "unholy",
    "vorpal",
    "wounding",
] as const);

const THROWN_RANGES = new Set([10, 15, 20, 30, 40, 60, 80, 100] as const);
const WEAPON_RANGES = new Set([...THROWN_RANGES, 50, 70, 90, 110, 120, 140, 150, 180, 200, 240, 300] as const);

export {
    MANDATORY_RANGED_GROUPS,
    MELEE_WEAPON_GROUPS,
    THROWN_RANGES,
    WEAPON_CATEGORIES,
    WEAPON_GROUPS,
    WEAPON_PROPERTY_RUNE_TYPES,
    WEAPON_RANGES,
};
