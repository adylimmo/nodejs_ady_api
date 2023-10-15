import {web} from "./application/web.cjs";
import {logger} from "./application/logging.cjs";

web.listen(3000, () => {
    logger.info("App start");
});
