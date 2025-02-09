import { ObjectSchema } from '@eslint/object-schema'
import {
  type AsyncFunction,
  isAsyncFunction,
  isFunction,
  isNumber,
  isRecord,
  isString,
} from '@tool-belt/type-predicates'

import type {
  Emoji,
  GraphicSymbol,
  LineHeight,
  LocaleLabel,
  PageSize,
  Template,
  UmoEditorOptions,
} from '@/types'

// 默认配置
const defaultOptions: UmoEditorOptions = {
  editorKey: 'default',
  locale: 'bo',
  theme: 'light',
  height: '100%',
  dicts: {
    fonts: [
      {
        label: { en_US: 'Default Font', zh_CN: 'སྔོན་སྒྲིག་ཡིག་གཟུགས།', bo: 'སྔོན་སྒྲིག་ཡིག་གཟུགས།' },
        value: null,
      },
      {
        label: { en_US: 'Monlam Uni OuChan2', bo: 'སྨོན་ལམ་དབུ་ཅན་གཉིས་པ།' },
        value: 'Monlam Uni OuChan2',
      },
      {
        label: { en_US: 'Monlam Uni OuChan3', bo: 'སྨོན་ལམ་དབུ་ཅན་གསུམ་པ།' },
        value: 'Monlam Uni OuChan3',
      },
      {
        label: { en_US: 'Monlam Uni OuChan4', bo: 'སྨོན་ལམ་དབུ་ཅན་བཞི་བ།' },
        value: 'Monlam Uni OuChan4',
      },
      {
        label: { en_US: 'Monlam Uni OuChan5', bo: 'སྨོན་ལམ་དབུ་ཅན་ལྔ་བ།' },
        value: 'Monlam Uni OuChan5',
      },
      {
        label: { en_US: 'Qomolangma-UchenSarchen', bo: 'ཇོ་མོ་གླང་མ་དབུ་ཅན་གསར་ཆེན།' },
        value: 'Qomolangma-UchenSarchen',
      },
      {
        label: { en_US: 'Qomolangma-UchenSarchung', bo: 'ཇོ་མོ་གླང་མ་དབུ་ཅན་གསར་ཆུང་།' },
        value: 'Qomolangma-UchenSarchung',
      },
      {
        label: { en_US: 'Qomolangma-Drutsa', bo: 'ཇོ་མོ་གླང་མ་འབྲུ་ཚ།' },
        value: 'Qomolangma-Drutsa',
      },
      {
        label: { en_US: 'Qomolangma-Betsu', bo: 'ཇོ་མོ་གླང་མ་དཔེ་ཚུགས།' },
        value: 'Qomolangma-Betsu',
      },
      {
        label: { en_US: 'DDC Uchen', bo: 'DDC དབུ་ཅན།' },
        value: 'DDC Uchen',
      },
      {
        label: { en_US: 'DDC Rinzin', bo: 'DDC རིན་ཆེན་དབུ་ཅན།' },
        value: 'DDC Rinzin',
      },
      {
        label: { en_US: 'Jomolhari', bo: 'ཇོ་མོ་ལྷ་རི།' },
        value: 'Jomolhari',
      },
      {
        label: { en_US: 'Noto Sans Tibetan', bo: 'Noto Sans བོད་ཡིག' },
        value: 'Noto Sans Tibetan',
      },
      {
        label: { en_US: 'Microsoft Himalaya', bo: 'Microsoft ཧི་མ་ལ་ཡ།' },
        value: 'Microsoft Himalaya',
      },
      {
        label: { en_US: 'Tibetan Machine Uni', bo: 'བོད་ཡིག་འཕྲུལ་ཆས།' },
        value: 'Tibetan Machine Uni',
      },
      {
        label: { en_US: 'MiSans Tibetan', bo: 'ཞའོ་མི་དབུ་ཅན།' },
        value: 'MiSans Tibetan',
      },
      {
        label: { en_US: 'Uchen_05', bo: 'དབུ་ཅན་༠༥' },
        value: 'Uchen_05',
      },
      { label: 'Arial', value: 'Arial' },
      { label: 'Times New Roman', value: 'Times New Roman' },
      { label: 'Verdana', value: 'Verdana' },
      { label: 'Helvetica', value: 'Helvetica' },
      { label: 'Calibri', value: 'Calibri' },
      { label: 'Cambria', value: 'Cambria' },
      { label: 'Tahoma', value: 'Tahoma' },
      { label: 'Georgia', value: 'Georgia' },
      { label: 'Comic Sans MS', value: 'Comic Sans MS' },
      { label: 'Impact', value: 'Impact' },
    ],
    // prettier-ignore
    colors: [
			"#FFF",
			"#000",
			"#4A5366",
			"#3B74EC",
			"#45A2EF",
			"#529867",
			"#CD4A3F",
			"#EA8D40",
			"#EEC543",
			"#8E45D0",
			"#F2F2F2",
			"#7F7F7F",
			"#F4F5F7",
			"#CBDCFC",
			"#E8F6FE",
			"#EDFAF2",
			"#FCEAE9",
			"#FDF3EC",
			"#FEF9E5",
			"#FAECFE",
			"#EEE",
			"#595959",
			"#C6CAD2",
			"#CEEBFD",
			"#CBDCFC",
			"#CBE9D7",
			"#F7CBC9",
			"#FADDC7",
			"#FDEEB5",
			"#EBCAFC",
			"#BFBFBF",
			"#3F3F3F",
			"#828B9D",
			"#A0BEFA",
			"#A7DCFC",
			"#A6D5B8",
			"#F2A19C",
			"#F5BC8C",
			"#FBE281",
			"#CB94F9",
			"#A5A5A5",
			"#262626",
			"#363B44",
			"#2452B2",
			"#3473A1",
			"#417A53",
			"#922B22",
			"#AD642A",
			"#9E8329",
			"#57297D",
			"#939393",
			"#0D0D0D",
			"#25272E",
			"#15316A",
			"#1C415A",
			"#284D34",
			"#511712",
			"#573213",
			"#635217",
			"#36194E",
		],
    lineHeights: [
      {
        label: { 
          en_US: 'Single', 
          zh_CN: 'ཐིག་ཕྲེང་བར་ཐག་ཚད་གཅིག', 
          bo: 'ཐིག་ཕྲེང་བར་ཐག་ཚད་གཅིག'
        },
        value: 1,
      },
      {
        label: {
          en_US: '1.5 Line Spacing',
          zh_CN: 'ཐིག་ཕྲེང་བར་ཐག་ ༡.༥', 
          bo: 'ཐིག་ཕྲེང་བར་ཐག་ ༡.༥'
        },
        value: 1.5,
        default: true,
      },
      {
        label: { 
          en_US: 'Double', 
          zh_CN: 'ཐིག་ཕྲེང་བར་ཐག་ཉིས་ལྡབ།', 
          bo: 'ཐིག་ཕྲེང་བར་ཐག་ཉིས་ལྡབ།'
        },
        value: 2,
      },
      {
        label: {
          en_US: '2.5 Line Spacing',
          zh_CN: 'ཐིག་ཕྲེང་བར་ཐག་ ༢.༥',
          bo: 'ཐིག་ཕྲེང་བར་ཐག་ ༢.༥'
        },
        value: 2.5,
      },
      {
        label: { 
          en_US: 'Triple', 
          zh_CN: 'ཐིག་ཕྲེང་བར་ཐག་གསུམ་ལྡབ།', 
          bo: 'ཐིག་ཕྲེང་བར་ཐག་གསུམ་ལྡབ།'
        },
        value: 3,
      },
    ],
    symbols: [
      {
        label: {
          en_US: 'Plain Text',
          zh_CN: 'ཡིག་རྐྱང་།',
          bo: 'ཡིག་རྐྱང་།'
        },
        items: '༄༅། ༄༅༅། ༅། ༆ ༇ ༈ ༉ ༊ ༎ ༏ ༐ ༑ ༒ ༔ ༴ ྅ ༠ ༡ ༢ ༣ ༤ ༥ ༦ ༧ ༨ ༩ ༪ ༫ ༬ ༭ ༮ ༯ ༰ ༱ ༲ ༳ ༵ ༶ ༷ ༸ ༹ ༺ ༻ ༼ ༽ ༾ ༿',
      },
      {
        label: {
          en_US: 'Currency Symbols',
          zh_CN: 'དངུལ་རྟགས།',
          bo: 'དངུལ་རྟགས།'
        },
        items: '$€¥£¢₠₡₢₣₤¤₿₥₦₧₨₩₪₫₭₮₯₰₱₲₳₴₵₶₷₸₹₺₻₼₽',
      },
      {
        label: {
          en_US: 'Mathematical Symbols',
          zh_CN: 'རྩིས་རྟགས།',
          bo: 'རྩིས་རྟགས།'
        },
        items: '﹢﹣×÷±/=≌∽≦≧≒﹤﹥≈≡≠=≤≥<>≮≯∷∶∫∮∝∞∧∨∑∏∪∩∈∵∴⊥∥∠⌒⊙√∟⊿',
      },
      {
        label: { 
          en_US: 'Arrows', 
          zh_CN: 'མདའ་རྟགས།', 
          bo: 'མདའ་རྟགས།'
        },
        items: '↑↓←→↖↗↙↘⇧⇩⇦⇨⇄⇅↵↩↪↫↬↭↯↰↱↲↳↴↵↶↷↸↹↺↻↼↽↾↿⇀⇁⇂⇃⇞⇟⇠⇡⇢⇣',
      },
      {
        label: {
          en_US: 'Tibetan Script',
          zh_CN: 'བོད་ཡིག',
          bo: 'བོད་ཡིག'
        },
        items: 'ཀ ཁ ག ང ཅ ཆ ཇ ཉ ཏ ཐ ད ན པ ཕ བ མ ཙ ཚ ཛ ཝ ཞ ཟ འ ཡ ར ལ ཤ ས ཧ ཨ',
      },
    ],
    emojis: [
      {
        label: {
          en_US: 'Emotions & People',
          zh_CN: '表情与角色',
          ru_RU: 'Эмоции & Люди',
        },
        items:
          '😀 😃 😄 😁 😆 😅 🤣 😂 🙂 🙃 🫠 😉 😊 😇 🥰 😍 🤩 😘 😗 ☺️ 😚 😙 🥲 😋 😛 😜 🤪 😝 🤑 🤗 🤭 🫢 🫣 🤫 🤔 🫡 🤐 🤨 😐 😑 😶 🫥 😶‍🌫️ 😏 😒 🙄 😬 😮‍💨 🤥 😌 😔 😪 🤤 😴 😷 🤒 🤕 🤢 🤮 🤧 🥵 🥶 🥴 😵 😵‍💫 🤯 🤠 🥳 🥸 😎 🤓 🧐 😕 🫤 😟 🙁 ☹️ 😮 😯 😲 😳 🥺 🥹 😦 😧 😨 😰 😥 😢 😭 😱 😖 😣 😞 😓 😩 😫 🥱 😤 😡 😠 🤬 😈 👿 💀 ☠️ 💩 🤡 👹 👺 👻 👽 👾 🤖 👋 🤚 🖐️ ✋ 🖖 🫱 🫲 🫳 🫴 👌 🤌 🤏 ✌️ 🤞 🫰 🤟 🤘 🤙 👈 👉 👆 🖕 👇 ☝️ 🫵 👍 👎 ✊ 👊 🤛 🤜 👏 🙌 🫶 👐 🤲 🤝 🙏 ✍️ 💅 🤳 💪 🦾 🦿 🦵 🦶 👂 🦻',
      },
      {
        label: {
          en_US: 'Animals & Nature',
          zh_CN: '动物与自然',
          ru_RU: 'Животные & Природа',
        },
        items:
          '🐵 🐒 🦍 🦧 🐶 🐕 🦮 🐕‍🦺 🐩 🐺 🦊 🦝 🐱 🐈 🐈‍⬛ 🦁 🐯 🐅 🐆 🐴 🐎 🦄 🦓 🦌 🦬 🐮 🐂 🐃 🐄 🐷 🐖 🐗 🐽 🐏 🐑 🐐 🐪 🐫 🦙 🦒 🐘 🦣 🦏 🦛 🐭 🐁 🐀 🐹 🐰 🐇 🐿️ 🦫 🦔 🦇 🐻 🐻‍❄️ 🐨 🐼 🦥 🦦 🦨 🦘 🦡 🐾 🦃 🐔 🐓 🐣 🐤 🐥 🐦 🐧 🕊️ 🦅 🦆 🦢 🦉 🦤 🪶 🦩 🦚 🦜 🐸 🐊 🐢 🦎 🐍 🐲 🐉 🦕 🦖 🐳 🐋 🐬 🦭 🐟 🐠 🐡 🦈 🐙 🐚 🪸 🐌 🦋 🐛 🐜 🐝 🪲 🐞 🦗 🪳 🕷️ 🕸️ 🦂 🦟 🪰 🪱 🦠 💐 🌸 💮 🪷 🏵️ 🌹 🥀 🌺 🌻 🌼 🌷 🌱 🪴 🌲 🌳 🌴 🌵 🌾 🌿 ☘️ 🍀 🍁 🍂 🍃 🪹 🪺',
      },
      {
        label: {
          en_US: 'Food & Drink',
          zh_CN: '食物与食品',
          ru_RU: 'Еда & Напитки',
        },
        items:
          '🥬 🥦 🧄 🧅 🍄 🥜 🫘 🌰 🍞 🥐 🥖 🫓 🥨 🥯 🥞 🧇 🧀 🍖 🍗 🥩 🥓 🍔 🍟 🍕 🌭 🥪 🌮 🌯 🫔 🥙 🧆 🥚 🍳 🥘 🍲 🫕 🥣 🥗 🍿 🧈 🧂 🥫 🍱 🍘 🍙 🍚 🍛 🍜 🍝 🍠 🍢 🍣 🍤 🍥 🥮 🍡 🥟 🥠 🥡 🦀 🦞 🦐 🦑 🦪 🍦 🍧 🍨 🍩 🍪 🎂 🍰 🧁 🥧 🍫 🍬 🍭 🍮 🍯 🍼 🥛 ☕ 🫖 🍵 🍶 🍾 🍷 🍸 🍹 🍺 🍻 🥂 🥃 🫗 🥤 🧋 🧃 🧉 🧊 🥢 🍽️ 🍴 🥄 🔪 🫙 🏺',
      },
      {
        label: { en_US: 'Activities', zh_CN: '活动', ru_RU: 'Активность' },
        items:
          '🎗️ 🎟️ 🎫 🎖️ 🏆 🏅 🥇 🥈 🥉 ⚽ ⚾ 🥎 🏀 🏐 🏈 🏉 🎾 🥏 🎳 🏏 🏑 🏒 🥍 🏓 🏸 🥊 🥋 🥅 ⛳ ⛸️ 🎣 🤿 🎽 🎿 🛷 🥌 🎯 🪀 🪁 🎱 🔮 🪄 🧿 🪬 🎮 🕹️ 🎰 🎲 🧩 🧸 🪅 🪩 🪆 ♠️ ♥️ ♦️ ♣️ ♟️ 🃏 🀄 🎴 🎭 🖼️ 🎨 🧵 🪡 🧶 🪢',
      },
      {
        label: {
          en_US: 'Travel & Places',
          zh_CN: '旅行与景点',
          ru_RU: 'Путешествия & Места',
        },
        items:
          '🚈 🚉 🚊 🚝 🚞 🚋 🚌 🚍 🚎 🚐 🚑 🚒 🚓 🚔 🚕 🚖 🚗 🚘 🚙 🛻 🚚 🚛 🚜 🏎️ 🏍️ 🛵 🦽 🦼 🛺 🚲 🛴 🛹 🛼 🚏 🛣️ 🛤️ 🛢️ ⛽ 🛞 🚨 🚥 🚦 🛑 🚧 ⚓ 🛟 ⛵ 🛶 🚤 🛳️ ⛴️ 🛥️ 🚢 ✈️ 🛩️ 🛫 🛬 🪂 💺 🚁 🚟 🚠 🚡 🛰️ 🚀 🛸 🛎️ 🧳 ⌛ ⏳ ⌚ ⏰ ⏱️ ⏲️ 🕰️ 🕛 🕧 🕐 🕜 🕑 🕝 🕒 🕞 🕓 🕟 🕔 🕠 🕕 🕡 🕖 🕢 🕗 🕣 🕘 🕤 🕙 🕥 🕚 🕦 🌑 🌒 🌓 🌔 🌕 🌖 🌗 🌘 🌙 🌚 🌛 🌜 🌡️ ☀️ 🌝 🌞 🪐 ⭐ 🌟 🌠 🌌 ☁️ ⛅ ⛈️ 🌤️ 🌥️ 🌦️ 🌧️ 🌨️ 🌩️ 🌪️ 🌫️ 🌬️ 🌀 🌈 🌂 ☂️ ☔ ⛱️ ⚡ ❄️ ☃️ ⛄ ☄️ 🔥 💧 🌊',
      },
      {
        label: { en_US: 'Objects', zh_CN: '物品', ru_RU: 'Объекты' },
        items:
          '📃 📜 📄 📰 🗞️ 📑 🔖 🏷️ 💰 🪙 💴 💵 💶 💷 💸 💳 🧾 💹 ✉️ 📧 📨 📩 📤 📥 📦 📫 📪 📬 📭 📮 🗳️ ✏️ ✒️ 🖋️ 🖊️ 🖌️ 🖍️ 📝 💼 📁 📂 🗂️ 📅 📆 🗒️ 🗓️ 📇 📈 📉 📊 📋 📌 📍 📎 🖇️ 📏 📐 ✂️ 🗃️ 🗄️ 🗑️ 🔒 🔓 🔏 🔐 🔑 🗝️ 🔨 🪓 ⛏️ ⚒️ 🛠️ 🗡️ ⚔️ 🔫 🪃 🏹 🛡️ 🪚 🔧 🪛 🔩 ⚙️ 🗜️ ⚖️ 🦯 🔗 ⛓️ 🪝 🧰 🧲 🪜 ⚗️ 🧪 🧫 🧬 🔬 🔭 📡 💉 🩸 💊 🩹 🩼 🩺 🩻 🚪 🛗 🪞 🪟 🛏️ 🛋️ 🪑 🚽 🪠 🚿 🛁 🪤 🪒 🧴 🧷 🧹 🧺 🧻 🪣 🧼 🫧 🪥 🧽 🧯 🛒 🚬 ⚰️ 🪦 ⚱️ 🗿 🪧 🪪',
      },
      {
        label: { en_US: 'Symbols', zh_CN: '符号', ru_RU: 'Символы' },
        items:
          '➰ ➿ 〽️ ✳️ ✴️ ❇️ ©️ ®️ ™️ #️⃣ *️⃣ 0️⃣ 1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟 🔠 🔡 🔢 🔣 🔤 🅰️ 🆎 🅱️ 🆑 🆒 🆓 ℹ️ 🆔 Ⓜ️ 🆕 🆖 🅾️ 🆗 🅿️ 🆘 🆙 🆚 🈁 🈂️ 🔴 🟠 🟡 🟢 🔵 🟣 🟤 ⚫ ⚪ 🟥 🟧 🟨 🟩 🟦 🟪 🟫 ⬛ ⬜ ◼️ ◻️ ◾ ◽ ▪️ ▫️ 🔶 🔷 🔸 🔹 🔺 🔻 💠 🔘 🔳 🔲',
      },
      {
        label: { en_US: 'Flags', zh_CN: '旗帜', ru_RU: 'Флаги' },
        items:
          '🏁 🇨🇳 🎌 🇩🇪 🇪🇸 🇦🇨 🇦🇩 🇦🇪 🇦🇫 🇦🇬 🇦🇮 🇦🇱 🇦🇲 🇦🇴 🇦🇶 🇦🇷 🇦🇸 🇦🇹 🇦🇺 🇦🇼 🇦🇽 🇦🇿 🇧🇦 🇧🇧 🇧🇩 🇧🇪 🇧🇫 🇧🇬 🇧🇭 🇧🇮 🇧🇯 🇧🇱 🇧🇲 🇧🇳 🇧🇴 🇧🇶 🇧🇷 🇧🇸 🇧🇹 🇧🇻 🇧🇼 🇧🇾 🇧🇿 🇨🇦 🇨🇨 🇨🇩 🇨🇫 🇨🇬 🇨🇭 🇨🇮 🇨🇰 🇨🇱 🇨🇲 🇨🇴 🇨🇵 🇨🇷 🇨🇺 🇨🇻 🇨🇼 🇨🇽 🇨🇾 🇨🇿 🇩🇬 🇩🇯 🇩🇰 🇩🇲 🇩🇴 🇩🇿 🇪🇦 🇪🇨 🇪🇪 🇪🇬 🇪🇭 🏴󠁧󠁢󠁥󠁮󠁧󠁿 🇪🇷 🇪🇹 🇪🇺 🇫🇮 🇫🇯 🇫🇰 🇫🇲 🇫🇴 🇬🇦 🇬🇩 🇬🇪 🇬🇫 🇬🇬 🇬🇭 🇬🇮 🇬🇱 🇬🇲 🇬🇳 🇬🇵 🇬🇶 🇬🇷 🇬🇸 🇬🇹 🇬🇺 🇬🇼 🇬🇾 🇭🇰 🇭🇲 🇭🇳 🇭🇷 🇭🇹 🇭🇺 🇮🇨 🇮🇩 🇮🇪 🇮🇱 🇮🇲 🇮🇳 🇮🇴 🇮🇶 🇮🇷 🇮🇸 🇯🇪 🇯🇲 🇯🇴 🇰🇪 🇰🇬 🇰🇭 🇰🇮 🇰🇲 🇰🇳 🇰🇵 🇰🇼 🇰🇾 🇰🇿 🇱🇦 🇱🇧 🇱🇨 🇱🇮 🇱🇰 🇱🇷 🇱🇸 🇱🇹 🇱🇺 🇱🇻 🇱🇾 🇲🇦 🇲🇨 🇲🇩 🇲🇪 🇲🇫 🇲🇬 🇲🇭 🇲🇰 🇲🇱 🇲🇲 🇲🇳 🇲🇴 🇲🇵 🇲🇶 🇲🇷 🇲🇸 🇲🇹 🇲🇺 🇲🇻 🇲🇼 🇲🇽 🇲🇾 🇲🇿 🇳🇦 🇳🇨 🇳🇪 🇳🇫 🇳🇬 🇳🇮 🇳🇱 🇳🇴',
      },
    ],
    pageSizes: [
      { label: 'A4', width: 21.0, height: 29.7, default: true },
      { label: 'A3', width: 29.7, height: 42.0 },
      { label: 'A5', width: 14.8, height: 21.0 },
      { label: 'B5', width: 17.6, height: 25.0 },
      {
        label: {
          en_US: 'No. 5 Envelope',
          zh_CN: 'ཡིག་སྐོགས་ཨང་ ༥',
          bo: 'ཡིག་སྐོགས་ཨང་ ༥'
        },
        width: 10.9,
        height: 12.9,
      },
      {
        label: {
          en_US: 'No. 6 Envelope',
          zh_CN: 'ཡིག་སྐོགས་ཨང་ ༦',
          bo: 'ཡིག་སྐོགས་ཨང་ ༦'
        },
        width: 11.9,
        height: 22.9,
      },
      {
        label: {
          en_US: 'No. 7 Envelope',
          zh_CN: 'ཡིག་སྐོགས་ཨང་ ༧',
          bo: 'ཡིག་སྐོགས་ཨང་ ༧'
        },
        width: 16.1,
        height: 22.8,
      },
      {
        label: {
          en_US: 'No. 9 Envelope',
          zh_CN: 'ཡིག་སྐོགས་ཨང་ ༩',
          bo: 'ཡིག་སྐོགས་ཨང་ ༩'
        },
        width: 22.8,
        height: 32.3,
      },
      {
        label: {
          en_US: 'Legal Paper',
          zh_CN: 'ཁྲིམས་ལུགས་ཤོག་བུ།',
          bo: 'ཁྲིམས་ལུགས་ཤོག་བུ།'
        },
        width: 21.5,
        height: 33.5,
      },
      {
        label: {
          en_US: 'Letter Paper',
          zh_CN: 'ཡི་གེའི་ཤོག་བུ།',
          bo: 'ཡི་གེའི་ཤོག་བུ།'
        },
        width: 21.5,
        height: 27.9,
      },
    ],
  },
  toolbar: {
    defaultMode: 'ribbon',
    enableSourceEditor: true,
    menus: ['base', 'insert', 'table', 'tools', 'page', 'export'],
    disableMenuItems: [],
    importWord: {
      enabled: true,
      options: {
        lang: 'bo'
      },
      useCustomMethod: false,
    },
  },
  page: {
    defaultMargin: {
      left: 3.18,
      right: 3.18,
      top: 2.54,
      bottom: 2.54,
    },
    defaultOrientation: 'portrait',
    defaultBackground: '#fff',
    showBreakMarks: true,
    watermark: {
      type: 'compact',
      alpha: 0.2,
      fontColor: '#000',
      fontSize: 16,
      fontFamily: 'Jomolhari',
      fontWeight: 'normal',
      text: '',
    },
  },
  document: {
    title: '',
    content: '',
    placeholder: {
      en_US: 'Please enter the document content...',
      zh_CN: 'ཡིག་ཆའི་ནང་དོན་འཇུག་རོགས།',
      bo: 'ཡིག་ཆའི་ནང་དོན་འཇུག་རོགས།'
    },
    enableSpellcheck: true,
    enableMarkdown: true,
    enableBubbleMenu: true,
    enableBlockMenu: true,
    // enableComment: false,
    readOnly: false,
    autofocus: true,
    characterLimit: 0,
    typographyRules: {},
    // https://prosemirror.net/docs/ref/#view.EditorProps
    editorProps: {
      attributes: {
        style: 'font-family: Jomolhari;'
      }
    },
    // https://prosemirror.net/docs/ref/#model.ParseOptions
    parseOptions: {
      preserveWhitespace: 'full',
    },
    autoSave: {
      enabled: true,
      interval: 300000,
    },
  },
  assistant: {
    enabled: false,
    maxlength: 100,
    commands: [
      {
        label: { 
          en_US: 'Continuation', 
          zh_CN: 'མུ་མཐུད།', 
          bo: 'མུ་མཐུད།'
        },
        value: { 
          en_US: 'Continuation', 
          zh_CN: 'མུ་མཐུད།', 
          bo: 'མུ་མཐུད།'
        },
      },
      {
        label: { 
          en_US: 'Rewrite', 
          zh_CN: 'བསྐྱར་བྲིས།', 
          bo: 'བསྐྱར་བྲིས།'
        },
        value: { 
          en_US: 'Rewrite', 
          zh_CN: 'བསྐྱར་བྲིས།', 
          bo: 'བསྐྱར་བྲིས།'
        },
      },
      {
        label: { 
          en_US: 'Abbreviation', 
          zh_CN: 'བསྡུས་ཡིག', 
          bo: 'བསྡུས་ཡིག'
        },
        value: { 
          en_US: 'Abbreviation', 
          zh_CN: 'བསྡུས་ཡིག', 
          bo: 'བསྡུས་ཡིག'
        },
      },
      {
        label: { 
          en_US: 'Expansion', 
          zh_CN: 'རྒྱས་བཤད།', 
          bo: 'རྒྱས་བཤད།'
        },
        value: { 
          en_US: 'Expansion', 
          zh_CN: 'རྒྱས་བཤད།', 
          bo: 'རྒྱས་བཤད།'
        },
      },
      {
        label: { 
          en_US: 'Polish', 
          zh_CN: 'ཞུ་དག', 
          bo: 'ཞུ་དག'
        },
        value: { 
          en_US: 'Polish', 
          zh_CN: 'ཞུ་དག', 
          bo: 'ཞུ་དག'
        },
      },
      {
        label: { 
          en_US: 'Proofread', 
          zh_CN: 'ཞིབ་བཤེར།', 
          bo: 'ཞིབ་བཤེར།'
        },
        value: { 
          en_US: 'Proofread', 
          zh_CN: 'ཞིབ་བཤེར།', 
          bo: 'ཞིབ་བཤེར།'
        },
      },
      {
        label: { 
          en_US: 'Translate', 
          zh_CN: 'ཡིག་སྒྱུར།', 
          bo: 'ཡིག་སྒྱུར།'
        },
        value: {
          en_US: 'Translate to chinese',
          zh_CN: 'དབྱིན་ཡིག་ཏུ་བསྒྱུར།',
          bo: 'དབྱིན་ཡིག་ཏུ་བསྒྱུར།'
        },
        autoSend: false,
      },
    ],
  },
  templates: [],
  cdnUrl: 'https://unpkg.com/@umoteam/editor-external@latest',
  shareUrl: location.href || '',
  diagrams: {
    domain: 'https://embed.diagrams.net',
    params: {
      lang: 'bo',
    },
  },
  file: {
    allowedMimeTypes: [],
    maxSize: 1024 * 1024 * 100, // 100M
    preview: [
      { 
        extensions: ['pdf'], 
        url: '{url}',
        title: { 
          en_US: 'PDF Preview',
          zh_CN: 'PDF སྔོན་ལྟ།',
          bo: 'PDF སྔོན་ལྟ།'
        }
      },
      {
        extensions: ['doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx'],
        url: 'https://view.officeapps.live.com/op/embed.aspx?src={{url}}&amp;wdStartOn=1&amp;wdPrint=0&amp;wdEmbedCode=0',
        title: {
          en_US: 'Office Preview',
          zh_CN: 'གཞུང་ལས་ཡིག་ཆ་སྔོན་ལྟ།',
          bo: 'གཞུང་ལས་ཡིག་ཆ་སྔོན་ལྟ།'
        }
      },
    ],
  },
  user: {},
  extensions: [],
  translations: {
    en_US: {},
    zh_CN: {},
    bo: {},
  },
  async onSave() {
    return await new Promise((_, reject) => {
      reject(new Error('ཉར་ཚགས་བྱེད་ཐབས་སྒྲིག་འགོད་བྱེད་རོགས།'))
    })
  },
  async onFileUpload(file: File) {
    return await new Promise((_, reject) => {
      if (!file) {
        reject(new Error('ཡིག་ཆ་རྙེད་མ་བྱུང་།'))
        return
      }
      reject(new Error('ཡར་འཇུག་བྱེད་ཐབས་སྒྲིག་འགོད་བྱེད་རོགས།'))
    })
  },
  onFileDelete() {
    console.error(
      'ཡིག་ཆ་བསུབས་ཟིན། ཡིག་ཆ་ཆ་ཚང་པོར་སུབ་པའི་ཆེད་དུ་ onFileDelete སྒྲིག་འགོད་བྱེད་རོགས།',
    )
  },
  async onAssistant() {
    return await new Promise((_, reject) => {
      reject(new Error('རོགས་རམ་བྱེད་ནུས་སྒྲིག་འགོད་བྱེད་རོགས།'))
    })
  },
  async onCustomImportWordMethod() {
    return await new Promise((_, reject) => {
      reject(
        new Error(
          'Word ནང་འདྲེན་བྱེད་ཐབས་སྒྲིག་འགོད་བྱེད་རོགས།',
        ),
      )
    })
  },
}

// 组件 props 所需格式
const propsOptions = Object.keys(defaultOptions)

const isLocale = (value: unknown) => {
  if (isString(value) && value.length > 0) {
    return true
  }
  if (isRecord(value)) {
    for (const key of Object.keys(value)) {
      if (!['en_US', 'zh_CN', 'bo'].includes(key)) {
        return false
      }
    }
    return true
  }
  return false
}

const ojbectSchema = new ObjectSchema({
  editorKey: {
    merge: 'replace',
    validate: 'string!',
    required: false,
  },
  locale: {
    merge: 'replace',
    validate(value) {
      if (value && !['en-US', 'zh-CN', 'bo'].includes(value)) {
        throw new Error(
          'Key "locale": must be one of "en-US", "zh-CN" or "bo".',
        )
      }
    },
    required: false,
  },
  theme: {
    merge: 'replace',
    validate(value) {
      if (value && !['dark', 'light', 'auto'].includes(value)) {
        throw new Error(
          'Key "theme": must be one of "dark", "light" or "auto".',
        )
      }
    },
    required: false,
  },
  height: {
    merge: 'replace',
    validate: 'string!',
    required: false,
  },
  dicts: {
    required: false,
    merge: 'replace',
    validate: 'object',
    schema: {
      fonts: {
        merge: 'replace',
        validate(value) {
          if (value && !Array.isArray(value)) {
            throw new Error('Key "dicts": Key "fonts" must be a array.')
          }
          for (const item of value) {
            if (!item.label || (!item.value && item.value !== null)) {
              throw new Error(
                'Key "dicts": Key "fonts" must be a array of objects with "label" and "value" properties.',
              )
            }
          }
        },
        required: false,
      },
      colors: {
        merge: 'replace',
        validate: 'array',
        required: false,
      },
      lineHeights: {
        merge: 'replace',
        validate(value: LineHeight[]) {
          if (!Array.isArray(value)) {
            throw new Error('Key "dicts": Key "lineHeights": must be a array.')
          }
          if (!value.find((item) => item.default)) {
            throw new Error(
              'Key "dicts": Key "lineHeights": please set a default value.',
            )
          }
          value.forEach((item, index) => {
            if (!item.label || (!item.value && item.value !== null)) {
              throw new Error(
                `Key "dicts": Key "lineHeights[${index}]": must be a array of objects with "label" and "value" properties.`,
              )
            }
            if (!isLocale(item.label)) {
              throw new Error(
                `Key "dicts": Key "lineHeights[${index}]": Key "label" must be string, or a object with "en_US" and "zh_CN" properties.`,
              )
            }
          })
        },
        required: false,
      },
      symbols: {
        merge: 'replace',
        validate(value: GraphicSymbol[]) {
          if (value && !Array.isArray(value)) {
            throw new Error('Key "dicts": Key "symbols" must be a array.')
          }
          value.forEach((item, index: number) => {
            if (!item.label || typeof item.items !== 'string') {
              throw new Error(
                `Key "dicts": Key "symbols[${index}]": must be a array of objects with "label" and "items" properties.`,
              )
            }
            if (!isLocale(item.label)) {
              throw new Error(
                `Key "dicts": Key "symbols[${index}]": Key "label" must be string, or a object with "en_US" and "zh_CN" properties.`,
              )
            }
          })
        },
        required: false,
      },
      emojis: {
        merge: 'replace',
        validate(value: Emoji[]) {
          if (value && !Array.isArray(value)) {
            throw new Error('Key "dicts": Key "emojis" must be a array.')
          }
          value.forEach((item, index: number) => {
            if (!item.label || typeof item.items !== 'string') {
              throw new Error(
                `Key "dicts": Key "emojis[${index}]": must be a array of objects with "label" and "value" properties.`,
              )
            }
            if (!isLocale(item.label)) {
              throw new Error(
                `Key "dicts": Key "emojis[${index}]": Key "label" must be string, or a object with "en_US" and "zh_CN" properties.`,
              )
            }
          })
        },
        required: false,
      },
      pageSizes: {
        merge: 'replace',
        validate(value: PageSize[]) {
          if (value && !Array.isArray(value)) {
            throw new Error('Key "dicts": Key "pageSizes": must be a array.')
          }
          if (!value.find((item) => item.default)) {
            throw new Error(
              'Key "dicts": Key "pageSizes": please set a default value.',
            )
          }
          value.forEach((item, index) => {
            if (!item.label || item.label === '') {
              throw new Error(
                `Key "dicts": Key "pageSizes[${index}]" Key: "label" cannot be empty.`,
              )
            }
            if (!isLocale(item.label)) {
              throw new Error(
                `Key "dicts": Key "pageSizes[${index}]": Key "label" must be string, or a object with "en_US" and "zh_CN" properties.`,
              )
            }
            if (!isNumber(item.width)) {
              throw new Error(
                `Key "dicts": Key "pageSizes[${index}]" Key: "width" must be a number.`,
              )
            }
            if (!isNumber(item.height)) {
              throw new Error(
                `Key "dicts": Key "pageSizes[${index}]" Key: "height" must be a number.`,
              )
            }
          })
        },
        required: false,
      },
    },
  },
  toolbar: {
    required: false,
    merge: 'replace',
    validate: 'object',
    schema: {
      defaultMode: {
        merge: 'replace',
        validate(value: 'classic' | 'ribbon') {
          if (value && !['classic', 'ribbon'].includes(value)) {
            throw new Error(
              'Key "toolbar": Key "defaultMode" must be one of "classic" or "ribbon".',
            )
          }
        },
        required: false,
      },
      enableSourceEditor: {
        merge: 'replace',
        validate: 'boolean',
        required: false,
      },
      menus: {
        merge: 'replace',
        validate(value: 'base' | 'advanced' | 'custom') {
          const defaultMenus = defaultOptions?.toolbar?.menus
          if (value && !Array.isArray(value)) {
            throw new Error('Key "toolbar": Key "menus" must be a array.')
          }
          if (!value.includes('base')) {
            throw new Error(
              'Key "toolbar": Key "menus" should at least contain "base".',
            )
          }
          if (!value.every((item) => defaultMenus?.includes(item))) {
            throw new Error(
              `Key "toolbar": Key "menus" the array items of toolbar.menus must contain only one or multiple of ${JSON.stringify(defaultMenus)}.`,
            )
          }
        },
        required: false,
      },
      disableMenuItems: {
        merge: 'replace',
        validate(value: string[]) {
          if (value && !Array.isArray(value)) {
            throw new Error(
              'Key "toolbar": Key "disableMenuItems" must be a array.',
            )
          }
        },
        required: false,
      },
      importWord: {
        merge: 'replace',
        validate: 'object',
        required: false,
      },
    },
  },
  page: {
    merge: 'replace',
    validate: 'object',
    required: false,
    schema: {
      defaultMargin: {
        required: false,
        merge: 'replace',
        validate: 'object',
        schema: {
          left: {
            merge: 'replace',
            validate: 'number',
            required: false,
          },
          right: {
            merge: 'replace',
            validate: 'number',
            required: false,
          },
          top: {
            merge: 'replace',
            validate: 'number',
            required: false,
          },
          bottom: {
            merge: 'replace',
            validate: 'number',
            required: false,
          },
        },
      },
      defaultOrientation: {
        merge: 'replace',
        validate(value: 'portrait' | 'landscape') {
          if (value && !['portrait', 'landscape'].includes(value)) {
            throw new Error(
              'Key "page": Key "defaultOrientation" must be one of "portrait" or "landscape".',
            )
          }
        },
        required: false,
      },
      defaultBackground: {
        merge: 'replace',
        validate: 'string',
        required: false,
      },
      showBreakMarks: {
        merge: 'replace',
        validate: 'boolean',
        required: false,
      },
      watermark: {
        required: false,
        merge: 'replace',
        validate: 'object',
        schema: {
          type: {
            merge: 'replace',
            validate(value: 'compact' | 'spacious') {
              if (value && !['compact', 'spacious'].includes(value)) {
                throw new Error(
                  'Key "watermark": Key "type" must be one of "compact" or "spacious".',
                )
              }
            },
            required: false,
          },
          alpha: {
            merge: 'replace',
            validate: 'number',
            required: false,
          },
          fontColor: {
            merge: 'replace',
            validate: 'string',
            required: false,
          },
          fontFamily: {
            merge: 'replace',
            validate(value: string | null) {
              if (value !== null && typeof value !== 'string') {
                throw new Error(
                  'Key "watermark": Key "fontFamily" must be a string.',
                )
              }
            },
            required: false,
          },
          fontSize: {
            merge: 'replace',
            validate: 'number',
            required: false,
          },
          fontWeight: {
            merge: 'replace',
            validate: 'string',
            required: false,
          },
          text: {
            merge: 'replace',
            validate: 'string',
            required: false,
          },
        },
      },
      size: {
        required: false,
        merge: 'replace',
        validate: 'object',
        schema: {
          width: {
            merge: 'replace',
            validate: 'number',
            required: false,
          },
          height: {
            merge: 'replace',
            validate: 'number',
            required: false,
          },
          label: {
            merge: 'replace',
            validate: 'string',
            required: false,
          },
        },
      },
    },
  },
  document: {
    merge: 'replace',
    validate: 'object',
    required: false,
    schema: {
      title: {
        merge: 'replace',
        validate: 'string',
        required: false,
      },
      content: {
        merge: 'replace',
        validate() {},
        required: false,
      },
      placeholder: {
        merge: 'replace',
        validate(value: LocaleLabel) {
          if (!isLocale(value)) {
            throw new Error(
              `Key "document": Key "title": Key "label" must be string, or a object with "en_US" and "zh_CN" properties.`,
            )
          }
        },
        required: false,
      },
      enableSpellcheck: {
        merge: 'replace',
        validate: 'boolean',
        required: false,
      },
      enableMarkdown: {
        merge: 'replace',
        validate: 'boolean',
        required: false,
      },
      enableBubbleMenu: {
        merge: 'replace',
        validate: 'boolean',
        required: false,
      },
      enableBlockMenu: {
        merge: 'replace',
        validate: 'boolean',
        required: false,
      },
      // enableComment: {
      //   merge: 'replace',
      //   validate: 'boolean',
      //   required: false,
      // },
      readOnly: {
        merge: 'replace',
        validate: 'boolean',
        required: false,
      },
      autofocus: {
        merge: 'replace',
        validate(value: 'start' | 'end' | 'all' | number | boolean | null) {
          if (
            !['start', 'end', 'all', true, false, null].includes(
              value as unknown as string,
            ) &&
            !isNumber(value)
          ) {
            throw new Error(
              'Key "document": Key "autofocus" must be one of "start", "end", "all", Number, true, false, null.',
            )
          }
        },
        required: false,
      },
      characterLimit: {
        merge: 'replace',
        validate: 'number',
        required: false,
      },
      typographyRules: {
        merge: 'replace',
        validate: 'object',
        required: false,
      },
      editorProps: {
        merge: 'replace',
        validate: 'object',
        required: false,
      },
      parseOptions: {
        merge: 'replace',
        validate: 'object',
        required: false,
      },
      autoSave: {
        required: false,
        merge: 'replace',
        validate: 'object',
        schema: {
          enabled: {
            merge: 'replace',
            validate: 'boolean',
            required: false,
          },
          interval: {
            merge: 'replace',
            validate: 'number',
            required: false,
          },
        },
      },
    },
  },
  assistant: {
    merge: 'replace',
    validate: 'object',
    required: false,
    schema: {
      enabled: {
        merge: 'replace',
        validate: 'boolean',
        required: false,
      },
      maxlength: {
        merge: 'replace',
        validate(value: number) {
          if (!isNumber(value) || !Number.isInteger(value) || value <= 0) {
            throw new Error(
              'Key "assistant": Key "maxlength" must be a number.',
            )
          }
        },
        required: false,
      },
      commands: {
        merge: 'replace',
        validate(value: { label: LocaleLabel; value: LocaleLabel }[]) {
          if (value && !Array.isArray(value)) {
            throw new Error('Key "assistant": Key "commands" must be a array.')
          }
          value.forEach((item, index: number) => {
            if (!item.label || !item.value) {
              throw new Error(
                'Key "assistant": Key "commands" must be a array of objects with "label" and "value" properties.',
              )
            }
            if (!isLocale(item.label)) {
              throw new Error(
                `Key "assistant": Key "commands[${index}]": Key "label" must be string, or a object with "en_US" and "zh_CN" properties.`,
              )
            }
            if (!isLocale(item.value)) {
              throw new Error(
                `Key "assistant": Key "commands[${index}]": Key "value" must be string, or a object with "en_US" and "zh_CN" properties.`,
              )
            }
          })
        },
        required: false,
      },
    },
  },
  shareUrl: {
    merge: 'replace',
    validate: 'string',
    required: false,
  },
  templates: {
    merge: 'replace',
    validate(value: Template[]) {
      if (value && !Array.isArray(value)) {
        throw new Error('Key "templates": Key "menus" must be a array.')
      }
      value.forEach((item, index: number) => {
        if (!item.title || item.title === '') {
          throw new Error(
            `Key "templates[${index}]": Key "title" cannot be empty.`,
          )
        }
        if (!item.content || item.content === '') {
          throw new Error(
            `Key "templates[${index}]": Key "content" cannot be empty.`,
          )
        }
      })
    },
    required: false,
  },
  cdnUrl: {
    merge: 'replace',
    validate: 'string',
    required: false,
  },
  diagrams: {
    merge: 'assign',
    validate: 'object',
    required: false,
  },
  file: {
    required: false,
    merge: 'replace',
    validate: 'object',
    schema: {
      allowedMimeTypes: {
        merge: 'replace',
        validate: 'array',
        required: false,
      },
      maxSize: {
        merge: 'replace',
        validate: 'number',
        required: false,
      },
      preview: {
        merge: 'replace',
        validate(value) {
          value.forEach((item: { extensions: [any]; url: string }) => {
            if (typeof item !== 'object') {
              throw new Error(
                'Key "file": Key "preview" must be an array of objects.',
              )
            }
            if (!Array.isArray(item.extensions)) {
              throw new Error(
                'Key "file": Key "preview": Key "extensions" must be an array of strings.',
              )
            }
            if (!item.url?.includes('{url}')) {
              throw new Error(
                'Key "file": Key "preview": Key "url" must include "{url}".',
              )
            }
          })
        },
        required: false,
      },
    },
  },
  user: {
    merge: 'assign',
    validate: 'object',
    required: false,
  },
  extensions: {
    merge: 'replace',
    validate: 'array',
    required: false,
  },
  translations: {
    merge: 'replace',
    validate(value) {
      if (!isRecord(value)) {
        throw new Error('Key "translations": must be an object.')
      }
      for (const key of Object.keys(value)) {
        if (!['en_US', 'zh_CN', 'bo'].includes(key)) {
          throw new Error(
            'Key "translations": language code must be one of "en_US", "zh_CN" or "bo".',
          )
        }
      }
    },
    required: false,
  },
  onSave: {
    merge: 'replace',
    validate(value: AsyncFunction) {
      if (!isAsyncFunction(value)) {
        throw new Error('Key "onSave" must be a async function.')
      }
    },
    required: false,
  },
  onFileUpload: {
    merge: 'replace',
    validate(value: AsyncFunction) {
      if (!isAsyncFunction(value)) {
        throw new Error('Key "onFileUpload" must be a async function.')
      }
    },
    required: false,
  },
  onFileDelete: {
    merge: 'replace',
    validate(value: any) {
      if (!isFunction(value)) {
        throw new Error('Key "onFileDelete" must be a function.')
      }
    },
    required: false,
  },
  onAssistant: {
    merge: 'replace',
    validate(value: AsyncFunction) {
      if (!isAsyncFunction(value)) {
        throw new Error('Key "onAssistant" must be a async function.')
      }
    },
    required: false,
  },
  onCustomImportWordMethod: {
    merge: 'replace',
    validate(value: AsyncFunction) {
      if (!isAsyncFunction(value)) {
        throw new Error(
          'Key "onCustomImportWordMethod" must be a async function.',
        )
      }
    },
    required: false,
  },
})

export { defaultOptions, ojbectSchema, propsOptions }
