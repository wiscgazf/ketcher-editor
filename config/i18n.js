module.exports = [
    // 字体
    {
        search: 'command: TextCommand.Bold,',
        replace: `command: TextCommand.Bold,
  title: '加粗',`
    },
    {
        search: 'command: TextCommand.Italic,',
        replace: `command: TextCommand.Italic,
  title: '斜体',`
    },
    {
        search: 'command: TextCommand.Superscript,',
        replace: `command: TextCommand.Superscript,
  title: '上标',`
    },
    {
        search: 'command: TextCommand.Subscript,',
        replace: `command: TextCommand.Subscript,
  title: '下标',`
    },
    {
        search: 'props.button.command.toLowerCase(),',
        replace: `props.button.title || props.button.command.toLowerCase(),`
    },
    // top bar
    { search: 'Clear Canvas', replace: '清空页面' },
    { search: 'Open...', replace: '打开文件' },
    { search: 'Save as...', replace: '保存为' },
    { search: 'title: \'Copy\',', replace: 'title: \'复制\',' },
    { search: 'Copy as MOL', replace: '复制MOL' },
    { search: 'title: \'Copy as KET\',', replace: 'title: \'复制KET\',' },
    { search: 'Copy Image', replace: '复制图片' },
    { search: 'title: \'Paste\',', replace: 'title: \'粘贴\',' },
    { search: 'title: "Paste",', replace: 'title: "粘贴",' },
    { search: 'title: \'Cut\',', replace: 'title: \'剪切\',' },
    { search: 'title: "Cut",', replace: 'title: "剪切",' },
    { search: 'title: \'Undo\',', replace: 'title: \'撤销\',' },
    { search: 'title: "Undo",', replace: 'title: "撤销",' },
    { search: 'title: \'Redo\',', replace: 'title: \'重做\',' },
    { search: 'title: "Redo",', replace: 'title: "重做",' },
    { search: 'title: \'Aromatize\',', replace: 'title: \'芳香化\',' },
    { search: 'title: \'Dearomatize\',', replace: 'title: \'取消芳香化\',' },
    { search: 'title: \'Layout\',', replace: 'title: \'优化布局\',' },
    { search: 'Clean Up', replace: '整理' },
    { search: 'Calculate CIP', replace: '计算CIP' },
    { search: 'Check Structure', replace: '结构检查' },
    { search: 'Calculated Values', replace: '计算值' },
    { search: 'Add/Remove explicit hydrogens', replace: '显示/隐藏显式氢' },
    { search: 'title: \'Settings\',', replace: 'title: \'设置\',' },
    { search: 'title: "Settings",', replace: 'title: "设置",' },
    { search: 'title: \'Help\',', replace: 'title: \'帮助\',' },
    { search: 'title: "Help",', replace: 'title: "帮助",' },
    { search: 'title: \'About\',', replace: 'title: \'关于\',' },
    { search: 'title: "About",', replace: 'title: "关于",' },
    { search: 'Zoom Out', replace: '缩小' },
    { search: 'Zoom out', replace: '缩小' },
    { search: 'Zoom In', replace: '放大' },
    { search: 'Zoom in', replace: '放大' },
    { search: 'Zoom 100%', replace: '重置' },
    { search: 'Fullscreen mode', replace: '全屏模式' },
    // left bar
    { search: 'Hand tool', replace: '拖拽' },
    { search: 'Rectangle Selection', replace: '选择' },
    { search: 'Lasso Selection', replace: '自由选择' },
    { search: 'Fragment Selection', replace: '片段选择' },
    { search: 'title: \'Erase\',', replace: 'title: \'擦除\',' },
    { search: 'title: \'Chain\',', replace: 'title: \'碳链\',' },
    { search: 'title: \'Stereochemistry\',', replace: 'title: \'立体化学\',' },
    { search: 'Charge Plus', replace: '正电荷' },
    { search: 'Charge Minus', replace: '负电荷' },
    { search: 'title: \'S-Group\',', replace: 'title: \'S组\',' },
    { search: 'R-Group Label Tool', replace: 'R组标签工具' },
    { search: 'R-Group Fragment Tool', replace: 'R组片段工具' },
    { search: 'Attachment Point Tool', replace: '附着点工具' },
    { search: 'Reaction Plus Tool', replace: '反应加号' },
    { search: 'Arrow Open Angle Tool', replace: '箭头' },
    { search: 'Arrow Filled Triangle Tool', replace: '箭头' },
    { search: 'Arrow Filled Bow Tool', replace: '箭头' },
    { search: 'Arrow Dashed Open Angle Tool', replace: '虚箭头' },
    { search: 'Failed Arrow Tool', replace: '失败箭头' },
    { search: 'Retrosynthetic Arrow Tool', replace: '逆合成箭头' },
    { search: 'Arrow Both Ends Filled Triangle Tool', replace: '左右箭头' },
    { search: 'Arrow Equilibrium Filled Half Bow Tool', replace: '可逆箭头' },
    { search: 'Arrow Equilibrium Filled Triangle Tool', replace: '左右箭头' },
    { search: 'Arrow Equilibrium Open Angle Tool', replace: '可逆箭头' },
    { search: 'Arrow Unbalanced Equilibrium Filled Half Bow Tool', replace: '不对称可逆箭头' },
    { search: 'Arrow Unbalanced Equilibrium Open Half Angle Tool', replace: '可逆箭头' },
    { search: 'Arrow Unbalanced Equilibrium Large Filled Half Bow Tool', replace: '不对称可逆箭头' },
    { search: 'Arrow Unbalanced Equilibrium Filled Half Triangle Tool', replace: '不对称可逆箭头' },
    { search: 'Arrow Elliptical Arc Filled Bow Tool', replace: '弧线箭头' },
    { search: 'Arrow Elliptical Arc Filled Triangle Tool', replace: '弧线箭头' },
    { search: 'Arrow Elliptical Arc Open Angle Tool', replace: '弧线箭头' },
    { search: 'Arrow Elliptical Arc Open Half Angle Tool', replace: '弧线箭头' },
    { search: 'Multi-Tailed Arrow Tool', replace: '多尾箭头' },
    { search: 'Reaction Mapping Tool', replace: '反应映射工具' },
    { search: 'Reaction Unmapping Tool', replace: '反应取消映射工具' },
    { search: 'Reaction Auto-Mapping Tool', replace: '反应自动映射工具' },
    { search: 'Shape Ellipse', replace: '添加椭圆' },
    { search: 'Shape Rectangle', replace: '添加矩形' },
    { search: 'Shape Line', replace: '添加线段' },
    { search: 'title: \'Add text\',', replace: 'title: \'添加文本\',' },
    { search: 'Add Image', replace: '添加图片' },
    { search: 'Structure Library', replace: '结构库' },
    // right bar
    { search: 'title: \'Periodic Table\',', replace: 'title: \'元素周期表\',' },
    { search: 'children: "Periodic Table"', replace: 'children: "元素周期表"' },
    { search: 'title: \'Any atom\',', replace: 'title: \'任意原子\',' },
    { search: 'Extended Table', replace: '拓展' },
    // 元素周期表
    {
        search: 'title: \'Hydrogen\',',
        replace: 'title: \'氢\','
    },
    {
        search: 'title: \'Helium\',',
        replace: 'title: \'氦\','
    },
    {
        search: 'title: \'Lithium\',',
        replace: 'title: \'锂\','
    },
    {
        search: 'title: \'Beryllium\',',
        replace: 'title: \'铍\','
    },
    {
        search: 'title: \'Boron\',',
        replace: 'title: \'硼\','
    },
    {
        search: 'title: \'Carbon\',',
        replace: 'title: \'碳\','
    },
    {
        search: 'title: \'Nitrogen\',',
        replace: 'title: \'氮\','
    },
    {
        search: 'title: \'Oxygen\',',
        replace: 'title: \'氧\','
    },
    {
        search: 'title: \'Fluorine\',',
        replace: 'title: \'氟\','
    },
    {
        search: 'title: \'Neon\',',
        replace: 'title: \'氖\','
    },
    {
        search: 'title: \'Sodium\',',
        replace: 'title: \'钠\','
    },
    {
        search: 'title: \'Magnesium\',',
        replace: 'title: \'镁\','
    },
    {
        search: 'title: \'Aluminium\',',
        replace: 'title: \'铝\','
    },
    {
        search: 'title: \'Silicon\',',
        replace: 'title: \'硅\','
    },
    {
        search: 'title: \'Phosphorus\',',
        replace: 'title: \'磷\','
    },
    {
        search: 'title: \'Sulfur\',',
        replace: 'title: \'硫\','
    },
    {
        search: 'title: \'Chlorine\',',
        replace: 'title: \'氯\','
    },
    {
        search: 'title: \'Argon\',',
        replace: 'title: \'氩\','
    },
    {
        search: 'title: \'Potassium\',',
        replace: 'title: \'钾\','
    },
    {
        search: 'title: \'Calcium\',',
        replace: 'title: \'钙\','
    },
    {
        search: 'title: \'Scandium\',',
        replace: 'title: \'钪\','
    },
    {
        search: 'title: \'Titanium\',',
        replace: 'title: \'钛\','
    },
    {
        search: 'title: \'Vanadium\',',
        replace: 'title: \'钒\','
    },
    {
        search: 'title: \'Chromium\',',
        replace: 'title: \'铬\','
    },
    {
        search: 'title: \'Manganese\',',
        replace: 'title: \'锰\','
    },
    {
        search: 'title: \'Iron\',',
        replace: 'title: \'铁\','
    },
    {
        search: 'title: \'Cobalt\',',
        replace: 'title: \'钴\','
    },
    {
        search: 'title: \'Nickel\',',
        replace: 'title: \'镍\','
    },
    {
        search: 'title: \'Copper\',',
        replace: 'title: \'铜\','
    },
    {
        search: 'title: \'Zinc\',',
        replace: 'title: \'锌\','
    },
    {
        search: 'title: \'Gallium\',',
        replace: 'title: \'镓\','
    },
    {
        search: 'title: \'Germanium\',',
        replace: 'title: \'锗\','
    },
    {
        search: 'title: \'Arsenic\',',
        replace: 'title: \'砷\','
    },
    {
        search: 'title: \'Selenium\',',
        replace: 'title: \'硒\','
    },
    {
        search: 'title: \'Bromine\',',
        replace: 'title: \'溴\','
    },
    {
        search: 'title: \'Krypton\',',
        replace: 'title: \'氪\','
    },
    {
        search: 'title: \'Rubidium\',',
        replace: 'title: \'铷\','
    },
    {
        search: 'title: \'Strontium\',',
        replace: 'title: \'锶\','
    },
    {
        search: 'title: \'Yttrium\',',
        replace: 'title: \'钇\','
    },
    {
        search: 'title: \'Zirconium\',',
        replace: 'title: \'锆\','
    },
    {
        search: 'title: \'Niobium\',',
        replace: 'title: \'铌\','
    },
    {
        search: 'title: \'Molybdenum\',',
        replace: 'title: \'钼\','
    },
    {
        search: 'title: \'Technetium\',',
        replace: 'title: \'锝\','
    },
    {
        search: 'title: \'Ruthenium\',',
        replace: 'title: \'钌\','
    },
    {
        search: 'title: \'Rhodium\',',
        replace: 'title: \'铑\','
    },
    {
        search: 'title: \'Palladium\',',
        replace: 'title: \'钯\','
    },
    {
        search: 'title: \'Silver\',',
        replace: 'title: \'银\','
    },
    {
        search: 'title: \'Cadmium\',',
        replace: 'title: \'镉\','
    },
    {
        search: 'title: \'Indium\',',
        replace: 'title: \'铟\','
    },
    {
        search: 'title: \'Tin\',',
        replace: 'title: \'锡\','
    },
    {
        search: 'title: \'Antimony\',',
        replace: 'title: \'锑\','
    },
    {
        search: 'title: \'Tellurium\',',
        replace: 'title: \'碲\','
    },
    {
        search: 'title: \'Iodine\',',
        replace: 'title: \'碘\','
    },
    {
        search: 'title: \'Xenon\',',
        replace: 'title: \'氙\','
    },
    {
        search: 'title: \'Caesium\',',
        replace: 'title: \'铯\','
    },
    {
        search: 'title: \'Barium\',',
        replace: 'title: \'钡\','
    },
    {
        search: 'title: \'Lanthanum\',',
        replace: 'title: \'镧\','
    },
    {
        search: 'title: \'Cerium\',',
        replace: 'title: \'铈\','
    },
    {
        search: 'title: \'Praseodymium\',',
        replace: 'title: \'镨\','
    },
    {
        search: 'title: \'Neodymium\',',
        replace: 'title: \'钕\','
    },
    {
        search: 'title: \'Promethium\',',
        replace: 'title: \'钷\','
    },
    {
        search: 'title: \'Samarium\',',
        replace: 'title: \'钐\','
    },
    {
        search: 'title: \'Europium\',',
        replace: 'title: \'铕\','
    },
    {
        search: 'title: \'Gadolinium\',',
        replace: 'title: \'钆\','
    },
    {
        search: 'title: \'Terbium\',',
        replace: 'title: \'铽\','
    },
    {
        search: 'title: \'Dysprosium\',',
        replace: 'title: \'镝\','
    },
    {
        search: 'title: \'Holmium\',',
        replace: 'title: \'钬\','
    },
    {
        search: 'title: \'Erbium\',',
        replace: 'title: \'铒\','
    },
    {
        search: 'title: \'Thulium\',',
        replace: 'title: \'铥\','
    },
    {
        search: 'title: \'Ytterbium\',',
        replace: 'title: \'镱\','
    },
    {
        search: 'title: \'Lutetium\',',
        replace: 'title: \'镥\','
    },
    {
        search: 'title: \'Hafnium\',',
        replace: 'title: \'铪\','
    },
    {
        search: 'title: \'Tantalum\',',
        replace: 'title: \'钽\','
    },
    {
        search: 'title: \'Tungsten\',',
        replace: 'title: \'钨\','
    },
    {
        search: 'title: \'Rhenium\',',
        replace: 'title: \'铼\','
    },
    {
        search: 'title: \'Osmium\',',
        replace: 'title: \'锇\','
    },
    {
        search: 'title: \'Iridium\',',
        replace: 'title: \'铱\','
    },
    {
        search: 'title: \'Platinum\',',
        replace: 'title: \'铂\','
    },
    {
        search: 'title: \'Gold\',',
        replace: 'title: \'金\','
    },
    {
        search: 'title: \'Mercury\',',
        replace: 'title: \'汞\','
    },
    {
        search: 'title: \'Thallium\',',
        replace: 'title: \'铊\','
    },
    {
        search: 'title: \'Lead\',',
        replace: 'title: \'铅\','
    },
    {
        search: 'title: \'Bismuth\',',
        replace: 'title: \'铋\','
    },
    {
        search: 'title: \'Polonium\',',
        replace: 'title: \'钋\','
    },
    {
        search: 'title: \'Astatine\',',
        replace: 'title: \'砹\','
    },
    {
        search: 'title: \'Radon\',',
        replace: 'title: \'氡\','
    },
    {
        search: 'title: \'Francium\',',
        replace: 'title: \'镭\','
    },
    {
        search: 'title: \'Radium\',',
        replace: 'title: \'锑\','
    },
    {
        search: 'title: \'Actinium\',',
        replace: 'title: \'锕\','
    },
    {
        search: 'title: \'Thorium\',',
        replace: 'title: \'钍\','
    },
    {
        search: 'title: \'Protactinium\',',
        replace: 'title: \'镤\','
    },
    {
        search: 'title: \'Uranium\',',
        replace: 'title: \'铀\','
    },
    {
        search: 'title: \'Neptunium\',',
        replace: 'title: \'镎\','
    },
    {
        search: 'title: \'Plutonium\',',
        replace: 'title: \'钚\','
    },
    {
        search: 'title: \'Americium\',',
        replace: 'title: \'镅\','
    },
    {
        search: 'title: \'Curium\',',
        replace: 'title: \'锔\','
    },
    {
        search: 'title: \'Berkelium\',',
        replace: 'title: \'锫\','
    },
    {
        search: 'title: \'Californium\',',
        replace: 'title: \'锎\','
    },
    {
        search: 'title: \'Einsteinium\',',
        replace: 'title: \'锿\','
    },
    {
        search: 'title: \'Fermium\',',
        replace: 'title: \'镄\','
    },
    {
        search: 'title: \'Mendelevium\',',
        replace: 'title: \'钔\','
    },
    {
        search: 'title: \'Nobelium\',',
        replace: 'title: \'锘\','
    },
    {
        search: 'title: \'Lawrencium\',',
        replace: 'title: \'铹\','
    },
    {
        search: 'title: \'Rutherfordium\',',
        replace: 'title: \'𬬻\','
    },
    {
        search: 'title: \'Dubnium\',',
        replace: 'title: \'𬭊\','
    },
    {
        search: 'title: \'Seaborgium\',',
        replace: 'title: \'𬭳\','
    },
    {
        search: 'title: \'Bohrium\',',
        replace: 'title: \'𬭛\','
    },
    {
        search: 'title: \'Hassium\',',
        replace: 'title: \'𬭶\','
    },
    {
        search: 'title: \'Meitnerium\',',
        replace: 'title: \'𬭸\','
    },
    {
        search: 'title: \'Darmstadtium\',',
        replace: 'title: \'𬭹\','
    },
    {
        search: 'title: \'Roentgenium\',',
        replace: 'title: \'𬭽\','
    },
    {
        search: 'title: \'Copernicium\',',
        replace: 'title: \'𬭬\','
    },
    {
        search: 'title: \'Nihonium\',',
        replace: 'title: \'鿭\','
    },
    {
        search: 'title: \'Flerovium\',',
        replace: 'title: \'𬭞\','
    },
    {
        search: 'title: \'Moscovium\',',
        replace: 'title: \'𬭳\','
    },
    {
        search: 'title: \'Livermorium\',',
        replace: 'title: \'𬭶\','
    },
    {
        search: 'title: \'Tennessine\',',
        replace: 'title: \'𬭹\','
    },
    {
        search: 'title: \'Oganesson\',',
        replace: 'title: \'鿫\','
    },
    // dialog
    { search: 'Open structure', replace: '打开结构式' },
    { search: 'Paste from clipboard', replace: '从剪贴板粘贴' },
    { search: 'Open from file', replace: '从文件打开' },
    { search: 'or drag file here', replace: '或将文件拖到此处' },
    { search: 'Open as New Project', replace: '作为新项目打开' },
    { search: 'label: "Add to Canvas",', replace: 'label: "添加到画布",' },
    { search: 'children: "Click to add to canvas"', replace: 'children: "单击以添加到画布"' },
    {
        search: 'Structure will be loaded as fragment and added to Clipboard',
        replace: '结构将作为片段加载并添加到剪贴板'
    },
    { search: '[\'Cancel\', \'OK\']', replace: '[\'取消\', \'OK\']' },
    { search: 'children: "Cancel"', replace: 'children: "取消"' },
    { search: 'Error Message', replace: '错误' },
    { search: 'Error message', replace: '错误' },
    { search: 'Save Structure', replace: '保存结构' },
    { search: 'File name', replace: '文件名称' },
    { search: 'File format', replace: '文件格式' },
    { search: 'caption: \'Preview\',', replace: 'caption: \'预览\',' },
    { search: 'Warnings', replace: '警告' },
    { search: 'Can not display binary content', replace: '无法显示二进制内容' },
    { search: 'Save to Templates', replace: '保存到模板' },
    { search: 'Template Edit', replace: '模板编辑' },
    { search: 'children: "Save"', replace: 'children: "保存"' },
    { search: 'title: \'Save\',', replace: 'title: \'保存\',' },
    { search: 'Filename should contain at least one character', replace: '文件名应至少包含一个字符' },
    { search: '\'Templates\' : \'Edited templates\';', replace: '\'模板\' : \'编辑模板\';' },
    {
        search: 'are saved locally and cannot be accessed on different browsers or computers.',
        replace: '保存在本地，不能在不同的浏览器或计算机上访问。'
    },
    {
        search: 'Be aware that other users of the same computer and browser can access them as well.',
        replace: '请注意，同一台计算机和浏览器的其他用户也可以访问它们。'
    },
    { search: 'Molecule name', replace: '分子名称' },
    { search: 'Selected attachment points', replace: '选定的附着点' },
    { search: 'Atom ID', replace: '原子ID' },
    { search: 'Bond ID', replace: '键ID' },
    { search: 'placeholder: "template"', replace: 'placeholder: "模板"' },
    { search: '\'Save\' : \'Edit\'', replace: '\'保存\' : \'编辑\'' },
    {
        search: 'Template must have a unique name and no more than 128 symbols in length',
        replace: '模板必须有唯一的名称，长度不超过128个符号'
    },
    {
        search: 'Your browser doesn\'t allow pasting clipboard content via button. Please use shortcut instead.',
        replace: '您的浏览器不允许通过按钮粘贴剪贴板内容。请改用快捷方式。'
    },
    { search: 'for paste', replace: '用于粘贴' },
    { search: 'children: "Close"', replace: 'children: "关闭"' },
    { search: 'Structure Check', replace: '结构检查' },
    { search: 'children: "Settings"', replace: 'children: "设置"' },
    { search: 'No errors detected', replace: '未检测到错误' },
    { search: 'children: "Apply"', replace: 'children: "应用"' },
    { search: 'children: "Check"', replace: 'children: "检查"' },
    {
        search: 'This action is unavailable via menu. Instead, use shortcut to ',
        replace: '此操作在菜单中不可用。使用快捷键'
    },
    {
        search: '[\'Valence\', \'Radical\', \'Pseudoatom\', \'Stereochemistry\', \'Query\', \'Overlapping Atoms\', \'Overlapping Bonds\', \'R-Groups\', \'Chirality\', \'3D Structure\', \'Chiral flag\']',
        replace: '[\'化合价\', \'自由基\', \'赝原子\', \'立体化学\', \'Query\', \'重叠原子\', \'重叠键\', \'R组\', \'手性\', \'3D结构\', \'手性标志\']'
    },
    { search: 'title: \'Paste\',', replace: 'title: \'粘贴\',' },
    { search: 'title: "Paste",', replace: 'title: "粘贴",' },
    { search: 'Text Editor', replace: '文本编辑' },
    { search: 'title: "symbols"', replace: 'title: "符号"' },
    { search: 'Font Size', replace: '字体大小' },
    { search: 'OK: \'Apply\'', replace: 'OK: \'确定\'' },
    { search: 'OK: \'Close\'', replace: 'OK: \'关闭\'' },
    { search: 'Chemical Formula', replace: '化学式' },
    { search: 'Molecular Weight', replace: '分子量' },
    { search: 'Exact Mass', replace: '精确质量' },
    { search: 'Elemental Analysis', replace: '元素分析' },
    { search: 'Decimal places', replace: '小数位数' },
    { search: 'children: " Settings"', replace: 'children: " 设置"' },
    { search: 'Open from File', replace: '从文件打开' },
    { search: 'Save to File', replace: '保存到文件' },
    { search: 'title: "Reset"', replace: 'title: "重置"' },
    { search: 'label: \'General\',', replace: 'label: \'常规\',' },
    { search: 'label: \'Stereochemistry\',', replace: 'label: \'立体化学\',' },
    { search: 'label: \'Atoms\',', replace: 'label: \'原子\',' },
    { search: 'label: \'Bonds\',', replace: 'label: \'键\',' },
    { search: 'label: \'Server\',', replace: 'label: \'服务\',' },
    { search: 'label: \'3D Viewer\',', replace: 'label: \'3D视图\',' },
    { search: 'label: \'Options for Debugging\',', replace: 'label: \'调试选项\',' },
    { search: 'Reset to Select Tool', replace: '重置选择工具' },
    { search: '[\'on\', \'After Paste\', \'off\'],', replace: '[\'打开\', \'粘贴后\', \'关闭\'],' },
    { search: 'Rotation Step', replace: '旋转步长' },
    { search: 'Show valence warnings', replace: '显示化合价警告' },
    { search: 'Atom coloring', replace: '原子着色' },
    { search: 'title: \'Font\',', replace: 'title: \'字体\',' },
    { search: 'title: \'Font size\',', replace: 'title: \'字号\',' },
    { search: 'title: \'Sub font size\',', replace: 'title: \'上下标字号\',' },
    { search: 'title: \'Reaction component margin size\',', replace: 'title: \'反应条件边距大小\',' },
    { search: 'Image resolution', replace: '图片分辨率' },
    { search: 'ImageResolution["high"] = "600";', replace: 'ImageResolution["高"] = "600";' },
    { search: 'ImageResolution["low"] = "72";', replace: 'ImageResolution["低"] = "72";' },
    { search: 'ImageResolution.low', replace: 'ImageResolution["低"]' },
    { search: 'Show the Stereo flags', replace: '显示立体标志' },
    { search: 'Label display at\\xA0stereogenic\\xA0centers', replace: '立体中心的标志显示' },
    {
        search: '[\'IUPAC style\', \'Classic\', \'On\', \'Off\']',
        replace: '[\'IUPAC 风格\', \'经典风格\', \'打开\', \'关闭\']'
    },
    { search: 'Absolute Center color', replace: '绝对中心颜色' },
    { search: 'AND Centers color', replace: 'AND中心颜色' },
    { search: 'OR Centers color', replace: 'OR中心颜色' },
    { search: 'Color stereogenic centers', replace: '彩色立体中心' },
    {
        search: '[\'Labels Only\', \'Bonds Only\', \'Labels And Bonds\', \'Off\']',
        replace: '[\'仅标签\', \'仅键\', \'标签和键\', \'关闭\']'
    },
    { search: 'Auto fade And/Or center labels', replace: '自动淡入和/或居中标签' },
    { search: 'Text of Absolute flag', replace: '绝对标志文本' },
    { search: 'Text of AND flag', replace: 'AND标志文本' },
    { search: 'Text of OR flag', replace: 'OR标志文本' },
    { search: 'Text of Mixed flag', replace: '混合标志文本' },
    { search: 'Ignore the chiral flag', replace: '忽略标志文本' },
    { search: 'Display carbon explicitly', replace: '明确显示碳' },
    { search: 'Display charge', replace: '显示电荷' },
    { search: 'Display valence', replace: '显示化合价' },
    { search: 'Show hydrogen labels', replace: '显示氢气标签' },
    { search: 'ShowHydrogenLabels["Off"] = "off";', replace: 'ShowHydrogenLabels["Off"] = "关闭";' },
    {
        search: 'ShowHydrogenLabels["Hetero"] = "Hetero";',
        replace: 'ShowHydrogenLabels["Hetero"] = "显示非碳元素氢键";'
    },
    {
        search: 'ShowHydrogenLabels["Terminal"] = "Terminal";',
        replace: 'ShowHydrogenLabels["Hetero"] = "显示末端氢键";'
    },
    {
        search: 'ShowHydrogenLabels["TerminalAndHetero"] = "Terminal and Hetero";',
        replace: 'ShowHydrogenLabels["TerminalAndHetero"] = "显示非碳元素氢键+末端氢键";'
    },
    { search: 'ShowHydrogenLabels["On"] = "all";', replace: 'ShowHydrogenLabels["On"] = "全部";' },
    { search: 'ShowHydrogenLabelNames["Off"] = "Off";', replace: 'ShowHydrogenLabelNames["Off"] = "关闭";' },
    {
        search: 'ShowHydrogenLabelNames["Hetero"] = "Hetero";',
        replace: 'ShowHydrogenLabelNames["Hetero"] = "显示非碳元素氢键";'
    },
    {
        search: 'ShowHydrogenLabelNames["Terminal"] = "Terminal";',
        replace: 'ShowHydrogenLabelNames["Hetero"] = "显示末端氢键";'
    },
    {
        search: 'ShowHydrogenLabelNames["TerminalAndHetero"] = "Terminal and Hetero";',
        replace: 'ShowHydrogenLabelNames["TerminalAndHetero"] = "显示非碳元素氢键+末端氢键";'
    },
    { search: 'ShowHydrogenLabelNames["On"] = "On";', replace: 'ShowHydrogenLabelNames["On"] = "打开";' },
    { search: 'Aromatic Bonds as circle', replace: '芳香键作为圆' },
    { search: 'title: \'Bond length\',', replace: 'title: \'键长\',' },
    { search: 'title: \'Double bond width\',', replace: 'title: \'双键宽度\',' },
    { search: 'title: \'Bond thickness\',', replace: 'title: \'键厚度\',' },
    { search: 'title: \'Stereo (Wedge) bond width\',', replace: 'title: \'立体（楔形）键宽度\',' },
    { search: 'title: \'Hash spacing\',', replace: 'title: \'哈希间距\',' },
    { search: 'Smart-layout', replace: '智能布局' },
    { search: 'Ignore stereochemistry errors', replace: '忽略立体化学错误' },
    { search: 'Ignore pseudoatoms at mass', replace: '忽略伪原子质量' },
    { search: 'Add Rsites at mass calculation', replace: '在质量计算中添加R位点' },
    { search: 'Add Isotopes at\\xA0mass\\xA0calculation', replace: '在质量计算时添加同位素' },
    { search: 'Display mode', replace: '显示模式' },
    {
        search: '[\'Lines\', \'Balls and Sticks\', \'Licorice\']',
        replace: '[\'线框模型\', \'球棍模型\', \'棒状模型\']'
    },
    { search: 'Background color', replace: '背景颜色' },
    { search: '[\'Light\', \'Dark\']', replace: '[\'白色\', \'黑色\']' },
    { search: 'Label coloring', replace: '标签着色' },
    {
        search: '[\'No\', \'Bright\', \'Black and White\', \'Black\']',
        replace: '[\'打开\', \'明亮\', \'黑白\', \'黑\']'
    },
    { search: 'Show atom Ids', replace: '显示原子ID' },
    { search: 'Show bonds Ids', replace: '显示键ID' },
    { search: 'Show half bonds Ids', replace: '显示半键ID' },
    { search: 'Show loop Ids', replace: '显示环ID' },
    { search: 'title: \'Atom Generics\'', replace: 'title: \'原子泛型\'' },
    { search: 'displayName: \'any atom\'', replace: 'displayName: \'任意原子\'' },
    { search: 'displayName: \'except C or H\'', replace: 'displayName: \'C或H除外\'' },
    { search: 'displayName: \'any metal\'', replace: 'displayName: \'任意金属\'' },
    { search: 'displayName: \'any halogen\'', replace: 'displayName: \'任意卤素\'' },
    { search: 'title: \'Special Nodes\',', replace: 'title: \'特殊节点\',' },
    { search: 'title: \'Group Generics\',', replace: 'title: \'组泛型\',' },
    { search: 'title: \'Acyclic\',', replace: 'title: \'无环\',' },
    { search: 'title: \'Acyclic Carbo\',', replace: 'title: \'无环化合物\',' },
    { search: 'displayName: \'alkynyl\',', replace: 'displayName: \'炔基\',' },
    { search: 'displayName: \'alkyl\',', replace: 'displayName: \'烷基\',' },
    { search: 'displayName: \'alkenyl\',', replace: 'displayName: \'烯基\',' },
    { search: 'title: \'Cyclic\',', replace: 'title: \'环\',' },
    { search: 'displayName: \'no carbon\',', replace: 'displayName: \'无碳\',' },
    { search: 'title: \'Cyclic Carbo\',', replace: 'title: \'环状碳水化合物\',' },
    { search: 'displayName: \'aryl\',', replace: 'displayName: \'芳基\',' },
    { search: 'displayName: \'cycloalkyl\',', replace: 'displayName: \'环烷基\',' },
    { search: 'displayName: \'cycloalkenyl\',', replace: 'displayName: \'环烯基\',' },
    { search: 'title: \'Cyclic Hetero\',', replace: 'title: \'环状杂原子化合物\',' },
    { search: 'displayName: \'hetero aryl\',', replace: 'displayName: \'杂芳基\',' },
    { search: 'title: \'Single\',', replace: 'title: \'单一\',' },
    { search: 'title: \'List\',', replace: 'title: \'列表\',' },
    { search: 'title: \'Not List\',', replace: 'title: \'非列表\',' },
    { search: 'OK: \'Add\'', replace: 'OK: \'添加\'' },
    { search: 'OK: \'Apply\'', replace: 'OK: \'确定\'' },
    { search: 'Search by elements', replace: '按元素搜索' },
    { search: 'Template Library', replace: '模板库' },
    { search: 'label: "Functional Groups"', replace: 'label: "功能团"' },
    { search: 'title: \'Functional Groups\',', replace: 'title: \'功能团\',' },
    { search: 'label: "Salts and Solvents"', replace: 'label: "盐和溶剂"' },
    { search: 'Save to SDF', replace: '保存SDF文件' },
    { search: 'No items found', replace: '搜索结果为空' },
    { search: 'title: \'R-Group\',', replace: 'title: \'R组\',' },
    { search: 'Edit...', replace: '编辑' },
    { search: 'Edit selected bonds...', replace: '编辑选中的键' },
    { search: 'Edit selected atoms...', replace: '编辑选中的元素' },
    { search: 'Bond type', replace: '键类型' },
    { search: 'Enhanced stereochemistry...', replace: '立体化学设置' },
    { search: 'children: "Delete"', replace: 'children: "删除"' },
    { search: 'Bond Properties', replace: '键属性' },
    { search: 'title: "Type",', replace: 'title: "类型",' },
    { search: 'title: \'Type\',', replace: 'title: \'类型\',' },
    { search: 'Topology', replace: '拓扑结构' },
    { search: '[\'\', \'Either\', \'Ring\', \'Chain\']', replace: '[\'\', \'任何一个\', \'环\', \'链\']' },
    { search: 'Reacting Center', replace: '反应中心' },
    {
        search: '[\'\', \'Unmarked\', \'Not center\', \'Center\', \'No change\', \'Made/broken\', \'Order changes\', \'Made/broken and changes\']',
        replace: '[\'\', \'无标记\', \'不在中心\', \'中心\', \'无变化\', \'形成/断裂\', \'反应顺序变化\', \'形成/断裂与变化\']'
    },
    { search: 'Custom Query', replace: '自定义查询' },
    { search: 'Invalid custom query', replace: '无效的自定义查询' },
    { search: 'Atom Properties', replace: '原子属性' },
    { search: 'groupName: \'General\',', replace: 'groupName: \'常规\',' },
    { search: 'groupName: \'Query specific\',', replace: 'groupName: \'具体查询\',' },
    { search: 'groupName: \'Reaction flags\',', replace: 'groupName: \'反应标志\',' },
    { search: 'Atom Type', replace: '原子类型' },
    { search: 'title: \'Label\',', replace: 'title: \'标签\',' },
    { search: 'children: "Number"', replace: 'children: "数字"' },
    { search: 'title: \'Alias\',', replace: 'title: \'别名\',' },
    { search: 'title: \'Charge\',', replace: 'title: \'电荷\',' },
    { search: 'Isotope (atomic mass)', replace: '电荷同位素（原子质量）' },
    { search: 'title: \'Valence\',', replace: 'title: \'化合价\',' },
    { search: 'title: \'Radical\',', replace: 'title: \'自由基\',' },
    { search: '[\'Single\', \'List\', \'Special\']', replace: '[\'单一\', \'列表\', \'特殊\']' },
    {
        search: '[\'\', \'Monoradical\', \'Diradical (singlet)\', \'Diradical (triplet)\']',
        replace: '[\'\', \'单自由基\', \'双自由基（单重态）\', \'双自由基（三重态）\']'
    },
    { search: 'Ring bond count', replace: '环键计数' },
    { search: 'As drawn', replace: '如图所示' },
    { search: 'title: \'H count\',', replace: 'title: \'H计数\',' },
    { search: 'Substitution count', replace: '替换计数' },
    { search: 'title: \'Unsaturated\',', replace: 'title: \'不饱和的\',' },
    { search: 'title: \'Aromaticity\',', replace: 'title: \'芳香性\',' },
    { search: '[\'\', \'aromatic\', \'aliphatic\']', replace: '[\'\', \'芳香族\', \'脂肪族\']' },
    { search: 'Implicit H count', replace: '隐式H计数' },
    { search: 'Ring membership', replace: '环数' },
    { search: 'Ring size', replace: '环尺寸' },
    { search: 'title: \'Connectivity\',', replace: 'title: \'连通性\',' },
    { search: 'title: \'Chirality\',', replace: 'title: \'手性\',' },
    { search: '[\'\', \'anticlockwise\', \'clockwise\']', replace: '[\'\', \'逆时针\', \'顺时针\']' },
    { search: 'title: \'Inversion\',', replace: 'title: \'反转\',' },
    { search: 'Exact change', replace: '精确变换' },
    { search: '[\'\', \'Inverts\', \'Retains\']', replace: '[\'\', \'反转\', \'保留\']' },
    { search: 'Attachment Points', replace: '附着点' },
    { search: 'Primary attachment point', replace: '主要附着点' },
    { search: 'Secondary attachment point', replace: '次要附着点' },
    { search: 'R-Group Logic Condition', replace: 'R-组逻辑条件' },
    { search: 'Occurrence', replace: '出现' },
    { search: 'title: \'RestH\',', replace: 'title: \'重置H\',' },
    { search: 'title: \'Condition\',', replace: 'title: \'条件\',' },
    { search: '[\'Always\']', replace: '[\'一直\']' },
    { search: 'Wrong value', replace: '错误值' },
    { search: 'Edit Abbreviation', replace: '编辑缩写' },
    {
        search: 'A change was detected for the abbreviation. Do you want to remove the abbreviation information from the structure and continue work with separate atoms and bonds?',
        replace: '检测到缩写的变化。您想从结构中删除缩写信息并继续使用单独的原子和键吗？'
    },
    { search: 'value: \'Cancel\'', replace: 'value: \'取消\'' },
    { search: 'Remove Abbreviation', replace: '删除缩写' },
    { search: 'S-Group Properties', replace: 'S组属性' },
    { search: 'title: \'Context\'', replace: 'title: \'语境\'' },
    { search: 'Field name', replace: '字段名称' },
    { search: 'Field value', replace: '字段值' },
    { search: 'Enter name', replace: '输入名称' },
    { search: 'Enter value', replace: '输入值' },
    { search: 'Please, specify field value', replace: '请指定字段值' },
    { search: 'Please, specify field name', replace: '请指定字段名' },
    {
        search: '"enum": [\'Fragment\', \'Multifragment\', \'Bond\', \'Atom\', \'Group\'],',
        replace: '"enum": [\'Fragment\', \'Multifragment\', \'Bond\', \'Atom\', \'Group\'],"enumNames": [\'片段\', \'多片段\', \'键\', \'原子\', \'组\'],'
    },
    {
        search: '"enum": [\'Atom\', \'Bond\', \'Fragment\', \'Group\', \'Multifragment\'],',
        replace: '"enum": [\'Atom\', \'Bond\', \'Fragment\', \'Group\', \'Multifragment\'],"enumNames": [\'原子\', \'键\', \'片段\', \'组\', \'多片段\'],'
    },
    { search: 'title: \'Fragment\',', replace: 'title: \'片段\',' },
    { search: 'title: \'Multifragment\',', replace: 'title: \'多片段\',' },
    { search: 'title: \'Bond\',', replace: 'title: \'键\',' },
    { search: 'title: \'Atom\',', replace: 'title: \'原子\',' },
    { search: 'title: \'Group\',', replace: 'title: \'组\',' },
    {
        search: '"enum": [\'Absolute\', \'Relative\', \'Attached\'],',
        replace: '"enum": [\'Absolute\', \'Relative\', \'Attached\'],"enumNames": [\'绝对\', \'相对\', \'附属\'],'
    },
    { search: 'title: \'Data\',', replace: 'title: \'数据\',' },
    { search: 'Multiple group', replace: '多组' },
    { search: 'SRU polymer', replace: 'SRU聚合物' },
    { search: 'Superatom', replace: '超原子' },
    { search: 'title: \'Query component\',', replace: 'title: \'查询组件\',' },
    { search: 'Polymer label', replace: '聚合物标签' },
    { search: 'Repeat Pattern', replace: '重复模式' },
    { search: 'Repeat Pattern', replace: '重复模式' },
    {
        search: '[\'Head-to-tail\', \'Head-to-head\', \'Either unknown\']',
        replace: '[\'头对尾\', \'头对头\', \'Either unknown\']'
    },
    { search: 'Repeat count', replace: '重复个数' },
    { search: 'title: \'Name\',', replace: 'title: \'名称\',' },
    { search: ', " Bond"', replace: ', " ... "' },
    {
        search: '[\'\', \'Single\', \'Single Up\', \'Single Down\', \'Single Up/Down\', \'Double\', \'Double Cis/Trans\', \'Triple\', \'Aromatic\', \'Any\', \'Hydrogen\', \'Single/Double\', \'Single/Aromatic\', \'Double/Aromatic\', \'Dative\']',
        replace: '[\'\', \'单键\', \'黑体楔形键\', \'虚线楔形键\', \'不明楔形键\', \'双键\', \'双键顺反异构\', \'三键\', \'芳香键\', \'任意键\', \'氢键\', \'单键/双键\', \'单键/芳香键\', \'双键/芳香键\', \'配价键\']'
    },
    { search: '"Benzene\\n', replace: '"环苯\\n' },
    { search: '"Cyclopentadiene\\n', replace: '"环戊二希\\n' },
    { search: '"Cyclohexane\\n', replace: '"环己烷\\n' },
    { search: '"Cyclopentane\\n', replace: '"环戊烷\\n' },
    { search: '"Cyclopropane\\n', replace: '"环丙烷\\n' },
    { search: '"Cyclobutane\\n', replace: '"环丁烷\\n' },
    { search: '"Cycloheptane\\n', replace: '"环庚烷\\n' },
    { search: '"Cyclooctane\\n', replace: '"环辛烷\\n' },
    { search: 'label: "Query properties",', replace: 'label: "查询属性",' },
    { search: 'Add attachment point', replace: '添加附着点' },
    { search: 'Remove attachment point', replace: '移除附着点' },
    { search: 'children: label || \'none\'', replace: 'children: label || \'无\'' },
    { search: 'label: \'Unsaturated\',', replace: 'label: \'不饱和的\',' },
    { search: 'label: \'Saturated\',', replace: 'label: \'饱和的\',' },
    { search: 'Query bonds', replace: '查询键' },
    { search: 'Edit S-Group...', replace: '编辑S组...' },
    { search: 'Attach S-Group...', replace: '附加S组...' },
    { search: 'dispatch(openInfoModal(\'Cut\'));', replace: 'dispatch(openInfoModal(\'剪切\'));' },
    { search: 'dispatch(openInfoModal(\'Paste\'));', replace: 'dispatch(openInfoModal(\'粘贴\'));' },
    { search: 'dispatch(openInfoModal(\'Copy\'));', replace: 'dispatch(openInfoModal(\'复制\'));' },
    // 画布舞台选中图形操作
    { search: 'Horizontal Flip', replace: '水平翻转' },
    { search: 'Vertical Flip', replace: '垂直翻转' },
    { search: '#167782', replace: '#0a93fc' },
]
