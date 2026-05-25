// Web 平台入口
import 'package:jingyu_movie/app.dart' as app;

void main() {
  // Web 端不使用 media_kit（libmpv 不支持 Web）
  // HLS 播放由 HlsWebViewPlayer（hls.js）处理
  // media_kit 的 ensureInitialized 在 Web 上是空操作
  app.initAndRunApp();
}
