<template>
  <d2-container>
    <el-container>
      <el-aside width="25%">
        <el-input
            placeholder="输入关键字进行过滤"
            v-model="filterText">
        </el-input>

        <el-tree
            class="filter-tree"
            :data="data"
            :props="defaultProps"
            :filter-node-method="filterNode"
            @node-click="handleNodeClick"
            accordion
            ref="tree">
        </el-tree>
      </el-aside>
      <el-main>
        <el-table v-bind="tableData">
          <el-table-column
              v-for="(item, index) in tableData.columns"
              :key="index"
              :prop="item.prop"
              :label="item.label">
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </d2-container>
</template>

<script>
export default {
  name: 'oaTables',
  data () {
    return {
      filterText: '',
      data: [{
        id: 1,
        label: '系统基础',
        children: [{
          id: 11,
          label: '下拉框',
          children: [{
            id: 111,
            label: 'selectItem: 下拉框选项',
            tableName: 'selectItem'
          }, {
            id: 112,
            label: 'selectItemType: 下拉框字段',
            tableName: 'selectItemType'
          }]
        }, {
          id: 12,
          label: '关联选择',
          children: [
            {
              id: 121,
              label: 'refObj: 关联选择对象browser'
            }
          ]
        }, {
          id: 13,
          label: '分类',
          children: [
            {
              id: 131,
              label: 'category: 分类基本信息表'
            }, {
              id: 132,
              label: 'categoryLink: 分类关联关系表'
            }
          ]
        }, {
          id: 14,
          label: '多语言',
          children: [
            {
              id: 141,
              label: 'label: 多语言标签表'
            },
            {
              id: 142,
              label: 'labelCustom: 多语言标签表'
            }, {
              id: 143,
              label: 'labelDictory: 多语言标签字典表'
            }
          ]
        }, {
          id: 15,
          label: '接口',
          children: [
            {
              id: 151,
              label: 'interfaceConfigDetail: 接口信息实体'
            }, {
              id: 152,
              label: 'interfaceLog: 接口执行日志实体'
            }, {
              id: 153,
              label: 'interfaceMeta: 接口类型描述'
            }, {
              id: 154,
              label: 'interfaceObjLink: 接口与业务对象关联表'
            }
          ]
        }, {
          id: 16,
          label: '提醒',
          children: [
            {
              id: 161,
              label: 'jobRemind: 提醒内容信息表'
            }, {
              id: 162,
              label: 'jreminder: 任务提醒所提醒的人员'
            }, {
              id: 163,
              label: 'messageUrl: 提醒链接地址'
            }, {
              id: 164,
              label: 'notify: 分类提醒'
            }, {
              id: 165,
              label: 'notifyDefine: 分类提醒设置'
            }, {
              id: 166,
              label: 'notifyReceiverLink: 分类提醒状态'
            }
          ]
        }, {
          id: 17,
          label: '数据源',
          children: [
            {
              id: 171,
              label: 'dsentity: 数据源'
            }, {
              id: 172,
              label: 'dsmeta: 数据源类型实体'
            }
          ]
        }, {
          id: 18,
          label: '日志',
          children: [
            {
              id: 181,
              label: 'changeLog: 变更日志表'
            }, {
              id: 182,
              label: 'changeLogDetail: 变更日志明细表'
            }, {
              id: 183,
              label: 'log: 系统日志表'
            }
          ]
        }, {
          id: 19,
          label: '权限',
          children: [
            {
              id: 191,
              label: 'permissionDetail: 权限明细表'
            }, {
              id: 192,
              label: 'permissionRule: 权限规则表'
            }, {
              id: 193,
              label: 'permissionMeta: 权限分表'
            }, {
              id: 194,
              label: 'sysPermResLink: 权限资源关联表'
            }, {
              id: 195,
              label: 'sysPerms: 权限'
            }, {
              id: 196,
              label: 'sysResource: 资源'
            }
          ]
        }, {
          id: 20,
          label: '设置项'
        }, {
          id: 21,
          label: '附件',
          children: [{
            id: 211,
            label: 'attach: 附件基本信息表'
          }]
        }, {
          id: 22,
          label: 'Excel导入导出',
          children: [{
            id: 221,
            label: 'excelOpt: Excel导入导出配置表'
          }]
        }, {
          id: 23,
          label: '字段编码',
          children: [{
            id: 231,
            label: 'sequence: 字段编码流水号配置'
          }]
        }, {
          id: 24,
          label: '定时任务',
          children: [
            {
              id: 241,
              label: 'taskLog: 任务管理运行日志'
            }, {
              id: 242,
              label: 'taskmodel: 用户定义任务的配置信息'
            }
          ]
        }, {
          id: 25,
          label: '树形配置',
          children: [
            {
              id: 251,
              label: 'treeViewerInfo: 树形配置表'
            }
          ]
        }]
      }, {
        id: 2,
        label: '组织人员',
        children: [
          {
            id: 21,
            label: '员工信息',
            children: [
              {
                id: 211,
                label: 'humres: 人员基本信息表'
              }, {
                id: 212,
                label: 'imgInfo: 用户签章图片'
              }, {
                id: 213,
                label: 'personalSignature: 用户自定义流程签字意见'
              }, {
                id: 214,
                label: 'sysGroup: 自定义组'
              }, {
                id: 215,
                label: 'sysGroupHumres: 自定义组用户'
              }, {
                id: 216,
                label: 'sysUser: 用户账户信息表'
              }
            ]
          },
          {
            id: 22,
            label: '组织信息',
            children: [
              {
                id: 221,
                label: 'orgunit: 组织单元信息表'
              }, {
                id: 222,
                label: 'orgunitLink: 组织单元关联关系表'
              }, {
                id: 223,
                label: 'orgunitType: 组织单元类型'
              }
            ]
          },
          {
            id: 23,
            label: '岗位信息',
            children: [
              {
                id: 231,
                label: 'stationInfo: 岗位基本信息表'
              }, {
                id: 232,
                label: 'stationLevelLink:  岗位级别与岗位关联关系表'
              }, {
                id: 233,
                label: 'stationLink:  岗位上下级关系信息表'
              }
            ]
          },
          {
            id: 24,
            label: '角色信息',
            children: [{
              id: 21,
              label: 'sysRole: 角色'
            }, {
              id: 22,
              label: 'sysRolePermLink: 角色权限关联表'
            }, {
              id: 23,
              label: 'sysUserRoleLink: 用户角色关联表'
            }]
          }
        ]
      }, {
        id: 3,
        label: '门户',
        children: [{
          id: 31,
          label: '二级 3-1'
        }, {
          id: 32,
          label: '二级 3-2'
        }]
      }, {
        id: 4,
        label: '文档'

      }, {
        id: 5,
        label: '工作流'

      }, {
        id: 6,
        label: '表单'

      }, {
        id: 7,
        label: '报表'

      }, {
        id: 8,
        label: '菜单'

      }, {
        id: 9,
        label: '文档'

      }, {
        id: 10,
        label: '其它',
        children: [{
          id: 101,
          label: 'keyInfo: 系统使用流水号'
        }, {
          id: 102,
          label: 'keyWords: 数据库关键字信息表'
        }, {
          id: 103,
          label: 'loginUpPass: 首次登录修改密码日志'
        }, {
          id: 104,
          label: 'module: 模块信息表'
        }, {
          id: 105,
          label: 'sqlUpgrade: 升级包SQL文件执行日志'
        }, {
          id: 106,
          label: 'templateViewer: 模板配置信息表'
        }, {
          id: 107,
          label: 'timeStamps: 系统时间戳'
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      tableData: {
        columns: [],
        data: [],
        size: 'mini',
        stripe: true,
        border: true
      }
    }
  },

  watch: {
    filterText (val) {
      this.$refs.tree.filter(val)
    }
  },

  methods: {
    filterNode (value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
    handleNodeClick (data) {
      let file = 'oaTables/' + data.tableName + '.xlsx'
      this.$import.xlsx(file)
        .then(({header, results}) => {
          this.tableData.columns = header.map(e => {
            return {
              label: e,
              prop: e
            }
          })
          this.tableData.data = results
        })
    }
  }
}
</script>
