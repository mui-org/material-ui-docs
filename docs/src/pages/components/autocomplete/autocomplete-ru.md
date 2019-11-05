---
title: React-компонент Автозаполнение
components: TextField, Popper, Autocomplete
---

# Автодополнение

<p class="description">Автодополнение - это обычный ввод текста, дополненный панелью предлагаемых опций.</p>

Этот виджет используется для установки значения однострочного текстового поля. Он полезен в одном из двух случев:

1. Значение для текстового поля должно быть выбрано из предопределенного набора допустимых значений. Например, поле "местоположение" должно содержать список названий реальных локаций: [combo box](#combobox).
2. Текстовое поле может содержать любое произвольное значение, но целесообразно предлагать пользователю возможные значения. Например, поле поиска может предлагать аналогичные или предыдущие поиски, чтобы сэкономить время пользователя: [free solo](#free-solo).

## Combo box

Значение должно быть выбрано из предопределенного набора допустимых значений.

{{"demo": "pages/components/autocomplete/ComboBox.js"}}

### Песочница

Каждый из следующих примеров демонстрирует одну функцию компонента автозаполнения.

{{"demo": "pages/components/autocomplete/Playground.js"}}

### Выбор страны

Выберите одну страну из 248.

{{"demo": "pages/components/autocomplete/CountrySelect.js"}}

## Free solo

Установите для `freeSolo` значение true, чтобы текстовое поле могло содержать любое произвольное значение.

{{"demo": "pages/components/autocomplete/FreeSolo.js"}}

## Сгруппированные

{{"demo": "pages/components/autocomplete/Grouped.js"}}

## Отключенные опции

{{"demo": "pages/components/autocomplete/DisabledOptions.js"}}

## `useAutocomplete`

For advanced customization use cases, we expose a `useAutocomplete()` hook. It accepts almost the same options as the Autocomplete component minor all the props related to the rendering of JSX. The Autocomplete component uses this hook internally.

```jsx
import useAutocomplete from '@material-ui/lab/useAutocomplete';
```

- 📦 [4 kB gzipped](/size-snapshot).

{{"demo": "pages/components/autocomplete/UseAutocomplete.js", "defaultCodeOpen": false}}

### Customized useAutocomplete

WIP: to implement [this design](https://www.behance.net/gallery/27997595/Multi-select-dropdown-tags-field-with-search).

Head to [Customized Autocomplete](#customized-autocomplete) for a customization example with the Autocomplete component instead of the hook.

## Асинхронные запросы

{{"demo": "pages/components/autocomplete/Asynchronous.js"}}

### Места Google Maps

A customized UI for Google Maps Places Autocomplete. For this demo, we need to load the [Google Maps JavaScript](https://developers.google.com/maps/documentation/javascript/tutorial) API.

{{"demo": "pages/components/autocomplete/GoogleMaps.js"}}

## Множественные значения

Также известны как теги. Пользователь может ввести более 1 значения.

{{"demo": "pages/components/autocomplete/Tags.js"}}

### Фиксированные опции

В случае, если вам нужно зафиксировать определенный тег (так что он не мог быть удалён через интерфейс), вы можете установить chips в состояние disabled.

{{"demo": "pages/components/autocomplete/FixedTags.js"}}

### Чекбоксы

{{"demo": "pages/components/autocomplete/CheckboxesTags.js"}}

## Customized Autocomplete

This demo reproduces the GitHub's label picker:

{{"demo": "pages/components/autocomplete/GitHubLabel.js"}}

## Highlights

The following demo relies on [autosuggest-highlight](https://github.com/moroshko/autosuggest-highlight), a small (1 kB) utility for highlighting text in autosuggest and autocomplete components.

{{"demo": "pages/components/autocomplete/Highlights.js"}}

## Customer filter

The component exposes a factory to create a filter method that can provided to the `filerOption` prop. You can use it to change the default option filter behavior.

```js
import { createFilterOptions } from '@material-ui/lab/Autocomplete';
```

It supports the following options:

1. `config` (*Object* [optional]): 
  - `config.ignoreAccents` (*Boolean* [optional]): Defaults to `true`. Remove diacritics.
  - `config.ignoreCase` (*Boolean* [optional]): Defaults to `true`. Lowercase everything.
  - `config.matchFrom` (*'any' | 'start'* [optional]): Defaults to `'any'`.
  - `config.stringify` (*Func* [optional]): Defaults to `JSON.stringify`.
  - `config.trim` (*Boolean* [optional]): Defaults to `false`. Remove trailing spaces.

In the following demo, the options need to start with the query prefix:

```js
const filterOptions = createFilterOptions({
  matchFrom: 'start',
  stringify: option => option.title,
});

<Autocomplete filterOptions={filterOptions} />
```

{{"demo": "pages/components/autocomplete/Filter.js", "defaultCodeOpen": false}}

For richer filtering mechanisms, it's recommended to look at [match-sorter](https://github.com/kentcdodds/match-sorter). For instance:

```jsx
import matchSorter from 'match-sorter';

const filterOptions = (options, { inputValue }) =>
  matchSorter(options, inputValue);

<Autocomplete filterOptions={filterOptions} />
```

## Virtualization

Search within 10,000 randomly generated options. The list is virtualized thanks to [react-window](https://github.com/bvaughn/react-window).

{{"demo": "pages/components/autocomplete/Virtualize.js"}}

## Доступность

(WAI-ARIA: https://www.w3.org/TR/wai-aria-practices/#combobox)

We encourage the usage of a label for the textbox. The component implements the WAI-ARIA authoring practices.