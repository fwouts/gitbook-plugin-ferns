# GitBook/Honkit plugin for Ferns

A plugin to display beautiful trees in [Honkit](https://github.com/honkit/honkit) (or legacy GitBook).

## Installation

Install it via NPM or Yarn:

```
$ yarn add gitbook-plugin-ferns
```

Use it in your book by adding it to book.json:

```
{
  "plugins": ["ferns"]
}
```

## Usage

Use a fenced code block tagged with `ferns`:

    ```ferns
    a
      key = value
      -- arrow -->
        b
        c
    ```

This will automatically become a tree:
![Screenshot](https://github.com/fwouts/gitbook-plugin-ferns/raw/master/screenshot.png)
