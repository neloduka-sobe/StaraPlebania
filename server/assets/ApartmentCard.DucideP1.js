import{jsx as e,jsxs as t,Fragment as f}from"react/jsx-runtime";import u,{useState as h}from"react";import{useTranslation as g}from"react-i18next";import{AnimatePresence as y,motion as d}from"framer-motion";import{X as b,Users as N,DotSquare as v,ChevronRight as w}from"lucide-react";import k from"react-photo-album";import C from"yet-another-react-lightbox";const z=({images:a,onClose:s,title:r})=>{const[l,n]=u.useState(-1),{t:o}=g(),m=a.map(i=>({src:i.src,width:i.width,height:i.height,alt:i.alt})),c=a.map(i=>({src:i.src,alt:i.alt}));return e(y,{children:t(d.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4",children:[t("div",{className:"bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto",children:[t("div",{className:"p-4 border-b flex justify-between items-center",children:[e("h3",{className:"text-xl font-bold",children:o(r)}),e("button",{onClick:s,className:"text-gray-500 hover:text-gray-700",children:e(b,{size:24})})]}),e("div",{className:"p-4",children:e(k,{layout:"rows",photos:m,onClick:({index:i})=>n(i),spacing:8,targetRowHeight:200})})]}),e(C,{open:l>=0,index:l,close:()=>n(-1),slides:c})]})})},H=({apartment:a})=>{const{t:s}=g(),[r,l]=h(!1),[n,o]=h(!1),m=()=>l(!r),c=()=>o(!0),i=()=>o(!1);return t(f,{children:[t(d.div,{className:"bg-white rounded-lg shadow-lg overflow-hidden",whileHover:{y:-5},transition:{duration:.3},children:[e("div",{className:"h-48 bg-cover bg-center cursor-pointer",style:{backgroundImage:`url(${a.images[0].src})`},onClick:c}),t("div",{className:"p-6",children:[e("h3",{className:"text-xl font-bold mb-2",children:s(a.name)}),t("div",{className:"flex justify-between mb-4",children:[t("div",{className:"flex items-center text-gray-600",children:[e(N,{size:18,className:"mr-1"}),t("span",{children:[a.capacity," ",s("apartments.people")]})]}),t("div",{className:"flex items-center text-gray-600",children:[e(v,{size:18,className:"mr-1"}),t("span",{children:[a.size," ",s("apartments.sqm")]})]}),e("div",{className:"flex items-center text-gray-600",children:t("span",{children:[s("apartments.from")," ",a.price," zł ",s("apartments.perNight")]})})]}),e("p",{className:"text-gray-600 mb-4",children:s(a.descriptionKey)}),t("div",{className:"flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2",children:[t("button",{onClick:m,className:"flex-1 bg-green-100 text-green-600 px-4 py-2 rounded-lg font-medium hover:bg-green-200 transition-colors flex items-center justify-center",children:[s("apartments.viewDetails"),e(w,{size:16,className:`ml-1 transition-transform ${r?"rotate-90":""}`})]}),e("a",{href:"#contact",className:"flex-1 bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors text-center",children:s("apartments.bookNow")})]}),r&&t(d.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"mt-4 pt-4 border-t",children:[e("h4",{className:"font-semibold mb-2",children:s("apartments.amenitiesName")}),e("ul",{className:"grid grid-cols-2 gap-2",children:a.amenities.map((p,x)=>t("li",{className:"flex items-center text-gray-600",children:[e("span",{className:"w-2 h-2 bg-green-600 rounded-full mr-2"}),s(p)]},x))}),t("button",{onClick:c,className:"mt-4 text-green-600 hover:text-green-800 font-medium",children:[s("apartments.gallery")," →"]})]})]})]}),n&&e(z,{images:a.images,onClose:i,title:a.name})]})};export{H as default};
