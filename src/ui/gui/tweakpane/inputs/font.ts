import type { FolderApi } from 'tweakpane'

// import type { UIField } from '../../../types/fields'

// type FontValue = Extract<UIField, { type: 'font' }>['defaultValue']

export function addFontInput(_folder?: FolderApi) {
  return undefined
  // const fontFolder = folders[folderIndex].addFolder({
  //         title: field.title,
  //         expanded: false,
  //       });
  //       fontFolder.addInput({ [field.id]: field.defaultValue }, "fontData.family", {
  //         label: "family",
  //       });
  //       fontFolder.addInput({ [field.id]: field.defaultValue }, "fontData.weight", {
  //         label: "weight",
  //         options: {
  //           100: 100,
  //           200: 200,
  //           300: 300,
  //           400: 400,
  //           500: 500,
  //           600: 600,
  //           700: 700,
  //           800: 800,
  //           900: 900,
  //         },
  //       });
  //       fontFolder.addInput({ [field.id]: field.defaultValue }, "alignment", {
  //         label: "alignment",
  //         options: {
  //           left: "left",
  //           center: "center",
  //           right: "right",
  //           justify: "justify",
  //         },
  //       });
  //       fontFolder.addInput({ [field.id]: field.defaultValue }, "italic", {
  //         label: "italic",
  //       });
  //       fontFolder.addInput({ [field.id]: field.defaultValue }, "underline", {
  //         label: "underline",
  //       });

  //       fontFolder.on("change", ({ presetKey, value }) => {
  //         if (!presetKey) return;
  //         if (presetKey === "family" || presetKey === "weight") {
  //           controls[field.id].fontData[presetKey].value = value;
  //         } else {
  //           controls[field.id][presetKey].value = value;
  //         }
  //       });
}
