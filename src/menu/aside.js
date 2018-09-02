// 菜单 侧边栏
export default [
  { path: '/index', title: '首页', icon: 'home' },
  {
    title: 'OA',
    icon: 'wpexplorer',
    children: [
      { path: '/OA/tables', title: '表结构', icon: 'table' },
      { path: '/page2', title: '运维' },
      { path: '/page3', title: '开发' }
    ]
  }
]
