import * as Effect314 from "effect-3-14/Effect";
import * as Effect315 from "effect-3-15/Effect";

const effect = Effect314.log("Hello, world!");
const effect2 = Effect315.log("Hello, world!");

Effect314.runSync(effect);
Effect315.runSync(effect2);