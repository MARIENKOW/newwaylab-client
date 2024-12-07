// import Image from "@tiptap/extension-image";
// import { NodeViewWrapper, ReactNodeViewRenderer } from "@tiptap/react";
// // import "./Image.css";

// function ImageNode(props) {
//    const { src, alt } = props.node.attrs;

//    return <img style={{ maxWidth: "100%" }} src={src} alt={alt} />;
// }

// export default Image.extend({
//    addNodeView() {
//       return ReactNodeViewRenderer(ImageNode);
//    },
// });

import { Image } from "@tiptap/extension-image";
import { mergeAttributes } from "@tiptap/react";

export default Image.extend({
   defaultOptions: {
      ...Image.options,
      sizes: ["inline", "block", "left", "right"],
   },
   renderHTML({ HTMLAttributes }) {
      const { style } = HTMLAttributes;
      return [
         "figure",
         { style, maxWidth: "100%" },
         [
            "img",
            mergeAttributes(this.options.HTMLAttributes, {
               ...HTMLAttributes,
               style: "max-width:100%",
            }),
         ],
      ];
   },
});
