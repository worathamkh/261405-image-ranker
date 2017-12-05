'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 
var path = require('path');

var Config = function Config() {
    _classCallCheck(this, Config);

    this.env = process.env.NODE_ENV || 'development';
    this.root = path.normalize(__dirname + '/..');
    this.rootPath = process.env.ROOT_PATH || '/';
    this.app = {
        name: 'Image-Ranker'
    };
    this.port = parseInt(process.env.PORT) || 9000;
};

module.exports = Config;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9jb25maWcuanMiXSwibmFtZXMiOlsicGF0aCIsInJlcXVpcmUiLCJDb25maWciLCJlbnYiLCJwcm9jZXNzIiwiTk9ERV9FTlYiLCJyb290Iiwibm9ybWFsaXplIiwiX19kaXJuYW1lIiwicm9vdFBhdGgiLCJST09UX1BBVEgiLCJhcHAiLCJuYW1lIiwicG9ydCIsInBhcnNlSW50IiwiUE9SVCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBLElBQU1BLE9BQU9DLFFBQVEsTUFBUixDQUFiOztJQUVNQyxNLEdBQ0Ysa0JBQWM7QUFBQTs7QUFDVixTQUFLQyxHQUFMLEdBQVdDLFFBQVFELEdBQVIsQ0FBWUUsUUFBWixJQUF3QixhQUFuQztBQUNBLFNBQUtDLElBQUwsR0FBWU4sS0FBS08sU0FBTCxDQUFlQyxZQUFZLEtBQTNCLENBQVo7QUFDQSxTQUFLQyxRQUFMLEdBQWdCTCxRQUFRRCxHQUFSLENBQVlPLFNBQVosSUFBeUIsR0FBekM7QUFDQSxTQUFLQyxHQUFMLEdBQVc7QUFDUEMsY0FBTTtBQURDLEtBQVg7QUFHQSxTQUFLQyxJQUFMLEdBQVlDLFNBQVNWLFFBQVFELEdBQVIsQ0FBWVksSUFBckIsS0FBOEIsSUFBMUM7QUFDSCxDOztBQUVMQyxPQUFPQyxPQUFQLEdBQWlCZixNQUFqQiIsImZpbGUiOiJtb2RlbHMvY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuXG5jbGFzcyBDb25maWcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdkZXZlbG9wbWVudCc7XG4gICAgICAgIHRoaXMucm9vdCA9IHBhdGgubm9ybWFsaXplKF9fZGlybmFtZSArICcvLi4nKTtcbiAgICAgICAgdGhpcy5yb290UGF0aCA9IHByb2Nlc3MuZW52LlJPT1RfUEFUSCB8fCAnLyc7XG4gICAgICAgIHRoaXMuYXBwID0ge1xuICAgICAgICAgICAgbmFtZTogJ0ltYWdlLVJhbmtlcidcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5wb3J0ID0gcGFyc2VJbnQocHJvY2Vzcy5lbnYuUE9SVCkgfHwgOTAwMDtcbiAgICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IENvbmZpZztcbiJdfQ==
