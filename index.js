import { AppRegistry } from 'react-native';
import App1 from './App';
import App2 from './App2';

// 向React Native注册一个名为App1的组件
// 如何在原生iOS中加载并显示出这个组件？？？
// 首先我们需要创建一个ViewController和RCTRootView来作为React Native的容器
// 具体参考 http://www.devio.org/2018/08/26/React-Native-Hybrid-iOS/
AppRegistry.registerComponent('App1', () => App1);
AppRegistry.registerComponent('App2', () => App2);
// 添加更多React Native的组件，xcode中可以修改，动态加载不同模块
// jsCodeLocation moduleName: @"App1"
// jsCodeLocation moduleName: @"App2"
