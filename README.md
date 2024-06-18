# tiptap-extension-letter-spacing

<h3 align="center">
    A letter-spacing extension for tiptap paragraph.
</h3>

<br/>

<p align="center">
  <a href="https://www.npmjs.com/package/tiptap-extension-letter-spacing">
    <img
     alt="NPM URL"
     src="https://img.shields.io/badge/npm-tiptapExtensionLetterSpacing?logo=npm">
  </a>
  <img
     alt="version"
     src="https://img.shields.io/badge/version-1.0.0-blue">
</p>

<br>

---

## Install

```shell
npm install tiptap-extension-letter-spacing -S
```

## Usage

```js
import LetterSpacing from "tiptap-extension-letter-spacing";

const editor = new Editor({
  element: document.querySelector(".editor"),
  extensions: [StarterKit, LetterSpacing],
});

const value = "2px"; // 5px 0.25rem
editor.chain().focus().setLetterSpacing(value).run();
```

## Relations

**tiptap:** https://tiptap.dev/

**tiptap-appmsg-editor:** https://github.com/KID-1912/tiptap-appmsg-editor
