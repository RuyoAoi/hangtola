本说明书来源于chatgpt

# Image Rank

本项目为基于 **Vue 3 + Vite + TypeScript** 的本地网页小工具。

---

# 一、运行环境要求

* Node.js **18.x 或 20.x（LTS 推荐）**
* npm（随 Node.js 自动安装）

下载地址：

https://nodejs.org

安装完成后，打开命令行验证：

```bash
node -v
npm -v
```

能够正常输出版本号即可。

---

# 二、首次运行（从零开始）

如果项目中 **没有 node_modules 文件夹**，请按照以下步骤操作。

## 1. 进入项目目录

```bash
cd 项目所在路径
```

例如：

```bash
cd D:\projectp\hangtola\image-rank
```

---

## 2. 安装依赖

```bash
npm install
```

作用：

* 根据 package.json 下载依赖
* 自动生成 node_modules 文件夹

首次安装时间较长属于正常现象。

---

## 3. 启动开发环境

```bash
npm run dev
```

终端会输出类似：

```
VITE v5.x ready in xxx ms
Local: http://localhost:5173/
```

---

## 4. 打开浏览器

访问：

```
http://localhost:5173/
```

即可使用本工具。

---

# 三、项目构建（生成发布版本）

如需打包：

```bash
npm run build
```

打包后生成：

```
dist/
```

如果需要本地预览打包版本：

```bash
npm run preview
```

---

# 四、换电脑运行流程

在新的电脑上运行步骤：

1. 安装 Node.js（LTS 版本）
2. 下载项目源码
3. 进入项目目录
4. 执行：

```bash
npm install
npm run dev
```

---

# 五、常见问题

## 1. 提示找不到依赖

请确认已执行：

```bash
npm install
```

---

## 2. Node 版本过低

建议使用：

* Node 18 LTS
* Node 20 LTS

过旧版本可能导致依赖安装失败。

---

# 六、脚本说明

package.json 中包含以下常用命令：

```json
"scripts": {
  "dev": "vite",
  "build": "vue-tsc -b && vite build",
  "preview": "vite preview"
}
```

| 命令              | 作用     |
| --------------- | ------ |
| npm run dev     | 启动开发环境 |
| npm run build   | 打包项目   |
| npm run preview | 预览打包结果 |

---

# 七、目录说明

```
src/            源代码
public/         静态资源
dist/           打包输出目录
node_modules/   依赖目录（自动生成）
```

---

# 八、开发说明

* 本项目使用 Vite 作为构建工具
* 使用 Vue 3 Composition API
* 使用 TypeScript

---

如遇问题，请确认：

1. Node 版本正确
2. 已执行 npm install
3. 当前目录为项目根目录

以上为完整运行说明。
