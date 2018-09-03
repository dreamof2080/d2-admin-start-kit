<template>
  <d2-container>
    <div style="height: 85vh; margin: -10px;" class="oaTables">
      <SplitPane :min-percent='20' :default-percent='30' split="vertical">
        <template slot="paneL">
          <div style="margin: 10px;">
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
          </div>
        </template>
        <template slot="paneR">
          <div style="margin: 10px;">
            <el-table v-bind="tableData">
              <el-table-column
                  v-for="(item, index) in tableData.columns"
                  :key="index"
                  :prop="item.prop"
                  :label="item.label">
              </el-table-column>
            </el-table>
          </div>
        </template>
      </SplitPane>
    </div>

    <!--<el-container>-->
      <!--<el-aside width="25%">-->
        <!--<el-input-->
            <!--placeholder="输入关键字进行过滤"-->
            <!--v-model="filterText">-->
        <!--</el-input>-->

        <!--<el-tree-->
            <!--class="filter-tree"-->
            <!--:data="data"-->
            <!--:props="defaultProps"-->
            <!--:filter-node-method="filterNode"-->
            <!--@node-click="handleNodeClick"-->
            <!--accordion-->
            <!--ref="tree">-->
        <!--</el-tree>-->
      <!--</el-aside>-->
      <!--<el-main>-->
        <!--<el-table v-bind="tableData">-->
          <!--<el-table-column-->
              <!--v-for="(item, index) in tableData.columns"-->
              <!--:key="index"-->
              <!--:prop="item.prop"-->
              <!--:label="item.label">-->
          <!--</el-table-column>-->
        <!--</el-table>-->
      <!--</el-main>-->
    <!--</el-container>-->
  </d2-container>
</template>

<script>
// 表单列表
import tables from './data'

export default {
  name: 'oaTables',
  data () {
    return {
      filterText: '',
      data: tables,
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
      if (data.tableName) {
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
}
</script>

<style>
  .oaTables .el-input{
    margin-bottom: 10px;
  }
  .oaTables .splitter-paneL,.oaTables .splitter-paneR{
    overflow-y: auto;
  }
</style>
