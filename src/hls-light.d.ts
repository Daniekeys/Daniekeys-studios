// hls.js ships its types for the main entry only; the light build has the same API.
declare module "hls.js/light" {
  import Hls from "hls.js";
  export default Hls;
}
