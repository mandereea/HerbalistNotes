import { registerEnumType } from "type-graphql";

export enum Temperament {
  COLD = "Cold",
  COOL = "Cool",
  NEUTRAL = "Neutral",
  WARM = "Warm",
  HOT = "Hot",
}

registerEnumType(Temperament, {
  name: "Temperament"
});

export enum Taste {
  SPICY = "Spicy",
  SALTY = "Salty",
  SOUR = "Sour",
  BITTER = "Bitter",
  SWEET = "Sweet",
}

registerEnumType(Taste, {
  name: "Taste"
});

export enum TimeOfDay {
  EARLY_MORNING = "3am-7am",
  MORNING = "7am-11am",
  MID_DAY = "11am-3pm",
  AFTERNOON = "3pm-7pm",
  EVENING = "7pm-11pm",
  MID_NIGHT = "11pm-3am",
}

registerEnumType(TimeOfDay, {
  name: "TimeOfDay"
});