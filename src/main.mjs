import {web} from "./application/web.mjs";
import {logger} from "./application/logging.mjs";

web.listen(3000, () => {
    logger.info("App start");
});
