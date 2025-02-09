# Introduction

Tibetan-Office is open-source document editor based on Vue3 and Tiptap. Umo Editor provides comprehensive document editing capabilities and AI creation features, supports pagination, supports Markdown syntax, offers basic rich text editing functions, allows for the insertion of various node types in multiple formats, provides a variety of practical tools, and supports setting page styles. It also supports exporting in various formats, printing and print preview, block-level document editing, adding custom extensions, multi-language settings, and a dark theme.

Tibetan-Office ནི་ Vue3 དང་ Tiptap ལ་གཞི་བཅོལ་བའི་ཡིག་ཆ་རྩོམ་སྒྲིག་བྱེད་ཆས་ཤིག་ཡིན། འདིས་ཡིག་ཆ་རྩོམ་སྒྲིག་གི་ནུས་པ་ཆ་ཚང་དང་རིག་ནུས་གསར་གཏོད་ཀྱི་ཁྱད་ཆོས་མཁོ་འདོན་བྱེད་ཀྱི་ཡོད། ཤོག་ངོས་དབྱེ་བ་དང་། Markdown བརྡ་སྤྲོད། གཞི་རྩའི་རྣམ་པ་ཕུན་སུམ་ཚོགས་པའི་ཡིག་རྐྱང་རྩོམ་སྒྲིག་གི་བྱེད་ནུས། རྣམ་གཞག་འདྲ་མིན་གྱི་མཐུད་མཚམས་འདྲ་མིན་བཅུག་པ། ལག་ལེན་བསྟར་བདེའི་ལག་ཆ་སྣ་ཚོགས། ཤོག་ངོས་ཀྱི་རྣམ་པ་སྒྲིག་འགོད་བཅས་ལ་རྒྱབ་སྐྱོར་བྱེད་ཀྱི་ཡོད། དེ་བཞིན་རྣམ་གཞག་འདྲ་མིན་དུ་ཕྱིར་འདྲེན་བྱེད་པ་དང་། པར་འདེབས་དང་པར་འདེབས་སྔོན་ལྟ། དུམ་བུའི་རིམ་པའི་ཡིག་ཆ་རྩོམ་སྒྲིག རང་སྒྲུབ་རྒྱ་སྐྱེད། སྐད་རིགས་མང་པོའི་སྒྲིག་འགོད། མུན་ནག་བརྗོད་དོན་བཅས་ལ་རྒྱབ་སྐྱོར་བྱེད་ཀྱི་ཡོད།

<img src="https://unpkg.com/@umoteam/editor-external@latest/static/umo-editor-en@2x.png" alt="umo editor" />

As a standalone Vue3 plugin, Umo Editor can be easily integrated into any Vue3 project with zero configuration. For non-Vue3 projects, you can embed Umo Editor using an Iframe.
Vue3 རང་རྐྱ་བའི་ Plugin ཞིག་ཡིན་པའི་ཆ་ནས། Tibetan-Officeནི་སྒྲིག་འགོད་མི་དགོས་པར་ Vue3 ལས་གཞི་གང་རུང་ནང་སྟབས་བདེའི་ངང་སྤྱོད་ཐུབ། Vue3 མིན་པའི་ལས་གཞིའི་ཆེད་དུ། ཁྱེད་ཀྱིས་ Iframe བེད་སྤྱད་ནས་ Umo Editor སྒྲིག་འཇུག་བྱེད་ཐུབ།


- Zero-config out-of-the-box usability
- Pagination mode similar to that in Microsoft Word
- Lightweight
- WYSIWYG (What You See Is What You Get) throughout the process
- Rich-text editing capabilities
- Markdown syntax support
- Integrated practical tools
- Presentation mode
- Document export and sharing
- Page settings
- AI assistant
- Support for printing and print preview
- Support for custom plugins
- Shortcut key support
- Theme customization
- Multi-language settings
- Dark mode support

- སྒྲིག་འགོད་མི་དགོས་པར་ལམ་སེང་བེད་སྤྱོད་བྱེད་ཐུབ་པ།
- Microsoft Word དང་འདྲ་བའི་ཤོག་ངོས་དབྱེ་བའི་རྣམ་པ།
- ཡང་བ།
- མཐོང་བ་ལྟར་འཐོབ་པའི་རྩོམ་སྒྲིག་རྣམ་པ།
- རྣམ་པ་ཕུན་སུམ་ཚོགས་པའི་ཡིག་རྐྱང་རྩོམ་སྒྲིག་གི་ནུས་པ།
- Markdown བརྡ་སྤྲོད་ལ་རྒྱབ་སྐྱོར།
- ལག་ལེན་བསྟར་བདེའི་ལག་ཆ་ཡོངས་རྫོགས་སྤྱོད་ཐུབ་པ།
- སྟོན་སྤེལ་རྣམ་པ།
- ཡིག་ཆ་ཕྱིར་འདྲེན་དང་བརྒྱུད་སྤྲོད།
- ཤོག་ངོས་སྒྲིག་འགོད།
- རིག་ནུས་ལས་རོགས།
- པར་འདེབས་དང་པར་འདེབས་སྔོན་ལྟར་རྒྱབ་སྐྱོར།
- རང་སྒྲུབ་ Plugin ལ་རྒྱབ་སྐྱོར།
- མྱུར་མཐེབ་ལ་རྒྱབ་སྐྱོར།
- བརྗོད་དོན་རང་སྒྲུབ།
- སྐད་རིགས་མང་པོའི་སྒྲིག་འགོད།
- མུན་ནག་རྣམ་པར་རྒྱབ་སྐྱོར།
