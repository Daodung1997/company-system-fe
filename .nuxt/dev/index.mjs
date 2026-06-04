import process from 'node:process';globalThis._importMeta_={url:import.meta.url,env:process.env};import { tmpdir } from 'node:os';
import { defineEventHandler, handleCacheHeaders, splitCookiesString, createEvent, fetchWithEvent, isEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseHeaders, setResponseStatus, send, getRequestHeaders, setResponseHeader, appendResponseHeader, getRequestURL, getResponseHeader, getResponseStatus, createError, getCookie, setCookie, sanitizeStatusCode, removeResponseHeader, getQuery as getQuery$1, readBody, getRouterParam, createApp, createRouter as createRouter$1, toNodeListener, lazyEventHandler, getResponseStatusText } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/h3/dist/index.mjs';
import { Server } from 'node:http';
import { resolve, dirname, join } from 'node:path';
import nodeCrypto from 'node:crypto';
import { parentPort, threadId } from 'node:worker_threads';
import { escapeHtml } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@vue/shared/dist/shared.cjs.js';
import { createRenderer, getRequestDependencies, getPreloadLinks, getPrefetchLinks } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, joinRelativeURL, parsePath, withLeadingSlash, withTrailingSlash, decodePath, withoutTrailingSlash } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/ufo/dist/index.mjs';
import destr, { destr as destr$1 } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/destr/dist/index.mjs';
import { createHooks } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/hookable/dist/index.mjs';
import { createFetch, Headers as Headers$1 } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/ofetch/dist/node.mjs';
import { fetchNodeRequestHandler, callNodeRequestHandler } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/node-mock-http/dist/index.mjs';
import { createStorage, prefixStorage } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/unstorage/drivers/fs.mjs';
import { digest } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/ohash/dist/index.mjs';
import { klona } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/klona/dist/index.mjs';
import defu, { defuFn, createDefu } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/defu/dist/defu.mjs';
import { snakeCase } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/scule/dist/index.mjs';
import { getContext } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/unctx/dist/index.mjs';
import { toRouteMatcher, createRouter } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/radix3/dist/index.mjs';
import { readFile } from 'node:fs/promises';
import consola, { consola as consola$1 } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/consola/dist/index.mjs';
import { ErrorParser } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/youch-core/build/index.js';
import { Youch } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/youch/build/index.js';
import { SourceMapConsumer } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/source-map/source-map.js';
import { createRouterMatcher } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/vue-router/vue-router.node.mjs';
import { AsyncLocalStorage } from 'node:async_hooks';
import { stringify, uneval } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/devalue/index.js';
import { captureRawStackTrace, parseRawStackTrace } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/errx/dist/index.js';
import { isVNode, isRef, toValue } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/vue/index.mjs';
import BaseStyle from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primevue/core/base/style/index.mjs';
import BaseComponentStyle from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primevue/core/basecomponent/style/index.mjs';
import { style } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/autocomplete/index.mjs';
import { isNotEmpty, isEmpty } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/utils/dist/object/index.mjs';
import { style as style$1 } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/cascadeselect/index.mjs';
import { style as style$2 } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/checkbox/index.mjs';
import { style as style$3 } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/checkboxgroup/index.mjs';
import { style as style$4 } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/colorpicker/index.mjs';
import { style as style$5 } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/datepicker/index.mjs';
import { style as style$6 } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/floatlabel/index.mjs';
import { style as style$7 } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/iconfield/index.mjs';
import { style as style$8 } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/iftalabel/index.mjs';
import { style as style$9 } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/inputchips/index.mjs';
import { style as style$a } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/inputgroup/index.mjs';
import { style as style$b } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/inputnumber/index.mjs';
import { style as style$c } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/inputotp/index.mjs';
import { style as style$d } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/inputtext/index.mjs';
import { style as style$e } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/knob/index.mjs';
import { style as style$f } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/listbox/index.mjs';
import { style as style$g } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/multiselect/index.mjs';
import { style as style$h } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/password/index.mjs';
import { style as style$i } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/radiobutton/index.mjs';
import { style as style$j } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/radiobuttongroup/index.mjs';
import { style as style$k } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/rating/index.mjs';
import { style as style$l } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/select/index.mjs';
import { style as style$m } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/selectbutton/index.mjs';
import { style as style$n } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/slider/index.mjs';
import { style as style$o } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/textarea/index.mjs';
import { style as style$p } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/togglebutton/index.mjs';
import { style as style$q } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/toggleswitch/index.mjs';
import { style as style$r } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/treeselect/index.mjs';
import { style as style$s } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/button/index.mjs';
import { style as style$t } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/buttongroup/index.mjs';
import { style as style$u } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/speeddial/index.mjs';
import { style as style$v } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/splitbutton/index.mjs';
import { style as style$w } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/datatable/index.mjs';
import { style as style$x } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/dataview/index.mjs';
import { style as style$y } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/orderlist/index.mjs';
import { style as style$z } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/organizationchart/index.mjs';
import { style as style$A } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/paginator/index.mjs';
import { style as style$B } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/picklist/index.mjs';
import { style as style$C } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/tree/index.mjs';
import { style as style$D } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/treetable/index.mjs';
import { style as style$E } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/timeline/index.mjs';
import { style as style$F } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/virtualscroller/index.mjs';
import { style as style$G } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/accordion/index.mjs';
import { style as style$H } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/card/index.mjs';
import { style as style$I } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/divider/index.mjs';
import { style as style$J } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/fieldset/index.mjs';
import { style as style$K } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/panel/index.mjs';
import { style as style$L } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/scrollpanel/index.mjs';
import { style as style$M } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/splitter/index.mjs';
import { style as style$N } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/stepper/index.mjs';
import { style as style$O } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/tabview/index.mjs';
import { style as style$P } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/tabs/index.mjs';
import { style as style$Q } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/toolbar/index.mjs';
import { style as style$R } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/confirmdialog/index.mjs';
import { style as style$S } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/confirmpopup/index.mjs';
import { style as style$T } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/dialog/index.mjs';
import { style as style$U } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/drawer/index.mjs';
import { style as style$V } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/popover/index.mjs';
import { style as style$W } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/fileupload/index.mjs';
import { style as style$X } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/breadcrumb/index.mjs';
import { style as style$Y } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/contextmenu/index.mjs';
import { style as style$Z } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/dock/index.mjs';
import { style as style$_ } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/menu/index.mjs';
import { style as style$$ } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/menubar/index.mjs';
import { style as style$10 } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/megamenu/index.mjs';
import { style as style$11 } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/panelmenu/index.mjs';
import { style as style$12 } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/steps/index.mjs';
import { style as style$13 } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/tabmenu/index.mjs';
import { style as style$14 } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/tieredmenu/index.mjs';
import { style as style$15 } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/message/index.mjs';
import { style as style$16 } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/inlinemessage/index.mjs';
import { style as style$17 } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/toast/index.mjs';
import { style as style$18 } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/carousel/index.mjs';
import { style as style$19 } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/galleria/index.mjs';
import { style as style$1a } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/image/index.mjs';
import { style as style$1b } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/imagecompare/index.mjs';
import { style as style$1c } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/avatar/index.mjs';
import { style as style$1d } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/badge/index.mjs';
import { style as style$1e } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/blockui/index.mjs';
import { style as style$1f } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/chip/index.mjs';
import { style as style$1g } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/inplace/index.mjs';
import { style as style$1h } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/metergroup/index.mjs';
import { style as style$1i } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/overlaybadge/index.mjs';
import { style as style$1j } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/scrolltop/index.mjs';
import { style as style$1k } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/skeleton/index.mjs';
import { style as style$1l } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/progressbar/index.mjs';
import { style as style$1m } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/progressspinner/index.mjs';
import { style as style$1n } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/tag/index.mjs';
import { style as style$1o } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/terminal/index.mjs';
import FormStyle from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primevue/forms/form/style/index.mjs';
import FormFieldStyle from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primevue/forms/formfield/style/index.mjs';
import { style as style$1p } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/tooltip/index.mjs';
import { style as style$1q } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styles/dist/ripple/index.mjs';
import { Theme } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/@primeuix/styled/dist/index.mjs';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname as dirname$1, resolve as resolve$1 } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/pathe/dist/index.mjs';
import { createHead as createHead$1, propsToString, renderSSRHead } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/unhead/dist/server.mjs';
import { renderToString } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/vue/server-renderer/index.mjs';
import { walkResolver } from 'file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/node_modules/unhead/dist/utils.mjs';

const serverAssets = [{"baseName":"server","dir":"/home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/server/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir, ignore: (asset?.ignore || []) }));
}

const storage$1 = createStorage({});

storage$1.mount('/assets', assets$1);

storage$1.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe","watchOptions":{"ignored":[null]}}));
storage$1.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/server","watchOptions":{"ignored":[null]}}));
storage$1.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/.nuxt"}));
storage$1.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/.nuxt/cache"}));
storage$1.mount('data', unstorage_47drivers_47fs({"driver":"fs","base":"/home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/.data/kv"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage$1, base) : storage$1;
}

const Hasher = /* @__PURE__ */ (() => {
  class Hasher2 {
    buff = "";
    #context = /* @__PURE__ */ new Map();
    write(str) {
      this.buff += str;
    }
    dispatch(value) {
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    }
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      objType = objectLength < 10 ? "unknown:[" + objString + "]" : objString.slice(8, objectLength - 1);
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = this.#context.get(object)) === void 0) {
        this.#context.set(object, this.#context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        this.write("buffer:");
        return this.write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else {
          this.unknown(object, objType);
        }
      } else {
        const keys = Object.keys(object).sort();
        const extraKeys = [];
        this.write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          this.write(":");
          this.dispatch(object[key]);
          this.write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    }
    array(arr, unordered) {
      unordered = unordered === void 0 ? false : unordered;
      this.write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = new Hasher2();
        hasher.dispatch(entry);
        for (const [key, value] of hasher.#context) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      this.#context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    }
    date(date) {
      return this.write("date:" + date.toJSON());
    }
    symbol(sym) {
      return this.write("symbol:" + sym.toString());
    }
    unknown(value, type) {
      this.write(type);
      if (!value) {
        return;
      }
      this.write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          [...value.entries()],
          true
          /* ordered */
        );
      }
    }
    error(err) {
      return this.write("error:" + err.toString());
    }
    boolean(bool) {
      return this.write("bool:" + bool);
    }
    string(string) {
      this.write("string:" + string.length + ":");
      this.write(string);
    }
    function(fn) {
      this.write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
    }
    number(number) {
      return this.write("number:" + number);
    }
    null() {
      return this.write("Null");
    }
    undefined() {
      return this.write("Undefined");
    }
    regexp(regex) {
      return this.write("regex:" + regex.toString());
    }
    arraybuffer(arr) {
      this.write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    }
    url(url) {
      return this.write("url:" + url.toString());
    }
    map(map) {
      this.write("map:");
      const arr = [...map];
      return this.array(arr, false);
    }
    set(set) {
      this.write("set:");
      const arr = [...set];
      return this.array(arr, false);
    }
    bigint(number) {
      return this.write("bigint:" + number.toString());
    }
  }
  for (const type of [
    "uint8array",
    "uint8clampedarray",
    "unt8array",
    "uint16array",
    "unt16array",
    "uint32array",
    "unt32array",
    "float32array",
    "float64array"
  ]) {
    Hasher2.prototype[type] = function(arr) {
      this.write(type + ":");
      return this.array([...arr], false);
    };
  }
  function isNativeFunction(f) {
    if (typeof f !== "function") {
      return false;
    }
    return Function.prototype.toString.call(f).slice(
      -15
      /* "[native code] }".length */
    ) === "[native code] }";
  }
  return Hasher2;
})();
function serialize(object) {
  const hasher = new Hasher();
  hasher.dispatch(object);
  return hasher.buff;
}
function hash(value) {
  return digest(typeof value === "string" ? value : serialize(value)).replace(/[-_]/g, "").slice(0, 10);
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        const value = incomingEvent.node.req.headers[header];
        if (value !== void 0) {
          variableHeaders[header] = value;
        }
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2(void 0);
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return true;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            if (Array.isArray(headers2) || typeof headers2 === "string") {
              throw new TypeError("Raw headers  is not supported.");
            }
            for (const header in headers2) {
              const value = headers2[header];
              if (value !== void 0) {
                this.setHeader(
                  header,
                  value
                );
              }
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.waitUntil = incomingEvent.waitUntil;
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(
      event
    );
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const inlineAppConfig = {
  "nuxt": {}
};



const appConfig = defuFn(inlineAppConfig);

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /\{\{([^{}]*)\}\}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildId": "dev",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      }
    }
  },
  "public": {
    "primevue": {
      "usePrimeVue": true,
      "autoImport": true,
      "resolvePath": "",
      "importPT": "",
      "importTheme": "",
      "loadStyles": true,
      "options": {
        "ripple": true,
        "inputVariant": "filled",
        "theme": {
          "preset": {
            "primitive": {
              "borderRadius": {
                "none": "0",
                "xs": "2px",
                "sm": "4px",
                "md": "6px",
                "lg": "8px",
                "xl": "12px"
              },
              "emerald": {
                "50": "#ecfdf5",
                "100": "#d1fae5",
                "200": "#a7f3d0",
                "300": "#6ee7b7",
                "400": "#34d399",
                "500": "#10b981",
                "600": "#059669",
                "700": "#047857",
                "800": "#065f46",
                "900": "#064e3b",
                "950": "#022c22"
              },
              "green": {
                "50": "#f0fdf4",
                "100": "#dcfce7",
                "200": "#bbf7d0",
                "300": "#86efac",
                "400": "#4ade80",
                "500": "#22c55e",
                "600": "#16a34a",
                "700": "#15803d",
                "800": "#166534",
                "900": "#14532d",
                "950": "#052e16"
              },
              "lime": {
                "50": "#f7fee7",
                "100": "#ecfccb",
                "200": "#d9f99d",
                "300": "#bef264",
                "400": "#a3e635",
                "500": "#84cc16",
                "600": "#65a30d",
                "700": "#4d7c0f",
                "800": "#3f6212",
                "900": "#365314",
                "950": "#1a2e05"
              },
              "red": {
                "50": "#fef2f2",
                "100": "#fee2e2",
                "200": "#fecaca",
                "300": "#fca5a5",
                "400": "#f87171",
                "500": "#ef4444",
                "600": "#dc2626",
                "700": "#b91c1c",
                "800": "#991b1b",
                "900": "#7f1d1d",
                "950": "#450a0a"
              },
              "orange": {
                "50": "#fff7ed",
                "100": "#ffedd5",
                "200": "#fed7aa",
                "300": "#fdba74",
                "400": "#fb923c",
                "500": "#f97316",
                "600": "#ea580c",
                "700": "#c2410c",
                "800": "#9a3412",
                "900": "#7c2d12",
                "950": "#431407"
              },
              "amber": {
                "50": "#fffbeb",
                "100": "#fef3c7",
                "200": "#fde68a",
                "300": "#fcd34d",
                "400": "#fbbf24",
                "500": "#f59e0b",
                "600": "#d97706",
                "700": "#b45309",
                "800": "#92400e",
                "900": "#78350f",
                "950": "#451a03"
              },
              "yellow": {
                "50": "#fefce8",
                "100": "#fef9c3",
                "200": "#fef08a",
                "300": "#fde047",
                "400": "#facc15",
                "500": "#eab308",
                "600": "#ca8a04",
                "700": "#a16207",
                "800": "#854d0e",
                "900": "#713f12",
                "950": "#422006"
              },
              "teal": {
                "50": "#f0fdfa",
                "100": "#ccfbf1",
                "200": "#99f6e4",
                "300": "#5eead4",
                "400": "#2dd4bf",
                "500": "#14b8a6",
                "600": "#0d9488",
                "700": "#0f766e",
                "800": "#115e59",
                "900": "#134e4a",
                "950": "#042f2e"
              },
              "cyan": {
                "50": "#ecfeff",
                "100": "#cffafe",
                "200": "#a5f3fc",
                "300": "#67e8f9",
                "400": "#22d3ee",
                "500": "#06b6d4",
                "600": "#0891b2",
                "700": "#0e7490",
                "800": "#155e75",
                "900": "#164e63",
                "950": "#083344"
              },
              "sky": {
                "50": "#f0f9ff",
                "100": "#e0f2fe",
                "200": "#bae6fd",
                "300": "#7dd3fc",
                "400": "#38bdf8",
                "500": "#0ea5e9",
                "600": "#0284c7",
                "700": "#0369a1",
                "800": "#075985",
                "900": "#0c4a6e",
                "950": "#082f49"
              },
              "blue": {
                "50": "#eff6ff",
                "100": "#dbeafe",
                "200": "#bfdbfe",
                "300": "#93c5fd",
                "400": "#60a5fa",
                "500": "#3b82f6",
                "600": "#2563eb",
                "700": "#1d4ed8",
                "800": "#1e40af",
                "900": "#1e3a8a",
                "950": "#172554"
              },
              "indigo": {
                "50": "#eef2ff",
                "100": "#e0e7ff",
                "200": "#c7d2fe",
                "300": "#a5b4fc",
                "400": "#818cf8",
                "500": "#6366f1",
                "600": "#4f46e5",
                "700": "#4338ca",
                "800": "#3730a3",
                "900": "#312e81",
                "950": "#1e1b4b"
              },
              "violet": {
                "50": "#f5f3ff",
                "100": "#ede9fe",
                "200": "#ddd6fe",
                "300": "#c4b5fd",
                "400": "#a78bfa",
                "500": "#8b5cf6",
                "600": "#7c3aed",
                "700": "#6d28d9",
                "800": "#5b21b6",
                "900": "#4c1d95",
                "950": "#2e1065"
              },
              "purple": {
                "50": "#faf5ff",
                "100": "#f3e8ff",
                "200": "#e9d5ff",
                "300": "#d8b4fe",
                "400": "#c084fc",
                "500": "#a855f7",
                "600": "#9333ea",
                "700": "#7e22ce",
                "800": "#6b21a8",
                "900": "#581c87",
                "950": "#3b0764"
              },
              "fuchsia": {
                "50": "#fdf4ff",
                "100": "#fae8ff",
                "200": "#f5d0fe",
                "300": "#f0abfc",
                "400": "#e879f9",
                "500": "#d946ef",
                "600": "#c026d3",
                "700": "#a21caf",
                "800": "#86198f",
                "900": "#701a75",
                "950": "#4a044e"
              },
              "pink": {
                "50": "#fdf2f8",
                "100": "#fce7f3",
                "200": "#fbcfe8",
                "300": "#f9a8d4",
                "400": "#f472b6",
                "500": "#ec4899",
                "600": "#db2777",
                "700": "#be185d",
                "800": "#9d174d",
                "900": "#831843",
                "950": "#500724"
              },
              "rose": {
                "50": "#fff1f2",
                "100": "#ffe4e6",
                "200": "#fecdd3",
                "300": "#fda4af",
                "400": "#fb7185",
                "500": "#f43f5e",
                "600": "#e11d48",
                "700": "#be123c",
                "800": "#9f1239",
                "900": "#881337",
                "950": "#4c0519"
              },
              "slate": {
                "50": "#f8fafc",
                "100": "#f1f5f9",
                "200": "#e2e8f0",
                "300": "#cbd5e1",
                "400": "#94a3b8",
                "500": "#64748b",
                "600": "#475569",
                "700": "#334155",
                "800": "#1e293b",
                "900": "#0f172a",
                "950": "#020617"
              },
              "gray": {
                "50": "#f9fafb",
                "100": "#f3f4f6",
                "200": "#e5e7eb",
                "300": "#d1d5db",
                "400": "#9ca3af",
                "500": "#6b7280",
                "600": "#4b5563",
                "700": "#374151",
                "800": "#1f2937",
                "900": "#111827",
                "950": "#030712"
              },
              "zinc": {
                "50": "#fafafa",
                "100": "#f4f4f5",
                "200": "#e4e4e7",
                "300": "#d4d4d8",
                "400": "#a1a1aa",
                "500": "#71717a",
                "600": "#52525b",
                "700": "#3f3f46",
                "800": "#27272a",
                "900": "#18181b",
                "950": "#09090b"
              },
              "neutral": {
                "50": "#fafafa",
                "100": "#f5f5f5",
                "200": "#e5e5e5",
                "300": "#d4d4d4",
                "400": "#a3a3a3",
                "500": "#737373",
                "600": "#525252",
                "700": "#404040",
                "800": "#262626",
                "900": "#171717",
                "950": "#0a0a0a"
              },
              "stone": {
                "50": "#fafaf9",
                "100": "#f5f5f4",
                "200": "#e7e5e4",
                "300": "#d6d3d1",
                "400": "#a8a29e",
                "500": "#78716c",
                "600": "#57534e",
                "700": "#44403c",
                "800": "#292524",
                "900": "#1c1917",
                "950": "#0c0a09"
              }
            },
            "semantic": {
              "transitionDuration": "0.2s",
              "focusRing": {
                "width": "1px",
                "style": "solid",
                "color": "{primary.color}",
                "offset": "2px",
                "shadow": "none"
              },
              "disabledOpacity": "0.6",
              "iconSize": "1rem",
              "anchorGutter": "2px",
              "primary": {
                "50": "{emerald.50}",
                "100": "{emerald.100}",
                "200": "{emerald.200}",
                "300": "{emerald.300}",
                "400": "{emerald.400}",
                "500": "{emerald.500}",
                "600": "{emerald.600}",
                "700": "{emerald.700}",
                "800": "{emerald.800}",
                "900": "{emerald.900}",
                "950": "{emerald.950}"
              },
              "formField": {
                "paddingX": "0.75rem",
                "paddingY": "0.5rem",
                "sm": {
                  "fontSize": "0.875rem",
                  "paddingX": "0.625rem",
                  "paddingY": "0.375rem"
                },
                "lg": {
                  "fontSize": "1.125rem",
                  "paddingX": "0.875rem",
                  "paddingY": "0.625rem"
                },
                "borderRadius": "{border.radius.md}",
                "focusRing": {
                  "width": "0",
                  "style": "none",
                  "color": "transparent",
                  "offset": "0",
                  "shadow": "none"
                },
                "transitionDuration": "{transition.duration}"
              },
              "list": {
                "padding": "0.25rem 0.25rem",
                "gap": "2px",
                "header": {
                  "padding": "0.5rem 1rem 0.25rem 1rem"
                },
                "option": {
                  "padding": "0.5rem 0.75rem",
                  "borderRadius": "{border.radius.sm}"
                },
                "optionGroup": {
                  "padding": "0.5rem 0.75rem",
                  "fontWeight": "600"
                }
              },
              "content": {
                "borderRadius": "{border.radius.md}"
              },
              "mask": {
                "transitionDuration": "0.3s"
              },
              "navigation": {
                "list": {
                  "padding": "0.25rem 0.25rem",
                  "gap": "2px"
                },
                "item": {
                  "padding": "0.5rem 0.75rem",
                  "borderRadius": "{border.radius.sm}",
                  "gap": "0.5rem"
                },
                "submenuLabel": {
                  "padding": "0.5rem 0.75rem",
                  "fontWeight": "600"
                },
                "submenuIcon": {
                  "size": "0.875rem"
                }
              },
              "overlay": {
                "select": {
                  "borderRadius": "{border.radius.md}",
                  "shadow": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"
                },
                "popover": {
                  "borderRadius": "{border.radius.md}",
                  "padding": "0.75rem",
                  "shadow": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"
                },
                "modal": {
                  "borderRadius": "{border.radius.xl}",
                  "padding": "1.25rem",
                  "shadow": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
                },
                "navigation": {
                  "shadow": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"
                }
              },
              "colorScheme": {
                "light": {
                  "surface": {
                    "0": "#ffffff",
                    "50": "{slate.50}",
                    "100": "{slate.100}",
                    "200": "{slate.200}",
                    "300": "{slate.300}",
                    "400": "{slate.400}",
                    "500": "{slate.500}",
                    "600": "{slate.600}",
                    "700": "{slate.700}",
                    "800": "{slate.800}",
                    "900": "{slate.900}",
                    "950": "{slate.950}"
                  },
                  "primary": {
                    "color": "{primary.500}",
                    "contrastColor": "#ffffff",
                    "hoverColor": "{primary.600}",
                    "activeColor": "{primary.700}"
                  },
                  "highlight": {
                    "background": "{primary.50}",
                    "focusBackground": "{primary.100}",
                    "color": "{primary.700}",
                    "focusColor": "{primary.800}"
                  },
                  "mask": {
                    "background": "rgba(0,0,0,0.4)",
                    "color": "{surface.200}"
                  },
                  "formField": {
                    "background": "{surface.0}",
                    "disabledBackground": "{surface.200}",
                    "filledBackground": "{surface.50}",
                    "filledHoverBackground": "{surface.50}",
                    "filledFocusBackground": "{surface.50}",
                    "borderColor": "{surface.300}",
                    "hoverBorderColor": "{surface.400}",
                    "focusBorderColor": "{primary.color}",
                    "invalidBorderColor": "{red.400}",
                    "color": "{surface.700}",
                    "disabledColor": "{surface.500}",
                    "placeholderColor": "{surface.500}",
                    "invalidPlaceholderColor": "{red.600}",
                    "floatLabelColor": "{surface.500}",
                    "floatLabelFocusColor": "{primary.600}",
                    "floatLabelActiveColor": "{surface.500}",
                    "floatLabelInvalidColor": "{form.field.invalid.placeholder.color}",
                    "iconColor": "{surface.400}",
                    "shadow": "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"
                  },
                  "text": {
                    "color": "{surface.700}",
                    "hoverColor": "{surface.800}",
                    "mutedColor": "{surface.500}",
                    "hoverMutedColor": "{surface.600}"
                  },
                  "content": {
                    "background": "{surface.0}",
                    "hoverBackground": "{surface.100}",
                    "borderColor": "{surface.200}",
                    "color": "{text.color}",
                    "hoverColor": "{text.hover.color}"
                  },
                  "overlay": {
                    "select": {
                      "background": "{surface.0}",
                      "borderColor": "{surface.200}",
                      "color": "{text.color}"
                    },
                    "popover": {
                      "background": "{surface.0}",
                      "borderColor": "{surface.200}",
                      "color": "{text.color}"
                    },
                    "modal": {
                      "background": "{surface.0}",
                      "borderColor": "{surface.200}",
                      "color": "{text.color}"
                    }
                  },
                  "list": {
                    "option": {
                      "focusBackground": "{surface.100}",
                      "selectedBackground": "{highlight.background}",
                      "selectedFocusBackground": "{highlight.focus.background}",
                      "color": "{text.color}",
                      "focusColor": "{text.hover.color}",
                      "selectedColor": "{highlight.color}",
                      "selectedFocusColor": "{highlight.focus.color}",
                      "icon": {
                        "color": "{surface.400}",
                        "focusColor": "{surface.500}"
                      }
                    },
                    "optionGroup": {
                      "background": "transparent",
                      "color": "{text.muted.color}"
                    }
                  },
                  "navigation": {
                    "item": {
                      "focusBackground": "{surface.100}",
                      "activeBackground": "{surface.100}",
                      "color": "{text.color}",
                      "focusColor": "{text.hover.color}",
                      "activeColor": "{text.hover.color}",
                      "icon": {
                        "color": "{surface.400}",
                        "focusColor": "{surface.500}",
                        "activeColor": "{surface.500}"
                      }
                    },
                    "submenuLabel": {
                      "background": "transparent",
                      "color": "{text.muted.color}"
                    },
                    "submenuIcon": {
                      "color": "{surface.400}",
                      "focusColor": "{surface.500}",
                      "activeColor": "{surface.500}"
                    }
                  }
                },
                "dark": {
                  "surface": {
                    "0": "#ffffff",
                    "50": "{zinc.50}",
                    "100": "{zinc.100}",
                    "200": "{zinc.200}",
                    "300": "{zinc.300}",
                    "400": "{zinc.400}",
                    "500": "{zinc.500}",
                    "600": "{zinc.600}",
                    "700": "{zinc.700}",
                    "800": "{zinc.800}",
                    "900": "{zinc.900}",
                    "950": "{zinc.950}"
                  },
                  "primary": {
                    "color": "{primary.400}",
                    "contrastColor": "{surface.900}",
                    "hoverColor": "{primary.300}",
                    "activeColor": "{primary.200}"
                  },
                  "highlight": {
                    "background": "color-mix(in srgb, {primary.400}, transparent 84%)",
                    "focusBackground": "color-mix(in srgb, {primary.400}, transparent 76%)",
                    "color": "rgba(255,255,255,.87)",
                    "focusColor": "rgba(255,255,255,.87)"
                  },
                  "mask": {
                    "background": "rgba(0,0,0,0.6)",
                    "color": "{surface.200}"
                  },
                  "formField": {
                    "background": "{surface.950}",
                    "disabledBackground": "{surface.700}",
                    "filledBackground": "{surface.800}",
                    "filledHoverBackground": "{surface.800}",
                    "filledFocusBackground": "{surface.800}",
                    "borderColor": "{surface.600}",
                    "hoverBorderColor": "{surface.500}",
                    "focusBorderColor": "{primary.color}",
                    "invalidBorderColor": "{red.300}",
                    "color": "{surface.0}",
                    "disabledColor": "{surface.400}",
                    "placeholderColor": "{surface.400}",
                    "invalidPlaceholderColor": "{red.400}",
                    "floatLabelColor": "{surface.400}",
                    "floatLabelFocusColor": "{primary.color}",
                    "floatLabelActiveColor": "{surface.400}",
                    "floatLabelInvalidColor": "{form.field.invalid.placeholder.color}",
                    "iconColor": "{surface.400}",
                    "shadow": "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"
                  },
                  "text": {
                    "color": "{surface.0}",
                    "hoverColor": "{surface.0}",
                    "mutedColor": "{surface.400}",
                    "hoverMutedColor": "{surface.300}"
                  },
                  "content": {
                    "background": "{surface.900}",
                    "hoverBackground": "{surface.800}",
                    "borderColor": "{surface.700}",
                    "color": "{text.color}",
                    "hoverColor": "{text.hover.color}"
                  },
                  "overlay": {
                    "select": {
                      "background": "{surface.900}",
                      "borderColor": "{surface.700}",
                      "color": "{text.color}"
                    },
                    "popover": {
                      "background": "{surface.900}",
                      "borderColor": "{surface.700}",
                      "color": "{text.color}"
                    },
                    "modal": {
                      "background": "{surface.900}",
                      "borderColor": "{surface.700}",
                      "color": "{text.color}"
                    }
                  },
                  "list": {
                    "option": {
                      "focusBackground": "{surface.800}",
                      "selectedBackground": "{highlight.background}",
                      "selectedFocusBackground": "{highlight.focus.background}",
                      "color": "{text.color}",
                      "focusColor": "{text.hover.color}",
                      "selectedColor": "{highlight.color}",
                      "selectedFocusColor": "{highlight.focus.color}",
                      "icon": {
                        "color": "{surface.500}",
                        "focusColor": "{surface.400}"
                      }
                    },
                    "optionGroup": {
                      "background": "transparent",
                      "color": "{text.muted.color}"
                    }
                  },
                  "navigation": {
                    "item": {
                      "focusBackground": "{surface.800}",
                      "activeBackground": "{surface.800}",
                      "color": "{text.color}",
                      "focusColor": "{text.hover.color}",
                      "activeColor": "{text.hover.color}",
                      "icon": {
                        "color": "{surface.500}",
                        "focusColor": "{surface.400}",
                        "activeColor": "{surface.400}"
                      }
                    },
                    "submenuLabel": {
                      "background": "transparent",
                      "color": "{text.muted.color}"
                    },
                    "submenuIcon": {
                      "color": "{surface.500}",
                      "focusColor": "{surface.400}",
                      "activeColor": "{surface.400}"
                    }
                  }
                }
              }
            },
            "components": {
              "accordion": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "panel": {
                  "borderWidth": "0 0 1px 0",
                  "borderColor": "{content.border.color}"
                },
                "header": {
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "activeColor": "{text.color}",
                  "activeHoverColor": "{text.color}",
                  "padding": "1.125rem",
                  "fontWeight": "600",
                  "borderRadius": "0",
                  "borderWidth": "0",
                  "borderColor": "{content.border.color}",
                  "background": "{content.background}",
                  "hoverBackground": "{content.background}",
                  "activeBackground": "{content.background}",
                  "activeHoverBackground": "{content.background}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "-1px",
                    "shadow": "{focus.ring.shadow}"
                  },
                  "toggleIcon": {
                    "color": "{text.muted.color}",
                    "hoverColor": "{text.color}",
                    "activeColor": "{text.color}",
                    "activeHoverColor": "{text.color}"
                  },
                  "first": {
                    "topBorderRadius": "{content.border.radius}",
                    "borderWidth": "0"
                  },
                  "last": {
                    "bottomBorderRadius": "{content.border.radius}",
                    "activeBottomBorderRadius": "0"
                  }
                },
                "content": {
                  "borderWidth": "0",
                  "borderColor": "{content.border.color}",
                  "background": "{content.background}",
                  "color": "{text.color}",
                  "padding": "0 1.125rem 1.125rem 1.125rem"
                }
              },
              "autocomplete": {
                "root": {
                  "background": "{form.field.background}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "filledBackground": "{form.field.filled.background}",
                  "filledHoverBackground": "{form.field.filled.hover.background}",
                  "filledFocusBackground": "{form.field.filled.focus.background}",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.hover.border.color}",
                  "focusBorderColor": "{form.field.focus.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "color": "{form.field.color}",
                  "disabledColor": "{form.field.disabled.color}",
                  "placeholderColor": "{form.field.placeholder.color}",
                  "invalidPlaceholderColor": "{form.field.invalid.placeholder.color}",
                  "shadow": "{form.field.shadow}",
                  "paddingX": "{form.field.padding.x}",
                  "paddingY": "{form.field.padding.y}",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{form.field.focus.ring.width}",
                    "style": "{form.field.focus.ring.style}",
                    "color": "{form.field.focus.ring.color}",
                    "offset": "{form.field.focus.ring.offset}",
                    "shadow": "{form.field.focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}"
                },
                "overlay": {
                  "background": "{overlay.select.background}",
                  "borderColor": "{overlay.select.border.color}",
                  "borderRadius": "{overlay.select.border.radius}",
                  "color": "{overlay.select.color}",
                  "shadow": "{overlay.select.shadow}"
                },
                "list": {
                  "padding": "{list.padding}",
                  "gap": "{list.gap}"
                },
                "option": {
                  "focusBackground": "{list.option.focus.background}",
                  "selectedBackground": "{list.option.selected.background}",
                  "selectedFocusBackground": "{list.option.selected.focus.background}",
                  "color": "{list.option.color}",
                  "focusColor": "{list.option.focus.color}",
                  "selectedColor": "{list.option.selected.color}",
                  "selectedFocusColor": "{list.option.selected.focus.color}",
                  "padding": "{list.option.padding}",
                  "borderRadius": "{list.option.border.radius}"
                },
                "optionGroup": {
                  "background": "{list.option.group.background}",
                  "color": "{list.option.group.color}",
                  "fontWeight": "{list.option.group.font.weight}",
                  "padding": "{list.option.group.padding}"
                },
                "dropdown": {
                  "width": "2.5rem",
                  "sm": {
                    "width": "2rem"
                  },
                  "lg": {
                    "width": "3rem"
                  },
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.border.color}",
                  "activeBorderColor": "{form.field.border.color}",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "chip": {
                  "borderRadius": "{border.radius.sm}"
                },
                "emptyMessage": {
                  "padding": "{list.option.padding}"
                },
                "colorScheme": {
                  "light": {
                    "chip": {
                      "focusBackground": "{surface.200}",
                      "focusColor": "{surface.800}"
                    },
                    "dropdown": {
                      "background": "{surface.100}",
                      "hoverBackground": "{surface.200}",
                      "activeBackground": "{surface.300}",
                      "color": "{surface.600}",
                      "hoverColor": "{surface.700}",
                      "activeColor": "{surface.800}"
                    }
                  },
                  "dark": {
                    "chip": {
                      "focusBackground": "{surface.700}",
                      "focusColor": "{surface.0}"
                    },
                    "dropdown": {
                      "background": "{surface.800}",
                      "hoverBackground": "{surface.700}",
                      "activeBackground": "{surface.600}",
                      "color": "{surface.300}",
                      "hoverColor": "{surface.200}",
                      "activeColor": "{surface.100}"
                    }
                  }
                }
              },
              "avatar": {
                "root": {
                  "width": "2rem",
                  "height": "2rem",
                  "fontSize": "1rem",
                  "background": "{content.border.color}",
                  "color": "{content.color}",
                  "borderRadius": "{content.border.radius}"
                },
                "icon": {
                  "size": "1rem"
                },
                "group": {
                  "borderColor": "{content.background}",
                  "offset": "-0.75rem"
                },
                "lg": {
                  "width": "3rem",
                  "height": "3rem",
                  "fontSize": "1.5rem",
                  "icon": {
                    "size": "1.5rem"
                  },
                  "group": {
                    "offset": "-1rem"
                  }
                },
                "xl": {
                  "width": "4rem",
                  "height": "4rem",
                  "fontSize": "2rem",
                  "icon": {
                    "size": "2rem"
                  },
                  "group": {
                    "offset": "-1.5rem"
                  }
                }
              },
              "badge": {
                "root": {
                  "borderRadius": "{border.radius.md}",
                  "padding": "0 0.5rem",
                  "fontSize": "0.75rem",
                  "fontWeight": "700",
                  "minWidth": "1.5rem",
                  "height": "1.5rem"
                },
                "dot": {
                  "size": "0.5rem"
                },
                "sm": {
                  "fontSize": "0.625rem",
                  "minWidth": "1.25rem",
                  "height": "1.25rem"
                },
                "lg": {
                  "fontSize": "0.875rem",
                  "minWidth": "1.75rem",
                  "height": "1.75rem"
                },
                "xl": {
                  "fontSize": "1rem",
                  "minWidth": "2rem",
                  "height": "2rem"
                },
                "colorScheme": {
                  "light": {
                    "primary": {
                      "background": "{primary.color}",
                      "color": "{primary.contrast.color}"
                    },
                    "secondary": {
                      "background": "{surface.100}",
                      "color": "{surface.600}"
                    },
                    "success": {
                      "background": "{green.500}",
                      "color": "{surface.0}"
                    },
                    "info": {
                      "background": "{sky.500}",
                      "color": "{surface.0}"
                    },
                    "warn": {
                      "background": "{orange.500}",
                      "color": "{surface.0}"
                    },
                    "danger": {
                      "background": "{red.500}",
                      "color": "{surface.0}"
                    },
                    "contrast": {
                      "background": "{surface.950}",
                      "color": "{surface.0}"
                    }
                  },
                  "dark": {
                    "primary": {
                      "background": "{primary.color}",
                      "color": "{primary.contrast.color}"
                    },
                    "secondary": {
                      "background": "{surface.800}",
                      "color": "{surface.300}"
                    },
                    "success": {
                      "background": "{green.400}",
                      "color": "{green.950}"
                    },
                    "info": {
                      "background": "{sky.400}",
                      "color": "{sky.950}"
                    },
                    "warn": {
                      "background": "{orange.400}",
                      "color": "{orange.950}"
                    },
                    "danger": {
                      "background": "{red.400}",
                      "color": "{red.950}"
                    },
                    "contrast": {
                      "background": "{surface.0}",
                      "color": "{surface.950}"
                    }
                  }
                }
              },
              "blockui": {
                "root": {
                  "borderRadius": "{content.border.radius}"
                }
              },
              "breadcrumb": {
                "root": {
                  "padding": "1rem",
                  "background": "{content.background}",
                  "gap": "0.5rem",
                  "transitionDuration": "{transition.duration}"
                },
                "item": {
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "borderRadius": "{content.border.radius}",
                  "gap": "{navigation.item.gap}",
                  "icon": {
                    "color": "{navigation.item.icon.color}",
                    "hoverColor": "{navigation.item.icon.focus.color}"
                  },
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "separator": {
                  "color": "{navigation.item.icon.color}"
                }
              },
              "button": {
                "root": {
                  "borderRadius": "{form.field.border.radius}",
                  "roundedBorderRadius": "2rem",
                  "gap": "0.5rem",
                  "paddingX": "{form.field.padding.x}",
                  "paddingY": "{form.field.padding.y}",
                  "iconOnlyWidth": "2.5rem",
                  "sm": {
                    "fontSize": "{form.field.sm.font.size}",
                    "paddingX": "{form.field.sm.padding.x}",
                    "paddingY": "{form.field.sm.padding.y}",
                    "iconOnlyWidth": "2rem"
                  },
                  "lg": {
                    "fontSize": "{form.field.lg.font.size}",
                    "paddingX": "{form.field.lg.padding.x}",
                    "paddingY": "{form.field.lg.padding.y}",
                    "iconOnlyWidth": "3rem"
                  },
                  "label": {
                    "fontWeight": "500"
                  },
                  "raisedShadow": "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "offset": "{focus.ring.offset}"
                  },
                  "badgeSize": "1rem",
                  "transitionDuration": "{form.field.transition.duration}"
                },
                "colorScheme": {
                  "light": {
                    "root": {
                      "primary": {
                        "background": "{primary.color}",
                        "hoverBackground": "{primary.hover.color}",
                        "activeBackground": "{primary.active.color}",
                        "borderColor": "{primary.color}",
                        "hoverBorderColor": "{primary.hover.color}",
                        "activeBorderColor": "{primary.active.color}",
                        "color": "{primary.contrast.color}",
                        "hoverColor": "{primary.contrast.color}",
                        "activeColor": "{primary.contrast.color}",
                        "focusRing": {
                          "color": "{primary.color}",
                          "shadow": "none"
                        }
                      },
                      "secondary": {
                        "background": "{surface.100}",
                        "hoverBackground": "{surface.200}",
                        "activeBackground": "{surface.300}",
                        "borderColor": "{surface.100}",
                        "hoverBorderColor": "{surface.200}",
                        "activeBorderColor": "{surface.300}",
                        "color": "{surface.600}",
                        "hoverColor": "{surface.700}",
                        "activeColor": "{surface.800}",
                        "focusRing": {
                          "color": "{surface.600}",
                          "shadow": "none"
                        }
                      },
                      "info": {
                        "background": "{sky.500}",
                        "hoverBackground": "{sky.600}",
                        "activeBackground": "{sky.700}",
                        "borderColor": "{sky.500}",
                        "hoverBorderColor": "{sky.600}",
                        "activeBorderColor": "{sky.700}",
                        "color": "#ffffff",
                        "hoverColor": "#ffffff",
                        "activeColor": "#ffffff",
                        "focusRing": {
                          "color": "{sky.500}",
                          "shadow": "none"
                        }
                      },
                      "success": {
                        "background": "{green.500}",
                        "hoverBackground": "{green.600}",
                        "activeBackground": "{green.700}",
                        "borderColor": "{green.500}",
                        "hoverBorderColor": "{green.600}",
                        "activeBorderColor": "{green.700}",
                        "color": "#ffffff",
                        "hoverColor": "#ffffff",
                        "activeColor": "#ffffff",
                        "focusRing": {
                          "color": "{green.500}",
                          "shadow": "none"
                        }
                      },
                      "warn": {
                        "background": "{orange.500}",
                        "hoverBackground": "{orange.600}",
                        "activeBackground": "{orange.700}",
                        "borderColor": "{orange.500}",
                        "hoverBorderColor": "{orange.600}",
                        "activeBorderColor": "{orange.700}",
                        "color": "#ffffff",
                        "hoverColor": "#ffffff",
                        "activeColor": "#ffffff",
                        "focusRing": {
                          "color": "{orange.500}",
                          "shadow": "none"
                        }
                      },
                      "help": {
                        "background": "{purple.500}",
                        "hoverBackground": "{purple.600}",
                        "activeBackground": "{purple.700}",
                        "borderColor": "{purple.500}",
                        "hoverBorderColor": "{purple.600}",
                        "activeBorderColor": "{purple.700}",
                        "color": "#ffffff",
                        "hoverColor": "#ffffff",
                        "activeColor": "#ffffff",
                        "focusRing": {
                          "color": "{purple.500}",
                          "shadow": "none"
                        }
                      },
                      "danger": {
                        "background": "{red.500}",
                        "hoverBackground": "{red.600}",
                        "activeBackground": "{red.700}",
                        "borderColor": "{red.500}",
                        "hoverBorderColor": "{red.600}",
                        "activeBorderColor": "{red.700}",
                        "color": "#ffffff",
                        "hoverColor": "#ffffff",
                        "activeColor": "#ffffff",
                        "focusRing": {
                          "color": "{red.500}",
                          "shadow": "none"
                        }
                      },
                      "contrast": {
                        "background": "{surface.950}",
                        "hoverBackground": "{surface.900}",
                        "activeBackground": "{surface.800}",
                        "borderColor": "{surface.950}",
                        "hoverBorderColor": "{surface.900}",
                        "activeBorderColor": "{surface.800}",
                        "color": "{surface.0}",
                        "hoverColor": "{surface.0}",
                        "activeColor": "{surface.0}",
                        "focusRing": {
                          "color": "{surface.950}",
                          "shadow": "none"
                        }
                      }
                    },
                    "outlined": {
                      "primary": {
                        "hoverBackground": "{primary.50}",
                        "activeBackground": "{primary.100}",
                        "borderColor": "{primary.200}",
                        "color": "{primary.color}"
                      },
                      "secondary": {
                        "hoverBackground": "{surface.50}",
                        "activeBackground": "{surface.100}",
                        "borderColor": "{surface.200}",
                        "color": "{surface.500}"
                      },
                      "success": {
                        "hoverBackground": "{green.50}",
                        "activeBackground": "{green.100}",
                        "borderColor": "{green.200}",
                        "color": "{green.500}"
                      },
                      "info": {
                        "hoverBackground": "{sky.50}",
                        "activeBackground": "{sky.100}",
                        "borderColor": "{sky.200}",
                        "color": "{sky.500}"
                      },
                      "warn": {
                        "hoverBackground": "{orange.50}",
                        "activeBackground": "{orange.100}",
                        "borderColor": "{orange.200}",
                        "color": "{orange.500}"
                      },
                      "help": {
                        "hoverBackground": "{purple.50}",
                        "activeBackground": "{purple.100}",
                        "borderColor": "{purple.200}",
                        "color": "{purple.500}"
                      },
                      "danger": {
                        "hoverBackground": "{red.50}",
                        "activeBackground": "{red.100}",
                        "borderColor": "{red.200}",
                        "color": "{red.500}"
                      },
                      "contrast": {
                        "hoverBackground": "{surface.50}",
                        "activeBackground": "{surface.100}",
                        "borderColor": "{surface.700}",
                        "color": "{surface.950}"
                      },
                      "plain": {
                        "hoverBackground": "{surface.50}",
                        "activeBackground": "{surface.100}",
                        "borderColor": "{surface.200}",
                        "color": "{surface.700}"
                      }
                    },
                    "text": {
                      "primary": {
                        "hoverBackground": "{primary.50}",
                        "activeBackground": "{primary.100}",
                        "color": "{primary.color}"
                      },
                      "secondary": {
                        "hoverBackground": "{surface.50}",
                        "activeBackground": "{surface.100}",
                        "color": "{surface.500}"
                      },
                      "success": {
                        "hoverBackground": "{green.50}",
                        "activeBackground": "{green.100}",
                        "color": "{green.500}"
                      },
                      "info": {
                        "hoverBackground": "{sky.50}",
                        "activeBackground": "{sky.100}",
                        "color": "{sky.500}"
                      },
                      "warn": {
                        "hoverBackground": "{orange.50}",
                        "activeBackground": "{orange.100}",
                        "color": "{orange.500}"
                      },
                      "help": {
                        "hoverBackground": "{purple.50}",
                        "activeBackground": "{purple.100}",
                        "color": "{purple.500}"
                      },
                      "danger": {
                        "hoverBackground": "{red.50}",
                        "activeBackground": "{red.100}",
                        "color": "{red.500}"
                      },
                      "contrast": {
                        "hoverBackground": "{surface.50}",
                        "activeBackground": "{surface.100}",
                        "color": "{surface.950}"
                      },
                      "plain": {
                        "hoverBackground": "{surface.50}",
                        "activeBackground": "{surface.100}",
                        "color": "{surface.700}"
                      }
                    },
                    "link": {
                      "color": "{primary.color}",
                      "hoverColor": "{primary.color}",
                      "activeColor": "{primary.color}"
                    }
                  },
                  "dark": {
                    "root": {
                      "primary": {
                        "background": "{primary.color}",
                        "hoverBackground": "{primary.hover.color}",
                        "activeBackground": "{primary.active.color}",
                        "borderColor": "{primary.color}",
                        "hoverBorderColor": "{primary.hover.color}",
                        "activeBorderColor": "{primary.active.color}",
                        "color": "{primary.contrast.color}",
                        "hoverColor": "{primary.contrast.color}",
                        "activeColor": "{primary.contrast.color}",
                        "focusRing": {
                          "color": "{primary.color}",
                          "shadow": "none"
                        }
                      },
                      "secondary": {
                        "background": "{surface.800}",
                        "hoverBackground": "{surface.700}",
                        "activeBackground": "{surface.600}",
                        "borderColor": "{surface.800}",
                        "hoverBorderColor": "{surface.700}",
                        "activeBorderColor": "{surface.600}",
                        "color": "{surface.300}",
                        "hoverColor": "{surface.200}",
                        "activeColor": "{surface.100}",
                        "focusRing": {
                          "color": "{surface.300}",
                          "shadow": "none"
                        }
                      },
                      "info": {
                        "background": "{sky.400}",
                        "hoverBackground": "{sky.300}",
                        "activeBackground": "{sky.200}",
                        "borderColor": "{sky.400}",
                        "hoverBorderColor": "{sky.300}",
                        "activeBorderColor": "{sky.200}",
                        "color": "{sky.950}",
                        "hoverColor": "{sky.950}",
                        "activeColor": "{sky.950}",
                        "focusRing": {
                          "color": "{sky.400}",
                          "shadow": "none"
                        }
                      },
                      "success": {
                        "background": "{green.400}",
                        "hoverBackground": "{green.300}",
                        "activeBackground": "{green.200}",
                        "borderColor": "{green.400}",
                        "hoverBorderColor": "{green.300}",
                        "activeBorderColor": "{green.200}",
                        "color": "{green.950}",
                        "hoverColor": "{green.950}",
                        "activeColor": "{green.950}",
                        "focusRing": {
                          "color": "{green.400}",
                          "shadow": "none"
                        }
                      },
                      "warn": {
                        "background": "{orange.400}",
                        "hoverBackground": "{orange.300}",
                        "activeBackground": "{orange.200}",
                        "borderColor": "{orange.400}",
                        "hoverBorderColor": "{orange.300}",
                        "activeBorderColor": "{orange.200}",
                        "color": "{orange.950}",
                        "hoverColor": "{orange.950}",
                        "activeColor": "{orange.950}",
                        "focusRing": {
                          "color": "{orange.400}",
                          "shadow": "none"
                        }
                      },
                      "help": {
                        "background": "{purple.400}",
                        "hoverBackground": "{purple.300}",
                        "activeBackground": "{purple.200}",
                        "borderColor": "{purple.400}",
                        "hoverBorderColor": "{purple.300}",
                        "activeBorderColor": "{purple.200}",
                        "color": "{purple.950}",
                        "hoverColor": "{purple.950}",
                        "activeColor": "{purple.950}",
                        "focusRing": {
                          "color": "{purple.400}",
                          "shadow": "none"
                        }
                      },
                      "danger": {
                        "background": "{red.400}",
                        "hoverBackground": "{red.300}",
                        "activeBackground": "{red.200}",
                        "borderColor": "{red.400}",
                        "hoverBorderColor": "{red.300}",
                        "activeBorderColor": "{red.200}",
                        "color": "{red.950}",
                        "hoverColor": "{red.950}",
                        "activeColor": "{red.950}",
                        "focusRing": {
                          "color": "{red.400}",
                          "shadow": "none"
                        }
                      },
                      "contrast": {
                        "background": "{surface.0}",
                        "hoverBackground": "{surface.100}",
                        "activeBackground": "{surface.200}",
                        "borderColor": "{surface.0}",
                        "hoverBorderColor": "{surface.100}",
                        "activeBorderColor": "{surface.200}",
                        "color": "{surface.950}",
                        "hoverColor": "{surface.950}",
                        "activeColor": "{surface.950}",
                        "focusRing": {
                          "color": "{surface.0}",
                          "shadow": "none"
                        }
                      }
                    },
                    "outlined": {
                      "primary": {
                        "hoverBackground": "color-mix(in srgb, {primary.color}, transparent 96%)",
                        "activeBackground": "color-mix(in srgb, {primary.color}, transparent 84%)",
                        "borderColor": "{primary.700}",
                        "color": "{primary.color}"
                      },
                      "secondary": {
                        "hoverBackground": "rgba(255,255,255,0.04)",
                        "activeBackground": "rgba(255,255,255,0.16)",
                        "borderColor": "{surface.700}",
                        "color": "{surface.400}"
                      },
                      "success": {
                        "hoverBackground": "color-mix(in srgb, {green.400}, transparent 96%)",
                        "activeBackground": "color-mix(in srgb, {green.400}, transparent 84%)",
                        "borderColor": "{green.700}",
                        "color": "{green.400}"
                      },
                      "info": {
                        "hoverBackground": "color-mix(in srgb, {sky.400}, transparent 96%)",
                        "activeBackground": "color-mix(in srgb, {sky.400}, transparent 84%)",
                        "borderColor": "{sky.700}",
                        "color": "{sky.400}"
                      },
                      "warn": {
                        "hoverBackground": "color-mix(in srgb, {orange.400}, transparent 96%)",
                        "activeBackground": "color-mix(in srgb, {orange.400}, transparent 84%)",
                        "borderColor": "{orange.700}",
                        "color": "{orange.400}"
                      },
                      "help": {
                        "hoverBackground": "color-mix(in srgb, {purple.400}, transparent 96%)",
                        "activeBackground": "color-mix(in srgb, {purple.400}, transparent 84%)",
                        "borderColor": "{purple.700}",
                        "color": "{purple.400}"
                      },
                      "danger": {
                        "hoverBackground": "color-mix(in srgb, {red.400}, transparent 96%)",
                        "activeBackground": "color-mix(in srgb, {red.400}, transparent 84%)",
                        "borderColor": "{red.700}",
                        "color": "{red.400}"
                      },
                      "contrast": {
                        "hoverBackground": "{surface.800}",
                        "activeBackground": "{surface.700}",
                        "borderColor": "{surface.500}",
                        "color": "{surface.0}"
                      },
                      "plain": {
                        "hoverBackground": "{surface.800}",
                        "activeBackground": "{surface.700}",
                        "borderColor": "{surface.600}",
                        "color": "{surface.0}"
                      }
                    },
                    "text": {
                      "primary": {
                        "hoverBackground": "color-mix(in srgb, {primary.color}, transparent 96%)",
                        "activeBackground": "color-mix(in srgb, {primary.color}, transparent 84%)",
                        "color": "{primary.color}"
                      },
                      "secondary": {
                        "hoverBackground": "{surface.800}",
                        "activeBackground": "{surface.700}",
                        "color": "{surface.400}"
                      },
                      "success": {
                        "hoverBackground": "color-mix(in srgb, {green.400}, transparent 96%)",
                        "activeBackground": "color-mix(in srgb, {green.400}, transparent 84%)",
                        "color": "{green.400}"
                      },
                      "info": {
                        "hoverBackground": "color-mix(in srgb, {sky.400}, transparent 96%)",
                        "activeBackground": "color-mix(in srgb, {sky.400}, transparent 84%)",
                        "color": "{sky.400}"
                      },
                      "warn": {
                        "hoverBackground": "color-mix(in srgb, {orange.400}, transparent 96%)",
                        "activeBackground": "color-mix(in srgb, {orange.400}, transparent 84%)",
                        "color": "{orange.400}"
                      },
                      "help": {
                        "hoverBackground": "color-mix(in srgb, {purple.400}, transparent 96%)",
                        "activeBackground": "color-mix(in srgb, {purple.400}, transparent 84%)",
                        "color": "{purple.400}"
                      },
                      "danger": {
                        "hoverBackground": "color-mix(in srgb, {red.400}, transparent 96%)",
                        "activeBackground": "color-mix(in srgb, {red.400}, transparent 84%)",
                        "color": "{red.400}"
                      },
                      "contrast": {
                        "hoverBackground": "{surface.800}",
                        "activeBackground": "{surface.700}",
                        "color": "{surface.0}"
                      },
                      "plain": {
                        "hoverBackground": "{surface.800}",
                        "activeBackground": "{surface.700}",
                        "color": "{surface.0}"
                      }
                    },
                    "link": {
                      "color": "{primary.color}",
                      "hoverColor": "{primary.color}",
                      "activeColor": "{primary.color}"
                    }
                  }
                }
              },
              "card": {
                "root": {
                  "background": "{content.background}",
                  "borderRadius": "{border.radius.xl}",
                  "color": "{content.color}",
                  "shadow": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"
                },
                "body": {
                  "padding": "1.25rem",
                  "gap": "0.5rem"
                },
                "caption": {
                  "gap": "0.5rem"
                },
                "title": {
                  "fontSize": "1.25rem",
                  "fontWeight": "500"
                },
                "subtitle": {
                  "color": "{text.muted.color}"
                }
              },
              "carousel": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "content": {
                  "gap": "0.25rem"
                },
                "indicatorList": {
                  "padding": "1rem",
                  "gap": "0.5rem"
                },
                "indicator": {
                  "width": "2rem",
                  "height": "0.5rem",
                  "borderRadius": "{content.border.radius}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "colorScheme": {
                  "light": {
                    "indicator": {
                      "background": "{surface.200}",
                      "hoverBackground": "{surface.300}",
                      "activeBackground": "{primary.color}"
                    }
                  },
                  "dark": {
                    "indicator": {
                      "background": "{surface.700}",
                      "hoverBackground": "{surface.600}",
                      "activeBackground": "{primary.color}"
                    }
                  }
                }
              },
              "cascadeselect": {
                "root": {
                  "background": "{form.field.background}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "filledBackground": "{form.field.filled.background}",
                  "filledHoverBackground": "{form.field.filled.hover.background}",
                  "filledFocusBackground": "{form.field.filled.focus.background}",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.hover.border.color}",
                  "focusBorderColor": "{form.field.focus.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "color": "{form.field.color}",
                  "disabledColor": "{form.field.disabled.color}",
                  "placeholderColor": "{form.field.placeholder.color}",
                  "invalidPlaceholderColor": "{form.field.invalid.placeholder.color}",
                  "shadow": "{form.field.shadow}",
                  "paddingX": "{form.field.padding.x}",
                  "paddingY": "{form.field.padding.y}",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{form.field.focus.ring.width}",
                    "style": "{form.field.focus.ring.style}",
                    "color": "{form.field.focus.ring.color}",
                    "offset": "{form.field.focus.ring.offset}",
                    "shadow": "{form.field.focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}",
                  "sm": {
                    "fontSize": "{form.field.sm.font.size}",
                    "paddingX": "{form.field.sm.padding.x}",
                    "paddingY": "{form.field.sm.padding.y}"
                  },
                  "lg": {
                    "fontSize": "{form.field.lg.font.size}",
                    "paddingX": "{form.field.lg.padding.x}",
                    "paddingY": "{form.field.lg.padding.y}"
                  }
                },
                "dropdown": {
                  "width": "2.5rem",
                  "color": "{form.field.icon.color}"
                },
                "overlay": {
                  "background": "{overlay.select.background}",
                  "borderColor": "{overlay.select.border.color}",
                  "borderRadius": "{overlay.select.border.radius}",
                  "color": "{overlay.select.color}",
                  "shadow": "{overlay.select.shadow}"
                },
                "list": {
                  "padding": "{list.padding}",
                  "gap": "{list.gap}",
                  "mobileIndent": "1rem"
                },
                "option": {
                  "focusBackground": "{list.option.focus.background}",
                  "selectedBackground": "{list.option.selected.background}",
                  "selectedFocusBackground": "{list.option.selected.focus.background}",
                  "color": "{list.option.color}",
                  "focusColor": "{list.option.focus.color}",
                  "selectedColor": "{list.option.selected.color}",
                  "selectedFocusColor": "{list.option.selected.focus.color}",
                  "padding": "{list.option.padding}",
                  "borderRadius": "{list.option.border.radius}",
                  "icon": {
                    "color": "{list.option.icon.color}",
                    "focusColor": "{list.option.icon.focus.color}",
                    "size": "0.875rem"
                  }
                },
                "clearIcon": {
                  "color": "{form.field.icon.color}"
                }
              },
              "checkbox": {
                "root": {
                  "borderRadius": "{border.radius.sm}",
                  "width": "1.25rem",
                  "height": "1.25rem",
                  "background": "{form.field.background}",
                  "checkedBackground": "{primary.color}",
                  "checkedHoverBackground": "{primary.hover.color}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "filledBackground": "{form.field.filled.background}",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.hover.border.color}",
                  "focusBorderColor": "{form.field.border.color}",
                  "checkedBorderColor": "{primary.color}",
                  "checkedHoverBorderColor": "{primary.hover.color}",
                  "checkedFocusBorderColor": "{primary.color}",
                  "checkedDisabledBorderColor": "{form.field.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "shadow": "{form.field.shadow}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}",
                  "sm": {
                    "width": "1rem",
                    "height": "1rem"
                  },
                  "lg": {
                    "width": "1.5rem",
                    "height": "1.5rem"
                  }
                },
                "icon": {
                  "size": "0.875rem",
                  "color": "{form.field.color}",
                  "checkedColor": "{primary.contrast.color}",
                  "checkedHoverColor": "{primary.contrast.color}",
                  "disabledColor": "{form.field.disabled.color}",
                  "sm": {
                    "size": "0.75rem"
                  },
                  "lg": {
                    "size": "1rem"
                  }
                }
              },
              "chip": {
                "root": {
                  "borderRadius": "16px",
                  "paddingX": "0.75rem",
                  "paddingY": "0.5rem",
                  "gap": "0.5rem",
                  "transitionDuration": "{transition.duration}"
                },
                "image": {
                  "width": "2rem",
                  "height": "2rem"
                },
                "icon": {
                  "size": "1rem"
                },
                "removeIcon": {
                  "size": "1rem",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{form.field.focus.ring.shadow}"
                  }
                },
                "colorScheme": {
                  "light": {
                    "root": {
                      "background": "{surface.100}",
                      "color": "{surface.800}"
                    },
                    "icon": {
                      "color": "{surface.800}"
                    },
                    "removeIcon": {
                      "color": "{surface.800}"
                    }
                  },
                  "dark": {
                    "root": {
                      "background": "{surface.800}",
                      "color": "{surface.0}"
                    },
                    "icon": {
                      "color": "{surface.0}"
                    },
                    "removeIcon": {
                      "color": "{surface.0}"
                    }
                  }
                }
              },
              "colorpicker": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "preview": {
                  "width": "1.5rem",
                  "height": "1.5rem",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "panel": {
                  "shadow": "{overlay.popover.shadow}",
                  "borderRadius": "{overlay.popover.borderRadius}"
                },
                "colorScheme": {
                  "light": {
                    "panel": {
                      "background": "{surface.800}",
                      "borderColor": "{surface.900}"
                    },
                    "handle": {
                      "color": "{surface.0}"
                    }
                  },
                  "dark": {
                    "panel": {
                      "background": "{surface.900}",
                      "borderColor": "{surface.700}"
                    },
                    "handle": {
                      "color": "{surface.0}"
                    }
                  }
                }
              },
              "confirmdialog": {
                "icon": {
                  "size": "2rem",
                  "color": "{overlay.modal.color}"
                },
                "content": {
                  "gap": "1rem"
                }
              },
              "confirmpopup": {
                "root": {
                  "background": "{overlay.popover.background}",
                  "borderColor": "{overlay.popover.border.color}",
                  "color": "{overlay.popover.color}",
                  "borderRadius": "{overlay.popover.border.radius}",
                  "shadow": "{overlay.popover.shadow}",
                  "gutter": "10px",
                  "arrowOffset": "1.25rem"
                },
                "content": {
                  "padding": "{overlay.popover.padding}",
                  "gap": "1rem"
                },
                "icon": {
                  "size": "1.5rem",
                  "color": "{overlay.popover.color}"
                },
                "footer": {
                  "gap": "0.5rem",
                  "padding": "0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}"
                }
              },
              "contextmenu": {
                "root": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{content.color}",
                  "borderRadius": "{content.border.radius}",
                  "shadow": "{overlay.navigation.shadow}",
                  "transitionDuration": "{transition.duration}"
                },
                "list": {
                  "padding": "{navigation.list.padding}",
                  "gap": "{navigation.list.gap}"
                },
                "item": {
                  "focusBackground": "{navigation.item.focus.background}",
                  "activeBackground": "{navigation.item.active.background}",
                  "color": "{navigation.item.color}",
                  "focusColor": "{navigation.item.focus.color}",
                  "activeColor": "{navigation.item.active.color}",
                  "padding": "{navigation.item.padding}",
                  "borderRadius": "{navigation.item.border.radius}",
                  "gap": "{navigation.item.gap}",
                  "icon": {
                    "color": "{navigation.item.icon.color}",
                    "focusColor": "{navigation.item.icon.focus.color}",
                    "activeColor": "{navigation.item.icon.active.color}"
                  }
                },
                "submenu": {
                  "mobileIndent": "1rem"
                },
                "submenuIcon": {
                  "size": "{navigation.submenu.icon.size}",
                  "color": "{navigation.submenu.icon.color}",
                  "focusColor": "{navigation.submenu.icon.focus.color}",
                  "activeColor": "{navigation.submenu.icon.active.color}"
                },
                "separator": {
                  "borderColor": "{content.border.color}"
                }
              },
              "datatable": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "header": {
                  "background": "{content.background}",
                  "borderColor": "{datatable.border.color}",
                  "color": "{content.color}",
                  "borderWidth": "0 0 1px 0",
                  "padding": "0.75rem 1rem",
                  "sm": {
                    "padding": "0.375rem 0.5rem"
                  },
                  "lg": {
                    "padding": "1rem 1.25rem"
                  }
                },
                "headerCell": {
                  "background": "{content.background}",
                  "hoverBackground": "{content.hover.background}",
                  "selectedBackground": "{highlight.background}",
                  "borderColor": "{datatable.border.color}",
                  "color": "{content.color}",
                  "hoverColor": "{content.hover.color}",
                  "selectedColor": "{highlight.color}",
                  "gap": "0.5rem",
                  "padding": "0.75rem 1rem",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "-1px",
                    "shadow": "{focus.ring.shadow}"
                  },
                  "sm": {
                    "padding": "0.375rem 0.5rem"
                  },
                  "lg": {
                    "padding": "1rem 1.25rem"
                  }
                },
                "columnTitle": {
                  "fontWeight": "600"
                },
                "row": {
                  "background": "{content.background}",
                  "hoverBackground": "{content.hover.background}",
                  "selectedBackground": "{highlight.background}",
                  "color": "{content.color}",
                  "hoverColor": "{content.hover.color}",
                  "selectedColor": "{highlight.color}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "-1px",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "bodyCell": {
                  "borderColor": "{datatable.border.color}",
                  "padding": "0.75rem 1rem",
                  "sm": {
                    "padding": "0.375rem 0.5rem"
                  },
                  "lg": {
                    "padding": "1rem 1.25rem"
                  }
                },
                "footerCell": {
                  "background": "{content.background}",
                  "borderColor": "{datatable.border.color}",
                  "color": "{content.color}",
                  "padding": "0.75rem 1rem",
                  "sm": {
                    "padding": "0.375rem 0.5rem"
                  },
                  "lg": {
                    "padding": "1rem 1.25rem"
                  }
                },
                "columnFooter": {
                  "fontWeight": "600"
                },
                "footer": {
                  "background": "{content.background}",
                  "borderColor": "{datatable.border.color}",
                  "color": "{content.color}",
                  "borderWidth": "0 0 1px 0",
                  "padding": "0.75rem 1rem",
                  "sm": {
                    "padding": "0.375rem 0.5rem"
                  },
                  "lg": {
                    "padding": "1rem 1.25rem"
                  }
                },
                "dropPoint": {
                  "color": "{primary.color}"
                },
                "columnResizer": {
                  "width": "0.5rem"
                },
                "resizeIndicator": {
                  "width": "1px",
                  "color": "{primary.color}"
                },
                "sortIcon": {
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.hover.muted.color}",
                  "size": "0.875rem"
                },
                "loadingIcon": {
                  "size": "2rem"
                },
                "rowToggleButton": {
                  "hoverBackground": "{content.hover.background}",
                  "selectedHoverBackground": "{content.background}",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "selectedHoverColor": "{primary.color}",
                  "size": "1.75rem",
                  "borderRadius": "50%",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "filter": {
                  "inlineGap": "0.5rem",
                  "overlaySelect": {
                    "background": "{overlay.select.background}",
                    "borderColor": "{overlay.select.border.color}",
                    "borderRadius": "{overlay.select.border.radius}",
                    "color": "{overlay.select.color}",
                    "shadow": "{overlay.select.shadow}"
                  },
                  "overlayPopover": {
                    "background": "{overlay.popover.background}",
                    "borderColor": "{overlay.popover.border.color}",
                    "borderRadius": "{overlay.popover.border.radius}",
                    "color": "{overlay.popover.color}",
                    "shadow": "{overlay.popover.shadow}",
                    "padding": "{overlay.popover.padding}",
                    "gap": "0.5rem"
                  },
                  "rule": {
                    "borderColor": "{content.border.color}"
                  },
                  "constraintList": {
                    "padding": "{list.padding}",
                    "gap": "{list.gap}"
                  },
                  "constraint": {
                    "focusBackground": "{list.option.focus.background}",
                    "selectedBackground": "{list.option.selected.background}",
                    "selectedFocusBackground": "{list.option.selected.focus.background}",
                    "color": "{list.option.color}",
                    "focusColor": "{list.option.focus.color}",
                    "selectedColor": "{list.option.selected.color}",
                    "selectedFocusColor": "{list.option.selected.focus.color}",
                    "separator": {
                      "borderColor": "{content.border.color}"
                    },
                    "padding": "{list.option.padding}",
                    "borderRadius": "{list.option.border.radius}"
                  }
                },
                "paginatorTop": {
                  "borderColor": "{datatable.border.color}",
                  "borderWidth": "0 0 1px 0"
                },
                "paginatorBottom": {
                  "borderColor": "{datatable.border.color}",
                  "borderWidth": "0 0 1px 0"
                },
                "colorScheme": {
                  "light": {
                    "root": {
                      "borderColor": "{content.border.color}"
                    },
                    "row": {
                      "stripedBackground": "{surface.50}"
                    },
                    "bodyCell": {
                      "selectedBorderColor": "{primary.100}"
                    }
                  },
                  "dark": {
                    "root": {
                      "borderColor": "{surface.800}"
                    },
                    "row": {
                      "stripedBackground": "{surface.950}"
                    },
                    "bodyCell": {
                      "selectedBorderColor": "{primary.900}"
                    }
                  }
                },
                "css": "\n    .p-datatable-mask.p-overlay-mask {\n        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));\n    }\n"
              },
              "dataview": {
                "root": {
                  "borderColor": "transparent",
                  "borderWidth": "0",
                  "borderRadius": "0",
                  "padding": "0"
                },
                "header": {
                  "background": "{content.background}",
                  "color": "{content.color}",
                  "borderColor": "{content.border.color}",
                  "borderWidth": "0 0 1px 0",
                  "padding": "0.75rem 1rem",
                  "borderRadius": "0"
                },
                "content": {
                  "background": "{content.background}",
                  "color": "{content.color}",
                  "borderColor": "transparent",
                  "borderWidth": "0",
                  "padding": "0",
                  "borderRadius": "0"
                },
                "footer": {
                  "background": "{content.background}",
                  "color": "{content.color}",
                  "borderColor": "{content.border.color}",
                  "borderWidth": "1px 0 0 0",
                  "padding": "0.75rem 1rem",
                  "borderRadius": "0"
                },
                "paginatorTop": {
                  "borderColor": "{content.border.color}",
                  "borderWidth": "0 0 1px 0"
                },
                "paginatorBottom": {
                  "borderColor": "{content.border.color}",
                  "borderWidth": "1px 0 0 0"
                }
              },
              "datepicker": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "panel": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{content.color}",
                  "borderRadius": "{content.border.radius}",
                  "shadow": "{overlay.popover.shadow}",
                  "padding": "{overlay.popover.padding}"
                },
                "header": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{content.color}",
                  "padding": "0 0 0.5rem 0"
                },
                "title": {
                  "gap": "0.5rem",
                  "fontWeight": "500"
                },
                "dropdown": {
                  "width": "2.5rem",
                  "sm": {
                    "width": "2rem"
                  },
                  "lg": {
                    "width": "3rem"
                  },
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.border.color}",
                  "activeBorderColor": "{form.field.border.color}",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "inputIcon": {
                  "color": "{form.field.icon.color}"
                },
                "selectMonth": {
                  "hoverBackground": "{content.hover.background}",
                  "color": "{content.color}",
                  "hoverColor": "{content.hover.color}",
                  "padding": "0.25rem 0.5rem",
                  "borderRadius": "{content.border.radius}"
                },
                "selectYear": {
                  "hoverBackground": "{content.hover.background}",
                  "color": "{content.color}",
                  "hoverColor": "{content.hover.color}",
                  "padding": "0.25rem 0.5rem",
                  "borderRadius": "{content.border.radius}"
                },
                "group": {
                  "borderColor": "{content.border.color}",
                  "gap": "{overlay.popover.padding}"
                },
                "dayView": {
                  "margin": "0.5rem 0 0 0"
                },
                "weekDay": {
                  "padding": "0.25rem",
                  "fontWeight": "500",
                  "color": "{content.color}"
                },
                "date": {
                  "hoverBackground": "{content.hover.background}",
                  "selectedBackground": "{primary.color}",
                  "rangeSelectedBackground": "{highlight.background}",
                  "color": "{content.color}",
                  "hoverColor": "{content.hover.color}",
                  "selectedColor": "{primary.contrast.color}",
                  "rangeSelectedColor": "{highlight.color}",
                  "width": "2rem",
                  "height": "2rem",
                  "borderRadius": "50%",
                  "padding": "0.25rem",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "monthView": {
                  "margin": "0.5rem 0 0 0"
                },
                "month": {
                  "padding": "0.375rem",
                  "borderRadius": "{content.border.radius}"
                },
                "yearView": {
                  "margin": "0.5rem 0 0 0"
                },
                "year": {
                  "padding": "0.375rem",
                  "borderRadius": "{content.border.radius}"
                },
                "buttonbar": {
                  "padding": "0.5rem 0 0 0",
                  "borderColor": "{content.border.color}"
                },
                "timePicker": {
                  "padding": "0.5rem 0 0 0",
                  "borderColor": "{content.border.color}",
                  "gap": "0.5rem",
                  "buttonGap": "0.25rem"
                },
                "colorScheme": {
                  "light": {
                    "dropdown": {
                      "background": "{surface.100}",
                      "hoverBackground": "{surface.200}",
                      "activeBackground": "{surface.300}",
                      "color": "{surface.600}",
                      "hoverColor": "{surface.700}",
                      "activeColor": "{surface.800}"
                    },
                    "today": {
                      "background": "{surface.200}",
                      "color": "{surface.900}"
                    }
                  },
                  "dark": {
                    "dropdown": {
                      "background": "{surface.800}",
                      "hoverBackground": "{surface.700}",
                      "activeBackground": "{surface.600}",
                      "color": "{surface.300}",
                      "hoverColor": "{surface.200}",
                      "activeColor": "{surface.100}"
                    },
                    "today": {
                      "background": "{surface.700}",
                      "color": "{surface.0}"
                    }
                  }
                }
              },
              "dialog": {
                "root": {
                  "background": "{overlay.modal.background}",
                  "borderColor": "{overlay.modal.border.color}",
                  "color": "{overlay.modal.color}",
                  "borderRadius": "{overlay.modal.border.radius}",
                  "shadow": "{overlay.modal.shadow}"
                },
                "header": {
                  "padding": "{overlay.modal.padding}",
                  "gap": "0.5rem"
                },
                "title": {
                  "fontSize": "1.25rem",
                  "fontWeight": "600"
                },
                "content": {
                  "padding": "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"
                },
                "footer": {
                  "padding": "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}",
                  "gap": "0.5rem"
                }
              },
              "divider": {
                "root": {
                  "borderColor": "{content.border.color}"
                },
                "content": {
                  "background": "{content.background}",
                  "color": "{text.color}"
                },
                "horizontal": {
                  "margin": "1rem 0",
                  "padding": "0 1rem",
                  "content": {
                    "padding": "0 0.5rem"
                  }
                },
                "vertical": {
                  "margin": "0 1rem",
                  "padding": "0.5rem 0",
                  "content": {
                    "padding": "0.5rem 0"
                  }
                }
              },
              "dock": {
                "root": {
                  "background": "rgba(255, 255, 255, 0.1)",
                  "borderColor": "rgba(255, 255, 255, 0.2)",
                  "padding": "0.5rem",
                  "borderRadius": "{border.radius.xl}"
                },
                "item": {
                  "borderRadius": "{content.border.radius}",
                  "padding": "0.5rem",
                  "size": "3rem",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                }
              },
              "drawer": {
                "root": {
                  "background": "{overlay.modal.background}",
                  "borderColor": "{overlay.modal.border.color}",
                  "color": "{overlay.modal.color}",
                  "shadow": "{overlay.modal.shadow}"
                },
                "header": {
                  "padding": "{overlay.modal.padding}"
                },
                "title": {
                  "fontSize": "1.5rem",
                  "fontWeight": "600"
                },
                "content": {
                  "padding": "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"
                },
                "footer": {
                  "padding": "{overlay.modal.padding}"
                }
              },
              "editor": {
                "toolbar": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "borderRadius": "{content.border.radius}"
                },
                "toolbarItem": {
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "activeColor": "{primary.color}"
                },
                "overlay": {
                  "background": "{overlay.select.background}",
                  "borderColor": "{overlay.select.border.color}",
                  "borderRadius": "{overlay.select.border.radius}",
                  "color": "{overlay.select.color}",
                  "shadow": "{overlay.select.shadow}",
                  "padding": "{list.padding}"
                },
                "overlayOption": {
                  "focusBackground": "{list.option.focus.background}",
                  "color": "{list.option.color}",
                  "focusColor": "{list.option.focus.color}",
                  "padding": "{list.option.padding}",
                  "borderRadius": "{list.option.border.radius}"
                },
                "content": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{content.color}",
                  "borderRadius": "{content.border.radius}"
                }
              },
              "fieldset": {
                "root": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "color": "{content.color}",
                  "padding": "0 1.125rem 1.125rem 1.125rem",
                  "transitionDuration": "{transition.duration}"
                },
                "legend": {
                  "background": "{content.background}",
                  "hoverBackground": "{content.hover.background}",
                  "color": "{content.color}",
                  "hoverColor": "{content.hover.color}",
                  "borderRadius": "{content.border.radius}",
                  "borderWidth": "1px",
                  "borderColor": "transparent",
                  "padding": "0.5rem 0.75rem",
                  "gap": "0.5rem",
                  "fontWeight": "600",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "toggleIcon": {
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.hover.muted.color}"
                },
                "content": {
                  "padding": "0"
                }
              },
              "fileupload": {
                "root": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{content.color}",
                  "borderRadius": "{content.border.radius}",
                  "transitionDuration": "{transition.duration}"
                },
                "header": {
                  "background": "transparent",
                  "color": "{text.color}",
                  "padding": "1.125rem",
                  "borderColor": "unset",
                  "borderWidth": "0",
                  "borderRadius": "0",
                  "gap": "0.5rem"
                },
                "content": {
                  "highlightBorderColor": "{primary.color}",
                  "padding": "0 1.125rem 1.125rem 1.125rem",
                  "gap": "1rem"
                },
                "file": {
                  "padding": "1rem",
                  "gap": "1rem",
                  "borderColor": "{content.border.color}",
                  "info": {
                    "gap": "0.5rem"
                  }
                },
                "fileList": {
                  "gap": "0.5rem"
                },
                "progressbar": {
                  "height": "0.25rem"
                },
                "basic": {
                  "gap": "0.5rem"
                }
              },
              "floatlabel": {
                "root": {
                  "color": "{form.field.float.label.color}",
                  "focusColor": "{form.field.float.label.focus.color}",
                  "activeColor": "{form.field.float.label.active.color}",
                  "invalidColor": "{form.field.float.label.invalid.color}",
                  "transitionDuration": "0.2s",
                  "positionX": "{form.field.padding.x}",
                  "positionY": "{form.field.padding.y}",
                  "fontWeight": "500",
                  "active": {
                    "fontSize": "0.75rem",
                    "fontWeight": "400"
                  }
                },
                "over": {
                  "active": {
                    "top": "-1.25rem"
                  }
                },
                "in": {
                  "input": {
                    "paddingTop": "1.5rem",
                    "paddingBottom": "{form.field.padding.y}"
                  },
                  "active": {
                    "top": "{form.field.padding.y}"
                  }
                },
                "on": {
                  "borderRadius": "{border.radius.xs}",
                  "active": {
                    "background": "{form.field.background}",
                    "padding": "0 0.125rem"
                  }
                }
              },
              "galleria": {
                "root": {
                  "borderWidth": "1px",
                  "borderColor": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "transitionDuration": "{transition.duration}"
                },
                "navButton": {
                  "background": "rgba(255, 255, 255, 0.1)",
                  "hoverBackground": "rgba(255, 255, 255, 0.2)",
                  "color": "{surface.100}",
                  "hoverColor": "{surface.0}",
                  "size": "3rem",
                  "gutter": "0.5rem",
                  "prev": {
                    "borderRadius": "50%"
                  },
                  "next": {
                    "borderRadius": "50%"
                  },
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "navIcon": {
                  "size": "1.5rem"
                },
                "thumbnailsContent": {
                  "background": "{content.background}",
                  "padding": "1rem 0.25rem"
                },
                "thumbnailNavButton": {
                  "size": "2rem",
                  "borderRadius": "{content.border.radius}",
                  "gutter": "0.5rem",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "thumbnailNavButtonIcon": {
                  "size": "1rem"
                },
                "caption": {
                  "background": "rgba(0, 0, 0, 0.5)",
                  "color": "{surface.100}",
                  "padding": "1rem"
                },
                "indicatorList": {
                  "gap": "0.5rem",
                  "padding": "1rem"
                },
                "indicatorButton": {
                  "width": "1rem",
                  "height": "1rem",
                  "activeBackground": "{primary.color}",
                  "borderRadius": "50%",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "insetIndicatorList": {
                  "background": "rgba(0, 0, 0, 0.5)"
                },
                "insetIndicatorButton": {
                  "background": "rgba(255, 255, 255, 0.4)",
                  "hoverBackground": "rgba(255, 255, 255, 0.6)",
                  "activeBackground": "rgba(255, 255, 255, 0.9)"
                },
                "closeButton": {
                  "size": "3rem",
                  "gutter": "0.5rem",
                  "background": "rgba(255, 255, 255, 0.1)",
                  "hoverBackground": "rgba(255, 255, 255, 0.2)",
                  "color": "{surface.50}",
                  "hoverColor": "{surface.0}",
                  "borderRadius": "50%",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "closeButtonIcon": {
                  "size": "1.5rem"
                },
                "colorScheme": {
                  "light": {
                    "thumbnailNavButton": {
                      "hoverBackground": "{surface.100}",
                      "color": "{surface.600}",
                      "hoverColor": "{surface.700}"
                    },
                    "indicatorButton": {
                      "background": "{surface.200}",
                      "hoverBackground": "{surface.300}"
                    }
                  },
                  "dark": {
                    "thumbnailNavButton": {
                      "hoverBackground": "{surface.700}",
                      "color": "{surface.400}",
                      "hoverColor": "{surface.0}"
                    },
                    "indicatorButton": {
                      "background": "{surface.700}",
                      "hoverBackground": "{surface.600}"
                    }
                  }
                }
              },
              "iconfield": {
                "icon": {
                  "color": "{form.field.icon.color}"
                }
              },
              "iftalabel": {
                "root": {
                  "color": "{form.field.float.label.color}",
                  "focusColor": "{form.field.float.label.focus.color}",
                  "invalidColor": "{form.field.float.label.invalid.color}",
                  "transitionDuration": "0.2s",
                  "positionX": "{form.field.padding.x}",
                  "top": "{form.field.padding.y}",
                  "fontSize": "0.75rem",
                  "fontWeight": "400"
                },
                "input": {
                  "paddingTop": "1.5rem",
                  "paddingBottom": "{form.field.padding.y}"
                }
              },
              "image": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "preview": {
                  "icon": {
                    "size": "1.5rem"
                  },
                  "mask": {
                    "background": "{mask.background}",
                    "color": "{mask.color}"
                  }
                },
                "toolbar": {
                  "position": {
                    "left": "auto",
                    "right": "1rem",
                    "top": "1rem",
                    "bottom": "auto"
                  },
                  "blur": "8px",
                  "background": "rgba(255,255,255,0.1)",
                  "borderColor": "rgba(255,255,255,0.2)",
                  "borderWidth": "1px",
                  "borderRadius": "30px",
                  "padding": ".5rem",
                  "gap": "0.5rem"
                },
                "action": {
                  "hoverBackground": "rgba(255,255,255,0.1)",
                  "color": "{surface.50}",
                  "hoverColor": "{surface.0}",
                  "size": "3rem",
                  "iconSize": "1.5rem",
                  "borderRadius": "50%",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                }
              },
              "imagecompare": {
                "handle": {
                  "size": "15px",
                  "hoverSize": "30px",
                  "background": "rgba(255,255,255,0.3)",
                  "hoverBackground": "rgba(255,255,255,0.3)",
                  "borderColor": "unset",
                  "hoverBorderColor": "unset",
                  "borderWidth": "0",
                  "borderRadius": "50%",
                  "transitionDuration": "{transition.duration}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "rgba(255,255,255,0.3)",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                }
              },
              "inlinemessage": {
                "root": {
                  "padding": "{form.field.padding.y} {form.field.padding.x}",
                  "borderRadius": "{content.border.radius}",
                  "gap": "0.5rem"
                },
                "text": {
                  "fontWeight": "500"
                },
                "icon": {
                  "size": "1rem"
                },
                "colorScheme": {
                  "light": {
                    "info": {
                      "background": "color-mix(in srgb, {blue.50}, transparent 5%)",
                      "borderColor": "{blue.200}",
                      "color": "{blue.600}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"
                    },
                    "success": {
                      "background": "color-mix(in srgb, {green.50}, transparent 5%)",
                      "borderColor": "{green.200}",
                      "color": "{green.600}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"
                    },
                    "warn": {
                      "background": "color-mix(in srgb,{yellow.50}, transparent 5%)",
                      "borderColor": "{yellow.200}",
                      "color": "{yellow.600}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"
                    },
                    "error": {
                      "background": "color-mix(in srgb, {red.50}, transparent 5%)",
                      "borderColor": "{red.200}",
                      "color": "{red.600}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"
                    },
                    "secondary": {
                      "background": "{surface.100}",
                      "borderColor": "{surface.200}",
                      "color": "{surface.600}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"
                    },
                    "contrast": {
                      "background": "{surface.900}",
                      "borderColor": "{surface.950}",
                      "color": "{surface.50}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"
                    }
                  },
                  "dark": {
                    "info": {
                      "background": "color-mix(in srgb, {blue.500}, transparent 84%)",
                      "borderColor": "color-mix(in srgb, {blue.700}, transparent 64%)",
                      "color": "{blue.500}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"
                    },
                    "success": {
                      "background": "color-mix(in srgb, {green.500}, transparent 84%)",
                      "borderColor": "color-mix(in srgb, {green.700}, transparent 64%)",
                      "color": "{green.500}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"
                    },
                    "warn": {
                      "background": "color-mix(in srgb, {yellow.500}, transparent 84%)",
                      "borderColor": "color-mix(in srgb, {yellow.700}, transparent 64%)",
                      "color": "{yellow.500}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"
                    },
                    "error": {
                      "background": "color-mix(in srgb, {red.500}, transparent 84%)",
                      "borderColor": "color-mix(in srgb, {red.700}, transparent 64%)",
                      "color": "{red.500}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"
                    },
                    "secondary": {
                      "background": "{surface.800}",
                      "borderColor": "{surface.700}",
                      "color": "{surface.300}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"
                    },
                    "contrast": {
                      "background": "{surface.0}",
                      "borderColor": "{surface.100}",
                      "color": "{surface.950}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"
                    }
                  }
                }
              },
              "inplace": {
                "root": {
                  "padding": "{form.field.padding.y} {form.field.padding.x}",
                  "borderRadius": "{content.border.radius}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  },
                  "transitionDuration": "{transition.duration}"
                },
                "display": {
                  "hoverBackground": "{content.hover.background}",
                  "hoverColor": "{content.hover.color}"
                }
              },
              "inputchips": {
                "root": {
                  "background": "{form.field.background}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "filledBackground": "{form.field.filled.background}",
                  "filledFocusBackground": "{form.field.filled.focus.background}",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.hover.border.color}",
                  "focusBorderColor": "{form.field.focus.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "color": "{form.field.color}",
                  "disabledColor": "{form.field.disabled.color}",
                  "placeholderColor": "{form.field.placeholder.color}",
                  "shadow": "{form.field.shadow}",
                  "paddingX": "{form.field.padding.x}",
                  "paddingY": "{form.field.padding.y}",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{form.field.focus.ring.width}",
                    "style": "{form.field.focus.ring.style}",
                    "color": "{form.field.focus.ring.color}",
                    "offset": "{form.field.focus.ring.offset}",
                    "shadow": "{form.field.focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}"
                },
                "chip": {
                  "borderRadius": "{border.radius.sm}"
                },
                "colorScheme": {
                  "light": {
                    "chip": {
                      "focusBackground": "{surface.200}",
                      "color": "{surface.800}"
                    }
                  },
                  "dark": {
                    "chip": {
                      "focusBackground": "{surface.700}",
                      "color": "{surface.0}"
                    }
                  }
                }
              },
              "inputgroup": {
                "addon": {
                  "background": "{form.field.background}",
                  "borderColor": "{form.field.border.color}",
                  "color": "{form.field.icon.color}",
                  "borderRadius": "{form.field.border.radius}",
                  "padding": "0.5rem",
                  "minWidth": "2.5rem"
                }
              },
              "inputnumber": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "button": {
                  "width": "2.5rem",
                  "borderRadius": "{form.field.border.radius}",
                  "verticalPadding": "{form.field.padding.y}"
                },
                "colorScheme": {
                  "light": {
                    "button": {
                      "background": "transparent",
                      "hoverBackground": "{surface.100}",
                      "activeBackground": "{surface.200}",
                      "borderColor": "{form.field.border.color}",
                      "hoverBorderColor": "{form.field.border.color}",
                      "activeBorderColor": "{form.field.border.color}",
                      "color": "{surface.400}",
                      "hoverColor": "{surface.500}",
                      "activeColor": "{surface.600}"
                    }
                  },
                  "dark": {
                    "button": {
                      "background": "transparent",
                      "hoverBackground": "{surface.800}",
                      "activeBackground": "{surface.700}",
                      "borderColor": "{form.field.border.color}",
                      "hoverBorderColor": "{form.field.border.color}",
                      "activeBorderColor": "{form.field.border.color}",
                      "color": "{surface.400}",
                      "hoverColor": "{surface.300}",
                      "activeColor": "{surface.200}"
                    }
                  }
                }
              },
              "inputotp": {
                "root": {
                  "gap": "0.5rem"
                },
                "input": {
                  "width": "2.5rem",
                  "sm": {
                    "width": "2rem"
                  },
                  "lg": {
                    "width": "3rem"
                  }
                }
              },
              "inputtext": {
                "root": {
                  "background": "{form.field.background}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "filledBackground": "{form.field.filled.background}",
                  "filledHoverBackground": "{form.field.filled.hover.background}",
                  "filledFocusBackground": "{form.field.filled.focus.background}",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.hover.border.color}",
                  "focusBorderColor": "{form.field.focus.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "color": "{form.field.color}",
                  "disabledColor": "{form.field.disabled.color}",
                  "placeholderColor": "{form.field.placeholder.color}",
                  "invalidPlaceholderColor": "{form.field.invalid.placeholder.color}",
                  "shadow": "{form.field.shadow}",
                  "paddingX": "{form.field.padding.x}",
                  "paddingY": "{form.field.padding.y}",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{form.field.focus.ring.width}",
                    "style": "{form.field.focus.ring.style}",
                    "color": "{form.field.focus.ring.color}",
                    "offset": "{form.field.focus.ring.offset}",
                    "shadow": "{form.field.focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}",
                  "sm": {
                    "fontSize": "{form.field.sm.font.size}",
                    "paddingX": "{form.field.sm.padding.x}",
                    "paddingY": "{form.field.sm.padding.y}"
                  },
                  "lg": {
                    "fontSize": "{form.field.lg.font.size}",
                    "paddingX": "{form.field.lg.padding.x}",
                    "paddingY": "{form.field.lg.padding.y}"
                  }
                }
              },
              "knob": {
                "root": {
                  "transitionDuration": "{transition.duration}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "value": {
                  "background": "{primary.color}"
                },
                "range": {
                  "background": "{content.border.color}"
                },
                "text": {
                  "color": "{text.muted.color}"
                }
              },
              "listbox": {
                "root": {
                  "background": "{form.field.background}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "borderColor": "{form.field.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "color": "{form.field.color}",
                  "disabledColor": "{form.field.disabled.color}",
                  "shadow": "{form.field.shadow}",
                  "borderRadius": "{form.field.border.radius}",
                  "transitionDuration": "{form.field.transition.duration}"
                },
                "list": {
                  "padding": "{list.padding}",
                  "gap": "{list.gap}",
                  "header": {
                    "padding": "{list.header.padding}"
                  }
                },
                "option": {
                  "focusBackground": "{list.option.focus.background}",
                  "selectedBackground": "{list.option.selected.background}",
                  "selectedFocusBackground": "{list.option.selected.focus.background}",
                  "color": "{list.option.color}",
                  "focusColor": "{list.option.focus.color}",
                  "selectedColor": "{list.option.selected.color}",
                  "selectedFocusColor": "{list.option.selected.focus.color}",
                  "padding": "{list.option.padding}",
                  "borderRadius": "{list.option.border.radius}"
                },
                "optionGroup": {
                  "background": "{list.option.group.background}",
                  "color": "{list.option.group.color}",
                  "fontWeight": "{list.option.group.font.weight}",
                  "padding": "{list.option.group.padding}"
                },
                "checkmark": {
                  "color": "{list.option.color}",
                  "gutterStart": "-0.375rem",
                  "gutterEnd": "0.375rem"
                },
                "emptyMessage": {
                  "padding": "{list.option.padding}"
                },
                "colorScheme": {
                  "light": {
                    "option": {
                      "stripedBackground": "{surface.50}"
                    }
                  },
                  "dark": {
                    "option": {
                      "stripedBackground": "{surface.900}"
                    }
                  }
                }
              },
              "megamenu": {
                "root": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "color": "{content.color}",
                  "gap": "0.5rem",
                  "verticalOrientation": {
                    "padding": "{navigation.list.padding}",
                    "gap": "{navigation.list.gap}"
                  },
                  "horizontalOrientation": {
                    "padding": "0.5rem 0.75rem",
                    "gap": "0.5rem"
                  },
                  "transitionDuration": "{transition.duration}"
                },
                "baseItem": {
                  "borderRadius": "{content.border.radius}",
                  "padding": "{navigation.item.padding}"
                },
                "item": {
                  "focusBackground": "{navigation.item.focus.background}",
                  "activeBackground": "{navigation.item.active.background}",
                  "color": "{navigation.item.color}",
                  "focusColor": "{navigation.item.focus.color}",
                  "activeColor": "{navigation.item.active.color}",
                  "padding": "{navigation.item.padding}",
                  "borderRadius": "{navigation.item.border.radius}",
                  "gap": "{navigation.item.gap}",
                  "icon": {
                    "color": "{navigation.item.icon.color}",
                    "focusColor": "{navigation.item.icon.focus.color}",
                    "activeColor": "{navigation.item.icon.active.color}"
                  }
                },
                "overlay": {
                  "padding": "0",
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "color": "{content.color}",
                  "shadow": "{overlay.navigation.shadow}",
                  "gap": "0.5rem"
                },
                "submenu": {
                  "padding": "{navigation.list.padding}",
                  "gap": "{navigation.list.gap}"
                },
                "submenuLabel": {
                  "padding": "{navigation.submenu.label.padding}",
                  "fontWeight": "{navigation.submenu.label.font.weight}",
                  "background": "{navigation.submenu.label.background}",
                  "color": "{navigation.submenu.label.color}"
                },
                "submenuIcon": {
                  "size": "{navigation.submenu.icon.size}",
                  "color": "{navigation.submenu.icon.color}",
                  "focusColor": "{navigation.submenu.icon.focus.color}",
                  "activeColor": "{navigation.submenu.icon.active.color}"
                },
                "separator": {
                  "borderColor": "{content.border.color}"
                },
                "mobileButton": {
                  "borderRadius": "50%",
                  "size": "1.75rem",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.hover.muted.color}",
                  "hoverBackground": "{content.hover.background}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                }
              },
              "menu": {
                "root": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{content.color}",
                  "borderRadius": "{content.border.radius}",
                  "shadow": "{overlay.navigation.shadow}",
                  "transitionDuration": "{transition.duration}"
                },
                "list": {
                  "padding": "{navigation.list.padding}",
                  "gap": "{navigation.list.gap}"
                },
                "item": {
                  "focusBackground": "{navigation.item.focus.background}",
                  "color": "{navigation.item.color}",
                  "focusColor": "{navigation.item.focus.color}",
                  "padding": "{navigation.item.padding}",
                  "borderRadius": "{navigation.item.border.radius}",
                  "gap": "{navigation.item.gap}",
                  "icon": {
                    "color": "{navigation.item.icon.color}",
                    "focusColor": "{navigation.item.icon.focus.color}"
                  }
                },
                "submenuLabel": {
                  "padding": "{navigation.submenu.label.padding}",
                  "fontWeight": "{navigation.submenu.label.font.weight}",
                  "background": "{navigation.submenu.label.background}",
                  "color": "{navigation.submenu.label.color}"
                },
                "separator": {
                  "borderColor": "{content.border.color}"
                }
              },
              "menubar": {
                "root": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "color": "{content.color}",
                  "gap": "0.5rem",
                  "padding": "0.5rem 0.75rem",
                  "transitionDuration": "{transition.duration}"
                },
                "baseItem": {
                  "borderRadius": "{content.border.radius}",
                  "padding": "{navigation.item.padding}"
                },
                "item": {
                  "focusBackground": "{navigation.item.focus.background}",
                  "activeBackground": "{navigation.item.active.background}",
                  "color": "{navigation.item.color}",
                  "focusColor": "{navigation.item.focus.color}",
                  "activeColor": "{navigation.item.active.color}",
                  "padding": "{navigation.item.padding}",
                  "borderRadius": "{navigation.item.border.radius}",
                  "gap": "{navigation.item.gap}",
                  "icon": {
                    "color": "{navigation.item.icon.color}",
                    "focusColor": "{navigation.item.icon.focus.color}",
                    "activeColor": "{navigation.item.icon.active.color}"
                  }
                },
                "submenu": {
                  "padding": "{navigation.list.padding}",
                  "gap": "{navigation.list.gap}",
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "shadow": "{overlay.navigation.shadow}",
                  "mobileIndent": "1rem",
                  "icon": {
                    "size": "{navigation.submenu.icon.size}",
                    "color": "{navigation.submenu.icon.color}",
                    "focusColor": "{navigation.submenu.icon.focus.color}",
                    "activeColor": "{navigation.submenu.icon.active.color}"
                  }
                },
                "separator": {
                  "borderColor": "{content.border.color}"
                },
                "mobileButton": {
                  "borderRadius": "50%",
                  "size": "1.75rem",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.hover.muted.color}",
                  "hoverBackground": "{content.hover.background}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                }
              },
              "message": {
                "root": {
                  "borderRadius": "{content.border.radius}",
                  "borderWidth": "1px",
                  "transitionDuration": "{transition.duration}"
                },
                "content": {
                  "padding": "0.5rem 0.75rem",
                  "gap": "0.5rem",
                  "sm": {
                    "padding": "0.375rem 0.625rem"
                  },
                  "lg": {
                    "padding": "0.625rem 0.875rem"
                  }
                },
                "text": {
                  "fontSize": "1rem",
                  "fontWeight": "500",
                  "sm": {
                    "fontSize": "0.875rem"
                  },
                  "lg": {
                    "fontSize": "1.125rem"
                  }
                },
                "icon": {
                  "size": "1.125rem",
                  "sm": {
                    "size": "1rem"
                  },
                  "lg": {
                    "size": "1.25rem"
                  }
                },
                "closeButton": {
                  "width": "1.75rem",
                  "height": "1.75rem",
                  "borderRadius": "50%",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "offset": "{focus.ring.offset}"
                  }
                },
                "closeIcon": {
                  "size": "1rem",
                  "sm": {
                    "size": "0.875rem"
                  },
                  "lg": {
                    "size": "1.125rem"
                  }
                },
                "outlined": {
                  "root": {
                    "borderWidth": "1px"
                  }
                },
                "simple": {
                  "content": {
                    "padding": "0"
                  }
                },
                "colorScheme": {
                  "light": {
                    "info": {
                      "background": "color-mix(in srgb, {blue.50}, transparent 5%)",
                      "borderColor": "{blue.200}",
                      "color": "{blue.600}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{blue.100}",
                        "focusRing": {
                          "color": "{blue.600}",
                          "shadow": "none"
                        }
                      },
                      "outlined": {
                        "color": "{blue.600}",
                        "borderColor": "{blue.600}"
                      },
                      "simple": {
                        "color": "{blue.600}"
                      }
                    },
                    "success": {
                      "background": "color-mix(in srgb, {green.50}, transparent 5%)",
                      "borderColor": "{green.200}",
                      "color": "{green.600}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{green.100}",
                        "focusRing": {
                          "color": "{green.600}",
                          "shadow": "none"
                        }
                      },
                      "outlined": {
                        "color": "{green.600}",
                        "borderColor": "{green.600}"
                      },
                      "simple": {
                        "color": "{green.600}"
                      }
                    },
                    "warn": {
                      "background": "color-mix(in srgb,{yellow.50}, transparent 5%)",
                      "borderColor": "{yellow.200}",
                      "color": "{yellow.600}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{yellow.100}",
                        "focusRing": {
                          "color": "{yellow.600}",
                          "shadow": "none"
                        }
                      },
                      "outlined": {
                        "color": "{yellow.600}",
                        "borderColor": "{yellow.600}"
                      },
                      "simple": {
                        "color": "{yellow.600}"
                      }
                    },
                    "error": {
                      "background": "color-mix(in srgb, {red.50}, transparent 5%)",
                      "borderColor": "{red.200}",
                      "color": "{red.600}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{red.100}",
                        "focusRing": {
                          "color": "{red.600}",
                          "shadow": "none"
                        }
                      },
                      "outlined": {
                        "color": "{red.600}",
                        "borderColor": "{red.600}"
                      },
                      "simple": {
                        "color": "{red.600}"
                      }
                    },
                    "secondary": {
                      "background": "{surface.100}",
                      "borderColor": "{surface.200}",
                      "color": "{surface.600}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{surface.200}",
                        "focusRing": {
                          "color": "{surface.600}",
                          "shadow": "none"
                        }
                      },
                      "outlined": {
                        "color": "{surface.500}",
                        "borderColor": "{surface.500}"
                      },
                      "simple": {
                        "color": "{surface.500}"
                      }
                    },
                    "contrast": {
                      "background": "{surface.900}",
                      "borderColor": "{surface.950}",
                      "color": "{surface.50}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{surface.800}",
                        "focusRing": {
                          "color": "{surface.50}",
                          "shadow": "none"
                        }
                      },
                      "outlined": {
                        "color": "{surface.950}",
                        "borderColor": "{surface.950}"
                      },
                      "simple": {
                        "color": "{surface.950}"
                      }
                    }
                  },
                  "dark": {
                    "info": {
                      "background": "color-mix(in srgb, {blue.500}, transparent 84%)",
                      "borderColor": "color-mix(in srgb, {blue.700}, transparent 64%)",
                      "color": "{blue.500}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "rgba(255, 255, 255, 0.05)",
                        "focusRing": {
                          "color": "{blue.500}",
                          "shadow": "none"
                        }
                      },
                      "outlined": {
                        "color": "{blue.500}",
                        "borderColor": "{blue.500}"
                      },
                      "simple": {
                        "color": "{blue.500}"
                      }
                    },
                    "success": {
                      "background": "color-mix(in srgb, {green.500}, transparent 84%)",
                      "borderColor": "color-mix(in srgb, {green.700}, transparent 64%)",
                      "color": "{green.500}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "rgba(255, 255, 255, 0.05)",
                        "focusRing": {
                          "color": "{green.500}",
                          "shadow": "none"
                        }
                      },
                      "outlined": {
                        "color": "{green.500}",
                        "borderColor": "{green.500}"
                      },
                      "simple": {
                        "color": "{green.500}"
                      }
                    },
                    "warn": {
                      "background": "color-mix(in srgb, {yellow.500}, transparent 84%)",
                      "borderColor": "color-mix(in srgb, {yellow.700}, transparent 64%)",
                      "color": "{yellow.500}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "rgba(255, 255, 255, 0.05)",
                        "focusRing": {
                          "color": "{yellow.500}",
                          "shadow": "none"
                        }
                      },
                      "outlined": {
                        "color": "{yellow.500}",
                        "borderColor": "{yellow.500}"
                      },
                      "simple": {
                        "color": "{yellow.500}"
                      }
                    },
                    "error": {
                      "background": "color-mix(in srgb, {red.500}, transparent 84%)",
                      "borderColor": "color-mix(in srgb, {red.700}, transparent 64%)",
                      "color": "{red.500}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "rgba(255, 255, 255, 0.05)",
                        "focusRing": {
                          "color": "{red.500}",
                          "shadow": "none"
                        }
                      },
                      "outlined": {
                        "color": "{red.500}",
                        "borderColor": "{red.500}"
                      },
                      "simple": {
                        "color": "{red.500}"
                      }
                    },
                    "secondary": {
                      "background": "{surface.800}",
                      "borderColor": "{surface.700}",
                      "color": "{surface.300}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{surface.700}",
                        "focusRing": {
                          "color": "{surface.300}",
                          "shadow": "none"
                        }
                      },
                      "outlined": {
                        "color": "{surface.400}",
                        "borderColor": "{surface.400}"
                      },
                      "simple": {
                        "color": "{surface.400}"
                      }
                    },
                    "contrast": {
                      "background": "{surface.0}",
                      "borderColor": "{surface.100}",
                      "color": "{surface.950}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{surface.100}",
                        "focusRing": {
                          "color": "{surface.950}",
                          "shadow": "none"
                        }
                      },
                      "outlined": {
                        "color": "{surface.0}",
                        "borderColor": "{surface.0}"
                      },
                      "simple": {
                        "color": "{surface.0}"
                      }
                    }
                  }
                }
              },
              "metergroup": {
                "root": {
                  "borderRadius": "{content.border.radius}",
                  "gap": "1rem"
                },
                "meters": {
                  "background": "{content.border.color}",
                  "size": "0.5rem"
                },
                "label": {
                  "gap": "0.5rem"
                },
                "labelMarker": {
                  "size": "0.5rem"
                },
                "labelIcon": {
                  "size": "1rem"
                },
                "labelList": {
                  "verticalGap": "0.5rem",
                  "horizontalGap": "1rem"
                }
              },
              "multiselect": {
                "root": {
                  "background": "{form.field.background}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "filledBackground": "{form.field.filled.background}",
                  "filledHoverBackground": "{form.field.filled.hover.background}",
                  "filledFocusBackground": "{form.field.filled.focus.background}",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.hover.border.color}",
                  "focusBorderColor": "{form.field.focus.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "color": "{form.field.color}",
                  "disabledColor": "{form.field.disabled.color}",
                  "placeholderColor": "{form.field.placeholder.color}",
                  "invalidPlaceholderColor": "{form.field.invalid.placeholder.color}",
                  "shadow": "{form.field.shadow}",
                  "paddingX": "{form.field.padding.x}",
                  "paddingY": "{form.field.padding.y}",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{form.field.focus.ring.width}",
                    "style": "{form.field.focus.ring.style}",
                    "color": "{form.field.focus.ring.color}",
                    "offset": "{form.field.focus.ring.offset}",
                    "shadow": "{form.field.focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}",
                  "sm": {
                    "fontSize": "{form.field.sm.font.size}",
                    "paddingX": "{form.field.sm.padding.x}",
                    "paddingY": "{form.field.sm.padding.y}"
                  },
                  "lg": {
                    "fontSize": "{form.field.lg.font.size}",
                    "paddingX": "{form.field.lg.padding.x}",
                    "paddingY": "{form.field.lg.padding.y}"
                  }
                },
                "dropdown": {
                  "width": "2.5rem",
                  "color": "{form.field.icon.color}"
                },
                "overlay": {
                  "background": "{overlay.select.background}",
                  "borderColor": "{overlay.select.border.color}",
                  "borderRadius": "{overlay.select.border.radius}",
                  "color": "{overlay.select.color}",
                  "shadow": "{overlay.select.shadow}"
                },
                "list": {
                  "padding": "{list.padding}",
                  "gap": "{list.gap}",
                  "header": {
                    "padding": "{list.header.padding}"
                  }
                },
                "option": {
                  "focusBackground": "{list.option.focus.background}",
                  "selectedBackground": "{list.option.selected.background}",
                  "selectedFocusBackground": "{list.option.selected.focus.background}",
                  "color": "{list.option.color}",
                  "focusColor": "{list.option.focus.color}",
                  "selectedColor": "{list.option.selected.color}",
                  "selectedFocusColor": "{list.option.selected.focus.color}",
                  "padding": "{list.option.padding}",
                  "borderRadius": "{list.option.border.radius}",
                  "gap": "0.5rem"
                },
                "optionGroup": {
                  "background": "{list.option.group.background}",
                  "color": "{list.option.group.color}",
                  "fontWeight": "{list.option.group.font.weight}",
                  "padding": "{list.option.group.padding}"
                },
                "chip": {
                  "borderRadius": "{border.radius.sm}"
                },
                "clearIcon": {
                  "color": "{form.field.icon.color}"
                },
                "emptyMessage": {
                  "padding": "{list.option.padding}"
                }
              },
              "orderlist": {
                "root": {
                  "gap": "1.125rem"
                },
                "controls": {
                  "gap": "0.5rem"
                }
              },
              "organizationchart": {
                "root": {
                  "gutter": "0.75rem",
                  "transitionDuration": "{transition.duration}"
                },
                "node": {
                  "background": "{content.background}",
                  "hoverBackground": "{content.hover.background}",
                  "selectedBackground": "{highlight.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{content.color}",
                  "selectedColor": "{highlight.color}",
                  "hoverColor": "{content.hover.color}",
                  "padding": "0.75rem 1rem",
                  "toggleablePadding": "0.75rem 1rem 1.25rem 1rem",
                  "borderRadius": "{content.border.radius}"
                },
                "nodeToggleButton": {
                  "background": "{content.background}",
                  "hoverBackground": "{content.hover.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "size": "1.5rem",
                  "borderRadius": "50%",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "connector": {
                  "color": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "height": "24px"
                }
              },
              "overlaybadge": {
                "root": {
                  "outline": {
                    "width": "2px",
                    "color": "{content.background}"
                  }
                }
              },
              "paginator": {
                "root": {
                  "padding": "0.5rem 1rem",
                  "gap": "0.25rem",
                  "borderRadius": "{content.border.radius}",
                  "background": "{content.background}",
                  "color": "{content.color}",
                  "transitionDuration": "{transition.duration}"
                },
                "navButton": {
                  "background": "transparent",
                  "hoverBackground": "{content.hover.background}",
                  "selectedBackground": "{highlight.background}",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.hover.muted.color}",
                  "selectedColor": "{highlight.color}",
                  "width": "2.5rem",
                  "height": "2.5rem",
                  "borderRadius": "50%",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "currentPageReport": {
                  "color": "{text.muted.color}"
                },
                "jumpToPageInput": {
                  "maxWidth": "2.5rem"
                }
              },
              "panel": {
                "root": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{content.color}",
                  "borderRadius": "{content.border.radius}"
                },
                "header": {
                  "background": "transparent",
                  "color": "{text.color}",
                  "padding": "1.125rem",
                  "borderColor": "{content.border.color}",
                  "borderWidth": "0",
                  "borderRadius": "0"
                },
                "toggleableHeader": {
                  "padding": "0.375rem 1.125rem"
                },
                "title": {
                  "fontWeight": "600"
                },
                "content": {
                  "padding": "0 1.125rem 1.125rem 1.125rem"
                },
                "footer": {
                  "padding": "0 1.125rem 1.125rem 1.125rem"
                }
              },
              "panelmenu": {
                "root": {
                  "gap": "0.5rem",
                  "transitionDuration": "{transition.duration}"
                },
                "panel": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "borderWidth": "1px",
                  "color": "{content.color}",
                  "padding": "0.25rem 0.25rem",
                  "borderRadius": "{content.border.radius}",
                  "first": {
                    "borderWidth": "1px",
                    "topBorderRadius": "{content.border.radius}"
                  },
                  "last": {
                    "borderWidth": "1px",
                    "bottomBorderRadius": "{content.border.radius}"
                  }
                },
                "item": {
                  "focusBackground": "{navigation.item.focus.background}",
                  "color": "{navigation.item.color}",
                  "focusColor": "{navigation.item.focus.color}",
                  "gap": "0.5rem",
                  "padding": "{navigation.item.padding}",
                  "borderRadius": "{content.border.radius}",
                  "icon": {
                    "color": "{navigation.item.icon.color}",
                    "focusColor": "{navigation.item.icon.focus.color}"
                  }
                },
                "submenu": {
                  "indent": "1rem"
                },
                "submenuIcon": {
                  "color": "{navigation.submenu.icon.color}",
                  "focusColor": "{navigation.submenu.icon.focus.color}"
                }
              },
              "password": {
                "meter": {
                  "background": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "height": ".75rem"
                },
                "icon": {
                  "color": "{form.field.icon.color}"
                },
                "overlay": {
                  "background": "{overlay.popover.background}",
                  "borderColor": "{overlay.popover.border.color}",
                  "borderRadius": "{overlay.popover.border.radius}",
                  "color": "{overlay.popover.color}",
                  "padding": "{overlay.popover.padding}",
                  "shadow": "{overlay.popover.shadow}"
                },
                "content": {
                  "gap": "0.5rem"
                },
                "colorScheme": {
                  "light": {
                    "strength": {
                      "weakBackground": "{red.500}",
                      "mediumBackground": "{amber.500}",
                      "strongBackground": "{green.500}"
                    }
                  },
                  "dark": {
                    "strength": {
                      "weakBackground": "{red.400}",
                      "mediumBackground": "{amber.400}",
                      "strongBackground": "{green.400}"
                    }
                  }
                }
              },
              "picklist": {
                "root": {
                  "gap": "1.125rem"
                },
                "controls": {
                  "gap": "0.5rem"
                }
              },
              "popover": {
                "root": {
                  "background": "{overlay.popover.background}",
                  "borderColor": "{overlay.popover.border.color}",
                  "color": "{overlay.popover.color}",
                  "borderRadius": "{overlay.popover.border.radius}",
                  "shadow": "{overlay.popover.shadow}",
                  "gutter": "10px",
                  "arrowOffset": "1.25rem"
                },
                "content": {
                  "padding": "{overlay.popover.padding}"
                }
              },
              "progressbar": {
                "root": {
                  "background": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "height": "1.25rem"
                },
                "value": {
                  "background": "{primary.color}"
                },
                "label": {
                  "color": "{primary.contrast.color}",
                  "fontSize": "0.75rem",
                  "fontWeight": "600"
                }
              },
              "progressspinner": {
                "colorScheme": {
                  "light": {
                    "root": {
                      "colorOne": "{red.500}",
                      "colorTwo": "{blue.500}",
                      "colorThree": "{green.500}",
                      "colorFour": "{yellow.500}"
                    }
                  },
                  "dark": {
                    "root": {
                      "colorOne": "{red.400}",
                      "colorTwo": "{blue.400}",
                      "colorThree": "{green.400}",
                      "colorFour": "{yellow.400}"
                    }
                  }
                }
              },
              "radiobutton": {
                "root": {
                  "width": "1.25rem",
                  "height": "1.25rem",
                  "background": "{form.field.background}",
                  "checkedBackground": "{primary.color}",
                  "checkedHoverBackground": "{primary.hover.color}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "filledBackground": "{form.field.filled.background}",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.hover.border.color}",
                  "focusBorderColor": "{form.field.border.color}",
                  "checkedBorderColor": "{primary.color}",
                  "checkedHoverBorderColor": "{primary.hover.color}",
                  "checkedFocusBorderColor": "{primary.color}",
                  "checkedDisabledBorderColor": "{form.field.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "shadow": "{form.field.shadow}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}",
                  "sm": {
                    "width": "1rem",
                    "height": "1rem"
                  },
                  "lg": {
                    "width": "1.5rem",
                    "height": "1.5rem"
                  }
                },
                "icon": {
                  "size": "0.75rem",
                  "checkedColor": "{primary.contrast.color}",
                  "checkedHoverColor": "{primary.contrast.color}",
                  "disabledColor": "{form.field.disabled.color}",
                  "sm": {
                    "size": "0.5rem"
                  },
                  "lg": {
                    "size": "1rem"
                  }
                }
              },
              "rating": {
                "root": {
                  "gap": "0.25rem",
                  "transitionDuration": "{transition.duration}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "icon": {
                  "size": "1rem",
                  "color": "{text.muted.color}",
                  "hoverColor": "{primary.color}",
                  "activeColor": "{primary.color}"
                }
              },
              "ripple": {
                "colorScheme": {
                  "light": {
                    "root": {
                      "background": "rgba(0,0,0,0.1)"
                    }
                  },
                  "dark": {
                    "root": {
                      "background": "rgba(255,255,255,0.3)"
                    }
                  }
                }
              },
              "scrollpanel": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "bar": {
                  "size": "9px",
                  "borderRadius": "{border.radius.sm}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "colorScheme": {
                  "light": {
                    "bar": {
                      "background": "{surface.100}"
                    }
                  },
                  "dark": {
                    "bar": {
                      "background": "{surface.800}"
                    }
                  }
                }
              },
              "select": {
                "root": {
                  "background": "{form.field.background}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "filledBackground": "{form.field.filled.background}",
                  "filledHoverBackground": "{form.field.filled.hover.background}",
                  "filledFocusBackground": "{form.field.filled.focus.background}",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.hover.border.color}",
                  "focusBorderColor": "{form.field.focus.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "color": "{form.field.color}",
                  "disabledColor": "{form.field.disabled.color}",
                  "placeholderColor": "{form.field.placeholder.color}",
                  "invalidPlaceholderColor": "{form.field.invalid.placeholder.color}",
                  "shadow": "{form.field.shadow}",
                  "paddingX": "{form.field.padding.x}",
                  "paddingY": "{form.field.padding.y}",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{form.field.focus.ring.width}",
                    "style": "{form.field.focus.ring.style}",
                    "color": "{form.field.focus.ring.color}",
                    "offset": "{form.field.focus.ring.offset}",
                    "shadow": "{form.field.focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}",
                  "sm": {
                    "fontSize": "{form.field.sm.font.size}",
                    "paddingX": "{form.field.sm.padding.x}",
                    "paddingY": "{form.field.sm.padding.y}"
                  },
                  "lg": {
                    "fontSize": "{form.field.lg.font.size}",
                    "paddingX": "{form.field.lg.padding.x}",
                    "paddingY": "{form.field.lg.padding.y}"
                  }
                },
                "dropdown": {
                  "width": "2.5rem",
                  "color": "{form.field.icon.color}"
                },
                "overlay": {
                  "background": "{overlay.select.background}",
                  "borderColor": "{overlay.select.border.color}",
                  "borderRadius": "{overlay.select.border.radius}",
                  "color": "{overlay.select.color}",
                  "shadow": "{overlay.select.shadow}"
                },
                "list": {
                  "padding": "{list.padding}",
                  "gap": "{list.gap}",
                  "header": {
                    "padding": "{list.header.padding}"
                  }
                },
                "option": {
                  "focusBackground": "{list.option.focus.background}",
                  "selectedBackground": "{list.option.selected.background}",
                  "selectedFocusBackground": "{list.option.selected.focus.background}",
                  "color": "{list.option.color}",
                  "focusColor": "{list.option.focus.color}",
                  "selectedColor": "{list.option.selected.color}",
                  "selectedFocusColor": "{list.option.selected.focus.color}",
                  "padding": "{list.option.padding}",
                  "borderRadius": "{list.option.border.radius}"
                },
                "optionGroup": {
                  "background": "{list.option.group.background}",
                  "color": "{list.option.group.color}",
                  "fontWeight": "{list.option.group.font.weight}",
                  "padding": "{list.option.group.padding}"
                },
                "clearIcon": {
                  "color": "{form.field.icon.color}"
                },
                "checkmark": {
                  "color": "{list.option.color}",
                  "gutterStart": "-0.375rem",
                  "gutterEnd": "0.375rem"
                },
                "emptyMessage": {
                  "padding": "{list.option.padding}"
                }
              },
              "selectbutton": {
                "root": {
                  "borderRadius": "{form.field.border.radius}"
                },
                "colorScheme": {
                  "light": {
                    "root": {
                      "invalidBorderColor": "{form.field.invalid.border.color}"
                    }
                  },
                  "dark": {
                    "root": {
                      "invalidBorderColor": "{form.field.invalid.border.color}"
                    }
                  }
                }
              },
              "skeleton": {
                "root": {
                  "borderRadius": "{content.border.radius}"
                },
                "colorScheme": {
                  "light": {
                    "root": {
                      "background": "{surface.200}",
                      "animationBackground": "rgba(255,255,255,0.4)"
                    }
                  },
                  "dark": {
                    "root": {
                      "background": "rgba(255, 255, 255, 0.06)",
                      "animationBackground": "rgba(255, 255, 255, 0.04)"
                    }
                  }
                }
              },
              "slider": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "track": {
                  "background": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "size": "3px"
                },
                "range": {
                  "background": "{primary.color}"
                },
                "handle": {
                  "width": "20px",
                  "height": "20px",
                  "borderRadius": "50%",
                  "background": "{content.border.color}",
                  "hoverBackground": "{content.border.color}",
                  "content": {
                    "borderRadius": "50%",
                    "hoverBackground": "{content.background}",
                    "width": "16px",
                    "height": "16px",
                    "shadow": "0px 0.5px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px 0px rgba(0, 0, 0, 0.14)"
                  },
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "colorScheme": {
                  "light": {
                    "handle": {
                      "content": {
                        "background": "{surface.0}"
                      }
                    }
                  },
                  "dark": {
                    "handle": {
                      "content": {
                        "background": "{surface.950}"
                      }
                    }
                  }
                }
              },
              "speeddial": {
                "root": {
                  "gap": "0.5rem",
                  "transitionDuration": "{transition.duration}"
                }
              },
              "splitbutton": {
                "root": {
                  "borderRadius": "{form.field.border.radius}",
                  "roundedBorderRadius": "2rem",
                  "raisedShadow": "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)"
                }
              },
              "splitter": {
                "root": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{content.color}",
                  "transitionDuration": "{transition.duration}"
                },
                "gutter": {
                  "background": "{content.border.color}"
                },
                "handle": {
                  "size": "24px",
                  "background": "transparent",
                  "borderRadius": "{content.border.radius}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                }
              },
              "stepper": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "separator": {
                  "background": "{content.border.color}",
                  "activeBackground": "{primary.color}",
                  "margin": "0 0 0 1.625rem",
                  "size": "2px"
                },
                "step": {
                  "padding": "0.5rem",
                  "gap": "1rem"
                },
                "stepHeader": {
                  "padding": "0",
                  "borderRadius": "{content.border.radius}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  },
                  "gap": "0.5rem"
                },
                "stepTitle": {
                  "color": "{text.muted.color}",
                  "activeColor": "{primary.color}",
                  "fontWeight": "500"
                },
                "stepNumber": {
                  "background": "{content.background}",
                  "activeBackground": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "activeBorderColor": "{content.border.color}",
                  "color": "{text.muted.color}",
                  "activeColor": "{primary.color}",
                  "size": "2rem",
                  "fontSize": "1.143rem",
                  "fontWeight": "500",
                  "borderRadius": "50%",
                  "shadow": "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"
                },
                "steppanels": {
                  "padding": "0.875rem 0.5rem 1.125rem 0.5rem"
                },
                "steppanel": {
                  "background": "{content.background}",
                  "color": "{content.color}",
                  "padding": "0",
                  "indent": "1rem"
                }
              },
              "steps": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "separator": {
                  "background": "{content.border.color}"
                },
                "itemLink": {
                  "borderRadius": "{content.border.radius}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  },
                  "gap": "0.5rem"
                },
                "itemLabel": {
                  "color": "{text.muted.color}",
                  "activeColor": "{primary.color}",
                  "fontWeight": "500"
                },
                "itemNumber": {
                  "background": "{content.background}",
                  "activeBackground": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "activeBorderColor": "{content.border.color}",
                  "color": "{text.muted.color}",
                  "activeColor": "{primary.color}",
                  "size": "2rem",
                  "fontSize": "1.143rem",
                  "fontWeight": "500",
                  "borderRadius": "50%",
                  "shadow": "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"
                }
              },
              "tabmenu": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "tablist": {
                  "borderWidth": "0 0 1px 0",
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}"
                },
                "item": {
                  "background": "transparent",
                  "hoverBackground": "transparent",
                  "activeBackground": "transparent",
                  "borderWidth": "0 0 1px 0",
                  "borderColor": "{content.border.color}",
                  "hoverBorderColor": "{content.border.color}",
                  "activeBorderColor": "{primary.color}",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "activeColor": "{primary.color}",
                  "padding": "1rem 1.125rem",
                  "fontWeight": "600",
                  "margin": "0 0 -1px 0",
                  "gap": "0.5rem",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "itemIcon": {
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "activeColor": "{primary.color}"
                },
                "activeBar": {
                  "height": "1px",
                  "bottom": "-1px",
                  "background": "{primary.color}"
                }
              },
              "tabs": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "tablist": {
                  "borderWidth": "0 0 1px 0",
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}"
                },
                "tab": {
                  "background": "transparent",
                  "hoverBackground": "transparent",
                  "activeBackground": "transparent",
                  "borderWidth": "0 0 1px 0",
                  "borderColor": "{content.border.color}",
                  "hoverBorderColor": "{content.border.color}",
                  "activeBorderColor": "{primary.color}",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "activeColor": "{primary.color}",
                  "padding": "1rem 1.125rem",
                  "fontWeight": "600",
                  "margin": "0 0 -1px 0",
                  "gap": "0.5rem",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "-1px",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "tabpanel": {
                  "background": "{content.background}",
                  "color": "{content.color}",
                  "padding": "0.875rem 1.125rem 1.125rem 1.125rem",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "inset {focus.ring.shadow}"
                  }
                },
                "navButton": {
                  "background": "{content.background}",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "width": "2.5rem",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "-1px",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "activeBar": {
                  "height": "1px",
                  "bottom": "-1px",
                  "background": "{primary.color}"
                },
                "colorScheme": {
                  "light": {
                    "navButton": {
                      "shadow": "0px 0px 10px 50px rgba(255, 255, 255, 0.6)"
                    }
                  },
                  "dark": {
                    "navButton": {
                      "shadow": "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"
                    }
                  }
                }
              },
              "tabview": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "tabList": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}"
                },
                "tab": {
                  "borderColor": "{content.border.color}",
                  "activeBorderColor": "{primary.color}",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "activeColor": "{primary.color}"
                },
                "tabPanel": {
                  "background": "{content.background}",
                  "color": "{content.color}"
                },
                "navButton": {
                  "background": "{content.background}",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}"
                },
                "colorScheme": {
                  "light": {
                    "navButton": {
                      "shadow": "0px 0px 10px 50px rgba(255, 255, 255, 0.6)"
                    }
                  },
                  "dark": {
                    "navButton": {
                      "shadow": "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"
                    }
                  }
                }
              },
              "tag": {
                "root": {
                  "fontSize": "0.875rem",
                  "fontWeight": "700",
                  "padding": "0.25rem 0.5rem",
                  "gap": "0.25rem",
                  "borderRadius": "{content.border.radius}",
                  "roundedBorderRadius": "{border.radius.xl}"
                },
                "icon": {
                  "size": "0.75rem"
                },
                "colorScheme": {
                  "light": {
                    "primary": {
                      "background": "{primary.100}",
                      "color": "{primary.700}"
                    },
                    "secondary": {
                      "background": "{surface.100}",
                      "color": "{surface.600}"
                    },
                    "success": {
                      "background": "{green.100}",
                      "color": "{green.700}"
                    },
                    "info": {
                      "background": "{sky.100}",
                      "color": "{sky.700}"
                    },
                    "warn": {
                      "background": "{orange.100}",
                      "color": "{orange.700}"
                    },
                    "danger": {
                      "background": "{red.100}",
                      "color": "{red.700}"
                    },
                    "contrast": {
                      "background": "{surface.950}",
                      "color": "{surface.0}"
                    }
                  },
                  "dark": {
                    "primary": {
                      "background": "color-mix(in srgb, {primary.500}, transparent 84%)",
                      "color": "{primary.300}"
                    },
                    "secondary": {
                      "background": "{surface.800}",
                      "color": "{surface.300}"
                    },
                    "success": {
                      "background": "color-mix(in srgb, {green.500}, transparent 84%)",
                      "color": "{green.300}"
                    },
                    "info": {
                      "background": "color-mix(in srgb, {sky.500}, transparent 84%)",
                      "color": "{sky.300}"
                    },
                    "warn": {
                      "background": "color-mix(in srgb, {orange.500}, transparent 84%)",
                      "color": "{orange.300}"
                    },
                    "danger": {
                      "background": "color-mix(in srgb, {red.500}, transparent 84%)",
                      "color": "{red.300}"
                    },
                    "contrast": {
                      "background": "{surface.0}",
                      "color": "{surface.950}"
                    }
                  }
                }
              },
              "terminal": {
                "root": {
                  "background": "{form.field.background}",
                  "borderColor": "{form.field.border.color}",
                  "color": "{form.field.color}",
                  "height": "18rem",
                  "padding": "{form.field.padding.y} {form.field.padding.x}",
                  "borderRadius": "{form.field.border.radius}"
                },
                "prompt": {
                  "gap": "0.25rem"
                },
                "commandResponse": {
                  "margin": "2px 0"
                }
              },
              "textarea": {
                "root": {
                  "background": "{form.field.background}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "filledBackground": "{form.field.filled.background}",
                  "filledHoverBackground": "{form.field.filled.hover.background}",
                  "filledFocusBackground": "{form.field.filled.focus.background}",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.hover.border.color}",
                  "focusBorderColor": "{form.field.focus.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "color": "{form.field.color}",
                  "disabledColor": "{form.field.disabled.color}",
                  "placeholderColor": "{form.field.placeholder.color}",
                  "invalidPlaceholderColor": "{form.field.invalid.placeholder.color}",
                  "shadow": "{form.field.shadow}",
                  "paddingX": "{form.field.padding.x}",
                  "paddingY": "{form.field.padding.y}",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{form.field.focus.ring.width}",
                    "style": "{form.field.focus.ring.style}",
                    "color": "{form.field.focus.ring.color}",
                    "offset": "{form.field.focus.ring.offset}",
                    "shadow": "{form.field.focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}",
                  "sm": {
                    "fontSize": "{form.field.sm.font.size}",
                    "paddingX": "{form.field.sm.padding.x}",
                    "paddingY": "{form.field.sm.padding.y}"
                  },
                  "lg": {
                    "fontSize": "{form.field.lg.font.size}",
                    "paddingX": "{form.field.lg.padding.x}",
                    "paddingY": "{form.field.lg.padding.y}"
                  }
                }
              },
              "tieredmenu": {
                "root": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{content.color}",
                  "borderRadius": "{content.border.radius}",
                  "shadow": "{overlay.navigation.shadow}",
                  "transitionDuration": "{transition.duration}"
                },
                "list": {
                  "padding": "{navigation.list.padding}",
                  "gap": "{navigation.list.gap}"
                },
                "item": {
                  "focusBackground": "{navigation.item.focus.background}",
                  "activeBackground": "{navigation.item.active.background}",
                  "color": "{navigation.item.color}",
                  "focusColor": "{navigation.item.focus.color}",
                  "activeColor": "{navigation.item.active.color}",
                  "padding": "{navigation.item.padding}",
                  "borderRadius": "{navigation.item.border.radius}",
                  "gap": "{navigation.item.gap}",
                  "icon": {
                    "color": "{navigation.item.icon.color}",
                    "focusColor": "{navigation.item.icon.focus.color}",
                    "activeColor": "{navigation.item.icon.active.color}"
                  }
                },
                "submenu": {
                  "mobileIndent": "1rem"
                },
                "submenuIcon": {
                  "size": "{navigation.submenu.icon.size}",
                  "color": "{navigation.submenu.icon.color}",
                  "focusColor": "{navigation.submenu.icon.focus.color}",
                  "activeColor": "{navigation.submenu.icon.active.color}"
                },
                "separator": {
                  "borderColor": "{content.border.color}"
                }
              },
              "timeline": {
                "event": {
                  "minHeight": "5rem"
                },
                "horizontal": {
                  "eventContent": {
                    "padding": "1rem 0"
                  }
                },
                "vertical": {
                  "eventContent": {
                    "padding": "0 1rem"
                  }
                },
                "eventMarker": {
                  "size": "1.125rem",
                  "borderRadius": "50%",
                  "borderWidth": "2px",
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "content": {
                    "borderRadius": "50%",
                    "size": "0.375rem",
                    "background": "{primary.color}",
                    "insetShadow": "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"
                  }
                },
                "eventConnector": {
                  "color": "{content.border.color}",
                  "size": "2px"
                }
              },
              "toast": {
                "root": {
                  "width": "25rem",
                  "borderRadius": "{content.border.radius}",
                  "borderWidth": "1px",
                  "transitionDuration": "{transition.duration}"
                },
                "icon": {
                  "size": "1.125rem"
                },
                "content": {
                  "padding": "{overlay.popover.padding}",
                  "gap": "0.5rem"
                },
                "text": {
                  "gap": "0.5rem"
                },
                "summary": {
                  "fontWeight": "500",
                  "fontSize": "1rem"
                },
                "detail": {
                  "fontWeight": "500",
                  "fontSize": "0.875rem"
                },
                "closeButton": {
                  "width": "1.75rem",
                  "height": "1.75rem",
                  "borderRadius": "50%",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "offset": "{focus.ring.offset}"
                  }
                },
                "closeIcon": {
                  "size": "1rem"
                },
                "colorScheme": {
                  "light": {
                    "root": {
                      "blur": "1.5px"
                    },
                    "info": {
                      "background": "color-mix(in srgb, {blue.50}, transparent 5%)",
                      "borderColor": "{blue.200}",
                      "color": "{blue.600}",
                      "detailColor": "{surface.700}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{blue.100}",
                        "focusRing": {
                          "color": "{blue.600}",
                          "shadow": "none"
                        }
                      }
                    },
                    "success": {
                      "background": "color-mix(in srgb, {green.50}, transparent 5%)",
                      "borderColor": "{green.200}",
                      "color": "{green.600}",
                      "detailColor": "{surface.700}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{green.100}",
                        "focusRing": {
                          "color": "{green.600}",
                          "shadow": "none"
                        }
                      }
                    },
                    "warn": {
                      "background": "color-mix(in srgb,{yellow.50}, transparent 5%)",
                      "borderColor": "{yellow.200}",
                      "color": "{yellow.600}",
                      "detailColor": "{surface.700}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{yellow.100}",
                        "focusRing": {
                          "color": "{yellow.600}",
                          "shadow": "none"
                        }
                      }
                    },
                    "error": {
                      "background": "color-mix(in srgb, {red.50}, transparent 5%)",
                      "borderColor": "{red.200}",
                      "color": "{red.600}",
                      "detailColor": "{surface.700}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{red.100}",
                        "focusRing": {
                          "color": "{red.600}",
                          "shadow": "none"
                        }
                      }
                    },
                    "secondary": {
                      "background": "{surface.100}",
                      "borderColor": "{surface.200}",
                      "color": "{surface.600}",
                      "detailColor": "{surface.700}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{surface.200}",
                        "focusRing": {
                          "color": "{surface.600}",
                          "shadow": "none"
                        }
                      }
                    },
                    "contrast": {
                      "background": "{surface.900}",
                      "borderColor": "{surface.950}",
                      "color": "{surface.50}",
                      "detailColor": "{surface.0}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{surface.800}",
                        "focusRing": {
                          "color": "{surface.50}",
                          "shadow": "none"
                        }
                      }
                    }
                  },
                  "dark": {
                    "root": {
                      "blur": "10px"
                    },
                    "info": {
                      "background": "color-mix(in srgb, {blue.500}, transparent 84%)",
                      "borderColor": "color-mix(in srgb, {blue.700}, transparent 64%)",
                      "color": "{blue.500}",
                      "detailColor": "{surface.0}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "rgba(255, 255, 255, 0.05)",
                        "focusRing": {
                          "color": "{blue.500}",
                          "shadow": "none"
                        }
                      }
                    },
                    "success": {
                      "background": "color-mix(in srgb, {green.500}, transparent 84%)",
                      "borderColor": "color-mix(in srgb, {green.700}, transparent 64%)",
                      "color": "{green.500}",
                      "detailColor": "{surface.0}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "rgba(255, 255, 255, 0.05)",
                        "focusRing": {
                          "color": "{green.500}",
                          "shadow": "none"
                        }
                      }
                    },
                    "warn": {
                      "background": "color-mix(in srgb, {yellow.500}, transparent 84%)",
                      "borderColor": "color-mix(in srgb, {yellow.700}, transparent 64%)",
                      "color": "{yellow.500}",
                      "detailColor": "{surface.0}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "rgba(255, 255, 255, 0.05)",
                        "focusRing": {
                          "color": "{yellow.500}",
                          "shadow": "none"
                        }
                      }
                    },
                    "error": {
                      "background": "color-mix(in srgb, {red.500}, transparent 84%)",
                      "borderColor": "color-mix(in srgb, {red.700}, transparent 64%)",
                      "color": "{red.500}",
                      "detailColor": "{surface.0}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "rgba(255, 255, 255, 0.05)",
                        "focusRing": {
                          "color": "{red.500}",
                          "shadow": "none"
                        }
                      }
                    },
                    "secondary": {
                      "background": "{surface.800}",
                      "borderColor": "{surface.700}",
                      "color": "{surface.300}",
                      "detailColor": "{surface.0}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{surface.700}",
                        "focusRing": {
                          "color": "{surface.300}",
                          "shadow": "none"
                        }
                      }
                    },
                    "contrast": {
                      "background": "{surface.0}",
                      "borderColor": "{surface.100}",
                      "color": "{surface.950}",
                      "detailColor": "{surface.950}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{surface.100}",
                        "focusRing": {
                          "color": "{surface.950}",
                          "shadow": "none"
                        }
                      }
                    }
                  }
                }
              },
              "togglebutton": {
                "root": {
                  "padding": "0.25rem",
                  "borderRadius": "{content.border.radius}",
                  "gap": "0.5rem",
                  "fontWeight": "500",
                  "disabledBackground": "{form.field.disabled.background}",
                  "disabledBorderColor": "{form.field.disabled.background}",
                  "disabledColor": "{form.field.disabled.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}",
                  "sm": {
                    "fontSize": "{form.field.sm.font.size}",
                    "padding": "0.25rem"
                  },
                  "lg": {
                    "fontSize": "{form.field.lg.font.size}",
                    "padding": "0.25rem"
                  }
                },
                "icon": {
                  "disabledColor": "{form.field.disabled.color}"
                },
                "content": {
                  "padding": "0.25rem 0.75rem",
                  "borderRadius": "{content.border.radius}",
                  "checkedShadow": "0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04)",
                  "sm": {
                    "padding": "0.25rem 0.75rem"
                  },
                  "lg": {
                    "padding": "0.25rem 0.75rem"
                  }
                },
                "colorScheme": {
                  "light": {
                    "root": {
                      "background": "{surface.100}",
                      "checkedBackground": "{surface.100}",
                      "hoverBackground": "{surface.100}",
                      "borderColor": "{surface.100}",
                      "color": "{surface.500}",
                      "hoverColor": "{surface.700}",
                      "checkedColor": "{surface.900}",
                      "checkedBorderColor": "{surface.100}"
                    },
                    "content": {
                      "checkedBackground": "{surface.0}"
                    },
                    "icon": {
                      "color": "{surface.500}",
                      "hoverColor": "{surface.700}",
                      "checkedColor": "{surface.900}"
                    }
                  },
                  "dark": {
                    "root": {
                      "background": "{surface.950}",
                      "checkedBackground": "{surface.950}",
                      "hoverBackground": "{surface.950}",
                      "borderColor": "{surface.950}",
                      "color": "{surface.400}",
                      "hoverColor": "{surface.300}",
                      "checkedColor": "{surface.0}",
                      "checkedBorderColor": "{surface.950}"
                    },
                    "content": {
                      "checkedBackground": "{surface.800}"
                    },
                    "icon": {
                      "color": "{surface.400}",
                      "hoverColor": "{surface.300}",
                      "checkedColor": "{surface.0}"
                    }
                  }
                }
              },
              "toggleswitch": {
                "root": {
                  "width": "2.5rem",
                  "height": "1.5rem",
                  "borderRadius": "30px",
                  "gap": "0.25rem",
                  "shadow": "{form.field.shadow}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  },
                  "borderWidth": "1px",
                  "borderColor": "transparent",
                  "hoverBorderColor": "transparent",
                  "checkedBorderColor": "transparent",
                  "checkedHoverBorderColor": "transparent",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "transitionDuration": "{form.field.transition.duration}",
                  "slideDuration": "0.2s"
                },
                "handle": {
                  "borderRadius": "50%",
                  "size": "1rem"
                },
                "colorScheme": {
                  "light": {
                    "root": {
                      "background": "{surface.300}",
                      "disabledBackground": "{form.field.disabled.background}",
                      "hoverBackground": "{surface.400}",
                      "checkedBackground": "{primary.color}",
                      "checkedHoverBackground": "{primary.hover.color}"
                    },
                    "handle": {
                      "background": "{surface.0}",
                      "disabledBackground": "{form.field.disabled.color}",
                      "hoverBackground": "{surface.0}",
                      "checkedBackground": "{surface.0}",
                      "checkedHoverBackground": "{surface.0}",
                      "color": "{text.muted.color}",
                      "hoverColor": "{text.color}",
                      "checkedColor": "{primary.color}",
                      "checkedHoverColor": "{primary.hover.color}"
                    }
                  },
                  "dark": {
                    "root": {
                      "background": "{surface.700}",
                      "disabledBackground": "{surface.600}",
                      "hoverBackground": "{surface.600}",
                      "checkedBackground": "{primary.color}",
                      "checkedHoverBackground": "{primary.hover.color}"
                    },
                    "handle": {
                      "background": "{surface.400}",
                      "disabledBackground": "{surface.900}",
                      "hoverBackground": "{surface.300}",
                      "checkedBackground": "{surface.900}",
                      "checkedHoverBackground": "{surface.900}",
                      "color": "{surface.900}",
                      "hoverColor": "{surface.800}",
                      "checkedColor": "{primary.color}",
                      "checkedHoverColor": "{primary.hover.color}"
                    }
                  }
                }
              },
              "toolbar": {
                "root": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "color": "{content.color}",
                  "gap": "0.5rem",
                  "padding": "0.75rem"
                }
              },
              "tooltip": {
                "root": {
                  "maxWidth": "12.5rem",
                  "gutter": "0.25rem",
                  "shadow": "{overlay.popover.shadow}",
                  "padding": "0.5rem 0.75rem",
                  "borderRadius": "{overlay.popover.border.radius}"
                },
                "colorScheme": {
                  "light": {
                    "root": {
                      "background": "{surface.700}",
                      "color": "{surface.0}"
                    }
                  },
                  "dark": {
                    "root": {
                      "background": "{surface.700}",
                      "color": "{surface.0}"
                    }
                  }
                }
              },
              "tree": {
                "root": {
                  "background": "{content.background}",
                  "color": "{content.color}",
                  "padding": "1rem",
                  "gap": "2px",
                  "indent": "1rem",
                  "transitionDuration": "{transition.duration}"
                },
                "node": {
                  "padding": "0.25rem 0.5rem",
                  "borderRadius": "{content.border.radius}",
                  "hoverBackground": "{content.hover.background}",
                  "selectedBackground": "{highlight.background}",
                  "color": "{text.color}",
                  "hoverColor": "{text.hover.color}",
                  "selectedColor": "{highlight.color}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "-1px",
                    "shadow": "{focus.ring.shadow}"
                  },
                  "gap": "0.25rem"
                },
                "nodeIcon": {
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.hover.muted.color}",
                  "selectedColor": "{highlight.color}"
                },
                "nodeToggleButton": {
                  "borderRadius": "50%",
                  "size": "1.75rem",
                  "hoverBackground": "{content.hover.background}",
                  "selectedHoverBackground": "{content.background}",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.hover.muted.color}",
                  "selectedHoverColor": "{primary.color}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "loadingIcon": {
                  "size": "2rem"
                },
                "filter": {
                  "margin": "0 0 0.5rem 0"
                },
                "css": "\n    .p-tree-mask.p-overlay-mask {\n        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));\n    }\n"
              },
              "treeselect": {
                "root": {
                  "background": "{form.field.background}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "filledBackground": "{form.field.filled.background}",
                  "filledHoverBackground": "{form.field.filled.hover.background}",
                  "filledFocusBackground": "{form.field.filled.focus.background}",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.hover.border.color}",
                  "focusBorderColor": "{form.field.focus.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "color": "{form.field.color}",
                  "disabledColor": "{form.field.disabled.color}",
                  "placeholderColor": "{form.field.placeholder.color}",
                  "invalidPlaceholderColor": "{form.field.invalid.placeholder.color}",
                  "shadow": "{form.field.shadow}",
                  "paddingX": "{form.field.padding.x}",
                  "paddingY": "{form.field.padding.y}",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{form.field.focus.ring.width}",
                    "style": "{form.field.focus.ring.style}",
                    "color": "{form.field.focus.ring.color}",
                    "offset": "{form.field.focus.ring.offset}",
                    "shadow": "{form.field.focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}",
                  "sm": {
                    "fontSize": "{form.field.sm.font.size}",
                    "paddingX": "{form.field.sm.padding.x}",
                    "paddingY": "{form.field.sm.padding.y}"
                  },
                  "lg": {
                    "fontSize": "{form.field.lg.font.size}",
                    "paddingX": "{form.field.lg.padding.x}",
                    "paddingY": "{form.field.lg.padding.y}"
                  }
                },
                "dropdown": {
                  "width": "2.5rem",
                  "color": "{form.field.icon.color}"
                },
                "overlay": {
                  "background": "{overlay.select.background}",
                  "borderColor": "{overlay.select.border.color}",
                  "borderRadius": "{overlay.select.border.radius}",
                  "color": "{overlay.select.color}",
                  "shadow": "{overlay.select.shadow}"
                },
                "tree": {
                  "padding": "{list.padding}"
                },
                "emptyMessage": {
                  "padding": "{list.option.padding}"
                },
                "chip": {
                  "borderRadius": "{border.radius.sm}"
                },
                "clearIcon": {
                  "color": "{form.field.icon.color}"
                }
              },
              "treetable": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "header": {
                  "background": "{content.background}",
                  "borderColor": "{treetable.border.color}",
                  "color": "{content.color}",
                  "borderWidth": "0 0 1px 0",
                  "padding": "0.75rem 1rem"
                },
                "headerCell": {
                  "background": "{content.background}",
                  "hoverBackground": "{content.hover.background}",
                  "selectedBackground": "{highlight.background}",
                  "borderColor": "{treetable.border.color}",
                  "color": "{content.color}",
                  "hoverColor": "{content.hover.color}",
                  "selectedColor": "{highlight.color}",
                  "gap": "0.5rem",
                  "padding": "0.75rem 1rem",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "-1px",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "columnTitle": {
                  "fontWeight": "600"
                },
                "row": {
                  "background": "{content.background}",
                  "hoverBackground": "{content.hover.background}",
                  "selectedBackground": "{highlight.background}",
                  "color": "{content.color}",
                  "hoverColor": "{content.hover.color}",
                  "selectedColor": "{highlight.color}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "-1px",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "bodyCell": {
                  "borderColor": "{treetable.border.color}",
                  "padding": "0.75rem 1rem",
                  "gap": "0.5rem"
                },
                "footerCell": {
                  "background": "{content.background}",
                  "borderColor": "{treetable.border.color}",
                  "color": "{content.color}",
                  "padding": "0.75rem 1rem"
                },
                "columnFooter": {
                  "fontWeight": "600"
                },
                "footer": {
                  "background": "{content.background}",
                  "borderColor": "{treetable.border.color}",
                  "color": "{content.color}",
                  "borderWidth": "0 0 1px 0",
                  "padding": "0.75rem 1rem"
                },
                "columnResizer": {
                  "width": "0.5rem"
                },
                "resizeIndicator": {
                  "width": "1px",
                  "color": "{primary.color}"
                },
                "sortIcon": {
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.hover.muted.color}",
                  "size": "0.875rem"
                },
                "loadingIcon": {
                  "size": "2rem"
                },
                "nodeToggleButton": {
                  "hoverBackground": "{content.hover.background}",
                  "selectedHoverBackground": "{content.background}",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "selectedHoverColor": "{primary.color}",
                  "size": "1.75rem",
                  "borderRadius": "50%",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "paginatorTop": {
                  "borderColor": "{content.border.color}",
                  "borderWidth": "0 0 1px 0"
                },
                "paginatorBottom": {
                  "borderColor": "{content.border.color}",
                  "borderWidth": "0 0 1px 0"
                },
                "colorScheme": {
                  "light": {
                    "root": {
                      "borderColor": "{content.border.color}"
                    },
                    "bodyCell": {
                      "selectedBorderColor": "{primary.100}"
                    }
                  },
                  "dark": {
                    "root": {
                      "borderColor": "{surface.800}"
                    },
                    "bodyCell": {
                      "selectedBorderColor": "{primary.900}"
                    }
                  }
                },
                "css": "\n    .p-treetable-mask.p-overlay-mask {\n        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));\n    }\n"
              },
              "virtualscroller": {
                "loader": {
                  "mask": {
                    "background": "{content.background}",
                    "color": "{text.muted.color}"
                  },
                  "icon": {
                    "size": "2rem"
                  }
                }
              }
            },
            "css": "\n    li.p-autocomplete-option,\n    div.p-cascadeselect-option-content,\n    li.p-listbox-option,\n    li.p-multiselect-option,\n    li.p-select-option,\n    li.p-listbox-option,\n    div.p-tree-node-content,\n    li.p-datatable-filter-constraint,\n    .p-datatable .p-datatable-tbody > tr,\n    .p-treetable .p-treetable-tbody > tr,\n    div.p-menu-item-content,\n    div.p-tieredmenu-item-content,\n    div.p-contextmenu-item-content,\n    div.p-menubar-item-content,\n    div.p-megamenu-item-content,\n    div.p-panelmenu-header-content,\n    div.p-panelmenu-item-content,\n    th.p-datatable-header-cell,\n    th.p-treetable-header-cell,\n    thead.p-datatable-thead > tr > th,\n    .p-treetable thead.p-treetable-thead>tr>th {\n        transition: none;\n    }\n"
          },
          "options": {
            "prefix": "p",
            "darkModeSelector": ".dark",
            "cssLayer": false
          }
        }
      },
      "components": [
        {
          "name": "AutoComplete",
          "as": "AutoComplete",
          "from": "primevue/autocomplete",
          "export": "default",
          "filePath": "primevue/autocomplete",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Calendar",
          "as": "Calendar",
          "from": "primevue/calendar",
          "export": "default",
          "filePath": "primevue/calendar",
          "global": true,
          "mode": "all"
        },
        {
          "name": "CascadeSelect",
          "as": "CascadeSelect",
          "from": "primevue/cascadeselect",
          "export": "default",
          "filePath": "primevue/cascadeselect",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Checkbox",
          "as": "Checkbox",
          "from": "primevue/checkbox",
          "export": "default",
          "filePath": "primevue/checkbox",
          "global": true,
          "mode": "all"
        },
        {
          "name": "CheckboxGroup",
          "as": "CheckboxGroup",
          "from": "primevue/checkboxgroup",
          "export": "default",
          "filePath": "primevue/checkboxgroup",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Chips",
          "as": "Chips",
          "from": "primevue/chips",
          "export": "default",
          "filePath": "primevue/chips",
          "global": true,
          "mode": "all"
        },
        {
          "name": "ColorPicker",
          "as": "ColorPicker",
          "from": "primevue/colorpicker",
          "export": "default",
          "filePath": "primevue/colorpicker",
          "global": true,
          "mode": "all"
        },
        {
          "name": "DatePicker",
          "as": "DatePicker",
          "from": "primevue/datepicker",
          "export": "default",
          "filePath": "primevue/datepicker",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Dropdown",
          "as": "Dropdown",
          "from": "primevue/dropdown",
          "export": "default",
          "filePath": "primevue/dropdown",
          "global": true,
          "mode": "all"
        },
        {
          "name": "FloatLabel",
          "as": "FloatLabel",
          "from": "primevue/floatlabel",
          "export": "default",
          "filePath": "primevue/floatlabel",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Fluid",
          "as": "Fluid",
          "from": "primevue/fluid",
          "export": "default",
          "filePath": "primevue/fluid",
          "global": true,
          "mode": "all"
        },
        {
          "name": "IconField",
          "as": "IconField",
          "from": "primevue/iconfield",
          "export": "default",
          "filePath": "primevue/iconfield",
          "global": true,
          "mode": "all"
        },
        {
          "name": "IftaLabel",
          "as": "IftaLabel",
          "from": "primevue/iftalabel",
          "export": "default",
          "filePath": "primevue/iftalabel",
          "global": true,
          "mode": "all"
        },
        {
          "name": "InputChips",
          "as": "InputChips",
          "from": "primevue/inputchips",
          "export": "default",
          "filePath": "primevue/inputchips",
          "global": true,
          "mode": "all"
        },
        {
          "name": "InputGroup",
          "as": "InputGroup",
          "from": "primevue/inputgroup",
          "export": "default",
          "filePath": "primevue/inputgroup",
          "global": true,
          "mode": "all"
        },
        {
          "name": "InputGroupAddon",
          "as": "InputGroupAddon",
          "from": "primevue/inputgroupaddon",
          "export": "default",
          "filePath": "primevue/inputgroupaddon",
          "global": true,
          "mode": "all"
        },
        {
          "name": "InputIcon",
          "as": "InputIcon",
          "from": "primevue/inputicon",
          "export": "default",
          "filePath": "primevue/inputicon",
          "global": true,
          "mode": "all"
        },
        {
          "name": "InputMask",
          "as": "InputMask",
          "from": "primevue/inputmask",
          "export": "default",
          "filePath": "primevue/inputmask",
          "global": true,
          "mode": "all"
        },
        {
          "name": "InputNumber",
          "as": "InputNumber",
          "from": "primevue/inputnumber",
          "export": "default",
          "filePath": "primevue/inputnumber",
          "global": true,
          "mode": "all"
        },
        {
          "name": "InputOtp",
          "as": "InputOtp",
          "from": "primevue/inputotp",
          "export": "default",
          "filePath": "primevue/inputotp",
          "global": true,
          "mode": "all"
        },
        {
          "name": "InputSwitch",
          "as": "InputSwitch",
          "from": "primevue/inputswitch",
          "export": "default",
          "filePath": "primevue/inputswitch",
          "global": true,
          "mode": "all"
        },
        {
          "name": "InputText",
          "as": "InputText",
          "from": "primevue/inputtext",
          "export": "default",
          "filePath": "primevue/inputtext",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Knob",
          "as": "Knob",
          "from": "primevue/knob",
          "export": "default",
          "filePath": "primevue/knob",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Listbox",
          "as": "Listbox",
          "from": "primevue/listbox",
          "export": "default",
          "filePath": "primevue/listbox",
          "global": true,
          "mode": "all"
        },
        {
          "name": "MultiSelect",
          "as": "MultiSelect",
          "from": "primevue/multiselect",
          "export": "default",
          "filePath": "primevue/multiselect",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Password",
          "as": "Password",
          "from": "primevue/password",
          "export": "default",
          "filePath": "primevue/password",
          "global": true,
          "mode": "all"
        },
        {
          "name": "RadioButton",
          "as": "RadioButton",
          "from": "primevue/radiobutton",
          "export": "default",
          "filePath": "primevue/radiobutton",
          "global": true,
          "mode": "all"
        },
        {
          "name": "RadioButtonGroup",
          "as": "RadioButtonGroup",
          "from": "primevue/radiobuttongroup",
          "export": "default",
          "filePath": "primevue/radiobuttongroup",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Rating",
          "as": "Rating",
          "from": "primevue/rating",
          "export": "default",
          "filePath": "primevue/rating",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Select",
          "as": "Select",
          "from": "primevue/select",
          "export": "default",
          "filePath": "primevue/select",
          "global": true,
          "mode": "all"
        },
        {
          "name": "SelectButton",
          "as": "SelectButton",
          "from": "primevue/selectbutton",
          "export": "default",
          "filePath": "primevue/selectbutton",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Slider",
          "as": "Slider",
          "from": "primevue/slider",
          "export": "default",
          "filePath": "primevue/slider",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Textarea",
          "as": "Textarea",
          "from": "primevue/textarea",
          "export": "default",
          "filePath": "primevue/textarea",
          "global": true,
          "mode": "all"
        },
        {
          "name": "ToggleButton",
          "as": "ToggleButton",
          "from": "primevue/togglebutton",
          "export": "default",
          "filePath": "primevue/togglebutton",
          "global": true,
          "mode": "all"
        },
        {
          "name": "ToggleSwitch",
          "as": "ToggleSwitch",
          "from": "primevue/toggleswitch",
          "export": "default",
          "filePath": "primevue/toggleswitch",
          "global": true,
          "mode": "all"
        },
        {
          "name": "TreeSelect",
          "as": "TreeSelect",
          "from": "primevue/treeselect",
          "export": "default",
          "filePath": "primevue/treeselect",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Button",
          "as": "Button",
          "from": "primevue/button",
          "export": "default",
          "filePath": "primevue/button",
          "global": true,
          "mode": "all"
        },
        {
          "name": "ButtonGroup",
          "as": "ButtonGroup",
          "from": "primevue/buttongroup",
          "export": "default",
          "filePath": "primevue/buttongroup",
          "global": true,
          "mode": "all"
        },
        {
          "name": "SpeedDial",
          "as": "SpeedDial",
          "from": "primevue/speeddial",
          "export": "default",
          "filePath": "primevue/speeddial",
          "global": true,
          "mode": "all"
        },
        {
          "name": "SplitButton",
          "as": "SplitButton",
          "from": "primevue/splitbutton",
          "export": "default",
          "filePath": "primevue/splitbutton",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Column",
          "as": "Column",
          "from": "primevue/column",
          "export": "default",
          "filePath": "primevue/column",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Row",
          "as": "Row",
          "from": "primevue/row",
          "export": "default",
          "filePath": "primevue/row",
          "global": true,
          "mode": "all"
        },
        {
          "name": "ColumnGroup",
          "as": "ColumnGroup",
          "from": "primevue/columngroup",
          "export": "default",
          "filePath": "primevue/columngroup",
          "global": true,
          "mode": "all"
        },
        {
          "name": "DataTable",
          "as": "DataTable",
          "from": "primevue/datatable",
          "export": "default",
          "filePath": "primevue/datatable",
          "global": true,
          "mode": "all"
        },
        {
          "name": "DataView",
          "as": "DataView",
          "from": "primevue/dataview",
          "export": "default",
          "filePath": "primevue/dataview",
          "global": true,
          "mode": "all"
        },
        {
          "name": "OrderList",
          "as": "OrderList",
          "from": "primevue/orderlist",
          "export": "default",
          "filePath": "primevue/orderlist",
          "global": true,
          "mode": "all"
        },
        {
          "name": "OrganizationChart",
          "as": "OrganizationChart",
          "from": "primevue/organizationchart",
          "export": "default",
          "filePath": "primevue/organizationchart",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Paginator",
          "as": "Paginator",
          "from": "primevue/paginator",
          "export": "default",
          "filePath": "primevue/paginator",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PickList",
          "as": "PickList",
          "from": "primevue/picklist",
          "export": "default",
          "filePath": "primevue/picklist",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Tree",
          "as": "Tree",
          "from": "primevue/tree",
          "export": "default",
          "filePath": "primevue/tree",
          "global": true,
          "mode": "all"
        },
        {
          "name": "TreeTable",
          "as": "TreeTable",
          "from": "primevue/treetable",
          "export": "default",
          "filePath": "primevue/treetable",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Timeline",
          "as": "Timeline",
          "from": "primevue/timeline",
          "export": "default",
          "filePath": "primevue/timeline",
          "global": true,
          "mode": "all"
        },
        {
          "name": "VirtualScroller",
          "as": "VirtualScroller",
          "from": "primevue/virtualscroller",
          "export": "default",
          "filePath": "primevue/virtualscroller",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Accordion",
          "as": "Accordion",
          "from": "primevue/accordion",
          "export": "default",
          "filePath": "primevue/accordion",
          "global": true,
          "mode": "all"
        },
        {
          "name": "AccordionPanel",
          "as": "AccordionPanel",
          "from": "primevue/accordionpanel",
          "export": "default",
          "filePath": "primevue/accordionpanel",
          "global": true,
          "mode": "all"
        },
        {
          "name": "AccordionHeader",
          "as": "AccordionHeader",
          "from": "primevue/accordionheader",
          "export": "default",
          "filePath": "primevue/accordionheader",
          "global": true,
          "mode": "all"
        },
        {
          "name": "AccordionContent",
          "as": "AccordionContent",
          "from": "primevue/accordioncontent",
          "export": "default",
          "filePath": "primevue/accordioncontent",
          "global": true,
          "mode": "all"
        },
        {
          "name": "AccordionTab",
          "as": "AccordionTab",
          "from": "primevue/accordiontab",
          "export": "default",
          "filePath": "primevue/accordiontab",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Card",
          "as": "Card",
          "from": "primevue/card",
          "export": "default",
          "filePath": "primevue/card",
          "global": true,
          "mode": "all"
        },
        {
          "name": "DeferredContent",
          "as": "DeferredContent",
          "from": "primevue/deferredcontent",
          "export": "default",
          "filePath": "primevue/deferredcontent",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Divider",
          "as": "Divider",
          "from": "primevue/divider",
          "export": "default",
          "filePath": "primevue/divider",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Fieldset",
          "as": "Fieldset",
          "from": "primevue/fieldset",
          "export": "default",
          "filePath": "primevue/fieldset",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Panel",
          "as": "Panel",
          "from": "primevue/panel",
          "export": "default",
          "filePath": "primevue/panel",
          "global": true,
          "mode": "all"
        },
        {
          "name": "ScrollPanel",
          "as": "ScrollPanel",
          "from": "primevue/scrollpanel",
          "export": "default",
          "filePath": "primevue/scrollpanel",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Splitter",
          "as": "Splitter",
          "from": "primevue/splitter",
          "export": "default",
          "filePath": "primevue/splitter",
          "global": true,
          "mode": "all"
        },
        {
          "name": "SplitterPanel",
          "as": "SplitterPanel",
          "from": "primevue/splitterpanel",
          "export": "default",
          "filePath": "primevue/splitterpanel",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Stepper",
          "as": "Stepper",
          "from": "primevue/stepper",
          "export": "default",
          "filePath": "primevue/stepper",
          "global": true,
          "mode": "all"
        },
        {
          "name": "StepList",
          "as": "StepList",
          "from": "primevue/steplist",
          "export": "default",
          "filePath": "primevue/steplist",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Step",
          "as": "Step",
          "from": "primevue/step",
          "export": "default",
          "filePath": "primevue/step",
          "global": true,
          "mode": "all"
        },
        {
          "name": "StepItem",
          "as": "StepItem",
          "from": "primevue/stepitem",
          "export": "default",
          "filePath": "primevue/stepitem",
          "global": true,
          "mode": "all"
        },
        {
          "name": "StepPanels",
          "as": "StepPanels",
          "from": "primevue/steppanels",
          "export": "default",
          "filePath": "primevue/steppanels",
          "global": true,
          "mode": "all"
        },
        {
          "name": "StepPanel",
          "as": "StepPanel",
          "from": "primevue/steppanel",
          "export": "default",
          "filePath": "primevue/steppanel",
          "global": true,
          "mode": "all"
        },
        {
          "name": "TabView",
          "as": "TabView",
          "from": "primevue/tabview",
          "export": "default",
          "filePath": "primevue/tabview",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Tabs",
          "as": "Tabs",
          "from": "primevue/tabs",
          "export": "default",
          "filePath": "primevue/tabs",
          "global": true,
          "mode": "all"
        },
        {
          "name": "TabList",
          "as": "TabList",
          "from": "primevue/tablist",
          "export": "default",
          "filePath": "primevue/tablist",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Tab",
          "as": "Tab",
          "from": "primevue/tab",
          "export": "default",
          "filePath": "primevue/tab",
          "global": true,
          "mode": "all"
        },
        {
          "name": "TabPanels",
          "as": "TabPanels",
          "from": "primevue/tabpanels",
          "export": "default",
          "filePath": "primevue/tabpanels",
          "global": true,
          "mode": "all"
        },
        {
          "name": "TabPanel",
          "as": "TabPanel",
          "from": "primevue/tabpanel",
          "export": "default",
          "filePath": "primevue/tabpanel",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Toolbar",
          "as": "Toolbar",
          "from": "primevue/toolbar",
          "export": "default",
          "filePath": "primevue/toolbar",
          "global": true,
          "mode": "all"
        },
        {
          "name": "ConfirmDialog",
          "use": {
            "as": "ConfirmationService"
          },
          "as": "ConfirmDialog",
          "from": "primevue/confirmdialog",
          "export": "default",
          "filePath": "primevue/confirmdialog",
          "global": true,
          "mode": "all"
        },
        {
          "name": "ConfirmPopup",
          "use": {
            "as": "ConfirmationService"
          },
          "as": "ConfirmPopup",
          "from": "primevue/confirmpopup",
          "export": "default",
          "filePath": "primevue/confirmpopup",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Dialog",
          "as": "Dialog",
          "from": "primevue/dialog",
          "export": "default",
          "filePath": "primevue/dialog",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Drawer",
          "as": "Drawer",
          "from": "primevue/drawer",
          "export": "default",
          "filePath": "primevue/drawer",
          "global": true,
          "mode": "all"
        },
        {
          "name": "DynamicDialog",
          "use": {
            "as": "DialogService"
          },
          "as": "DynamicDialog",
          "from": "primevue/dynamicdialog",
          "export": "default",
          "filePath": "primevue/dynamicdialog",
          "global": true,
          "mode": "all"
        },
        {
          "name": "OverlayPanel",
          "as": "OverlayPanel",
          "from": "primevue/overlaypanel",
          "export": "default",
          "filePath": "primevue/overlaypanel",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Popover",
          "as": "Popover",
          "from": "primevue/popover",
          "export": "default",
          "filePath": "primevue/popover",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Sidebar",
          "as": "Sidebar",
          "from": "primevue/sidebar",
          "export": "default",
          "filePath": "primevue/sidebar",
          "global": true,
          "mode": "all"
        },
        {
          "name": "FileUpload",
          "as": "FileUpload",
          "from": "primevue/fileupload",
          "export": "default",
          "filePath": "primevue/fileupload",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Breadcrumb",
          "as": "Breadcrumb",
          "from": "primevue/breadcrumb",
          "export": "default",
          "filePath": "primevue/breadcrumb",
          "global": true,
          "mode": "all"
        },
        {
          "name": "ContextMenu",
          "as": "ContextMenu",
          "from": "primevue/contextmenu",
          "export": "default",
          "filePath": "primevue/contextmenu",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Dock",
          "as": "Dock",
          "from": "primevue/dock",
          "export": "default",
          "filePath": "primevue/dock",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Menu",
          "as": "Menu",
          "from": "primevue/menu",
          "export": "default",
          "filePath": "primevue/menu",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Menubar",
          "as": "Menubar",
          "from": "primevue/menubar",
          "export": "default",
          "filePath": "primevue/menubar",
          "global": true,
          "mode": "all"
        },
        {
          "name": "MegaMenu",
          "as": "MegaMenu",
          "from": "primevue/megamenu",
          "export": "default",
          "filePath": "primevue/megamenu",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PanelMenu",
          "as": "PanelMenu",
          "from": "primevue/panelmenu",
          "export": "default",
          "filePath": "primevue/panelmenu",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Steps",
          "as": "Steps",
          "from": "primevue/steps",
          "export": "default",
          "filePath": "primevue/steps",
          "global": true,
          "mode": "all"
        },
        {
          "name": "TabMenu",
          "as": "TabMenu",
          "from": "primevue/tabmenu",
          "export": "default",
          "filePath": "primevue/tabmenu",
          "global": true,
          "mode": "all"
        },
        {
          "name": "TieredMenu",
          "as": "TieredMenu",
          "from": "primevue/tieredmenu",
          "export": "default",
          "filePath": "primevue/tieredmenu",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Message",
          "as": "Message",
          "from": "primevue/message",
          "export": "default",
          "filePath": "primevue/message",
          "global": true,
          "mode": "all"
        },
        {
          "name": "InlineMessage",
          "as": "InlineMessage",
          "from": "primevue/inlinemessage",
          "export": "default",
          "filePath": "primevue/inlinemessage",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Toast",
          "use": {
            "as": "ToastService"
          },
          "as": "Toast",
          "from": "primevue/toast",
          "export": "default",
          "filePath": "primevue/toast",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Carousel",
          "as": "Carousel",
          "from": "primevue/carousel",
          "export": "default",
          "filePath": "primevue/carousel",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Galleria",
          "as": "Galleria",
          "from": "primevue/galleria",
          "export": "default",
          "filePath": "primevue/galleria",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Image",
          "as": "Image",
          "from": "primevue/image",
          "export": "default",
          "filePath": "primevue/image",
          "global": true,
          "mode": "all"
        },
        {
          "name": "ImageCompare",
          "as": "ImageCompare",
          "from": "primevue/imagecompare",
          "export": "default",
          "filePath": "primevue/imagecompare",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Avatar",
          "as": "Avatar",
          "from": "primevue/avatar",
          "export": "default",
          "filePath": "primevue/avatar",
          "global": true,
          "mode": "all"
        },
        {
          "name": "AvatarGroup",
          "as": "AvatarGroup",
          "from": "primevue/avatargroup",
          "export": "default",
          "filePath": "primevue/avatargroup",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Badge",
          "as": "Badge",
          "from": "primevue/badge",
          "export": "default",
          "filePath": "primevue/badge",
          "global": true,
          "mode": "all"
        },
        {
          "name": "BlockUI",
          "as": "BlockUI",
          "from": "primevue/blockui",
          "export": "default",
          "filePath": "primevue/blockui",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Chip",
          "as": "Chip",
          "from": "primevue/chip",
          "export": "default",
          "filePath": "primevue/chip",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Inplace",
          "as": "Inplace",
          "from": "primevue/inplace",
          "export": "default",
          "filePath": "primevue/inplace",
          "global": true,
          "mode": "all"
        },
        {
          "name": "MeterGroup",
          "as": "MeterGroup",
          "from": "primevue/metergroup",
          "export": "default",
          "filePath": "primevue/metergroup",
          "global": true,
          "mode": "all"
        },
        {
          "name": "OverlayBadge",
          "as": "OverlayBadge",
          "from": "primevue/overlaybadge",
          "export": "default",
          "filePath": "primevue/overlaybadge",
          "global": true,
          "mode": "all"
        },
        {
          "name": "ScrollTop",
          "as": "ScrollTop",
          "from": "primevue/scrolltop",
          "export": "default",
          "filePath": "primevue/scrolltop",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Skeleton",
          "as": "Skeleton",
          "from": "primevue/skeleton",
          "export": "default",
          "filePath": "primevue/skeleton",
          "global": true,
          "mode": "all"
        },
        {
          "name": "ProgressBar",
          "as": "ProgressBar",
          "from": "primevue/progressbar",
          "export": "default",
          "filePath": "primevue/progressbar",
          "global": true,
          "mode": "all"
        },
        {
          "name": "ProgressSpinner",
          "as": "ProgressSpinner",
          "from": "primevue/progressspinner",
          "export": "default",
          "filePath": "primevue/progressspinner",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Tag",
          "as": "Tag",
          "from": "primevue/tag",
          "export": "default",
          "filePath": "primevue/tag",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Terminal",
          "as": "Terminal",
          "from": "primevue/terminal",
          "export": "default",
          "filePath": "primevue/terminal",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Form",
          "from": "@primevue/forms/form",
          "as": "Form",
          "export": "default",
          "filePath": "@primevue/forms/form",
          "global": true,
          "mode": "all"
        },
        {
          "name": "FormField",
          "from": "@primevue/forms/formfield",
          "as": "FormField",
          "export": "default",
          "filePath": "@primevue/forms/formfield",
          "global": true,
          "mode": "all"
        }
      ],
      "directives": [
        {
          "name": "badge",
          "as": "BadgeDirective",
          "from": "primevue/badgedirective"
        },
        {
          "name": "tooltip",
          "as": "Tooltip",
          "from": "primevue/tooltip"
        },
        {
          "name": "ripple",
          "as": "Ripple",
          "from": "primevue/ripple"
        },
        {
          "name": "styleclass",
          "as": "StyleClass",
          "from": "primevue/styleclass"
        },
        {
          "name": "focustrap",
          "as": "FocusTrap",
          "from": "primevue/focustrap"
        },
        {
          "name": "animateonscroll",
          "as": "AnimateOnScroll",
          "from": "primevue/animateonscroll"
        },
        {
          "name": "keyfilter",
          "as": "KeyFilter",
          "from": "primevue/keyfilter"
        }
      ],
      "composables": [
        {
          "name": "usePrimeVue",
          "as": "usePrimeVue",
          "from": "primevue/config"
        },
        {
          "name": "useStyle",
          "as": "useStyle",
          "from": "primevue/usestyle"
        },
        {
          "name": "useConfirm",
          "as": "useConfirm",
          "from": "primevue/useconfirm"
        },
        {
          "name": "useToast",
          "as": "useToast",
          "from": "primevue/usetoast"
        },
        {
          "name": "useDialog",
          "as": "useDialog",
          "from": "primevue/usedialog"
        }
      ],
      "config": [
        {
          "name": "PrimeVue",
          "as": "PrimeVue",
          "from": "primevue/config"
        }
      ],
      "services": [
        {
          "name": "ConfirmationService",
          "as": "ConfirmationService",
          "from": "primevue/confirmationservice"
        },
        {
          "name": "DialogService",
          "as": "DialogService",
          "from": "primevue/dialogservice"
        },
        {
          "name": "ToastService",
          "as": "ToastService",
          "from": "primevue/toastservice"
        }
      ],
      "styles": [
        {
          "name": "BaseStyle",
          "as": "BaseStyle",
          "from": "@primevue/core/base/style"
        },
        {
          "name": "BaseComponentStyle",
          "as": "BaseComponentStyle",
          "from": "@primevue/core/basecomponent/style"
        },
        {
          "name": "AutoCompleteStyle",
          "as": "AutoCompleteStyle",
          "from": "primevue/autocomplete/style"
        },
        {
          "name": "CalendarStyle",
          "as": "CalendarStyle",
          "from": "primevue/calendar/style"
        },
        {
          "name": "CascadeSelectStyle",
          "as": "CascadeSelectStyle",
          "from": "primevue/cascadeselect/style"
        },
        {
          "name": "CheckboxStyle",
          "as": "CheckboxStyle",
          "from": "primevue/checkbox/style"
        },
        {
          "name": "CheckboxGroupStyle",
          "as": "CheckboxGroupStyle",
          "from": "primevue/checkboxgroup/style"
        },
        {
          "name": "ChipsStyle",
          "as": "ChipsStyle",
          "from": "primevue/chips/style"
        },
        {
          "name": "ColorPickerStyle",
          "as": "ColorPickerStyle",
          "from": "primevue/colorpicker/style"
        },
        {
          "name": "DatePickerStyle",
          "as": "DatePickerStyle",
          "from": "primevue/datepicker/style"
        },
        {
          "name": "DropdownStyle",
          "as": "DropdownStyle",
          "from": "primevue/dropdown/style"
        },
        {
          "name": "FloatLabelStyle",
          "as": "FloatLabelStyle",
          "from": "primevue/floatlabel/style"
        },
        {
          "name": "FluidStyle",
          "as": "FluidStyle",
          "from": "primevue/fluid/style"
        },
        {
          "name": "IconFieldStyle",
          "as": "IconFieldStyle",
          "from": "primevue/iconfield/style"
        },
        {
          "name": "IftaLabelStyle",
          "as": "IftaLabelStyle",
          "from": "primevue/iftalabel/style"
        },
        {
          "name": "InputChipsStyle",
          "as": "InputChipsStyle",
          "from": "primevue/inputchips/style"
        },
        {
          "name": "InputGroupStyle",
          "as": "InputGroupStyle",
          "from": "primevue/inputgroup/style"
        },
        {
          "name": "InputGroupAddonStyle",
          "as": "InputGroupAddonStyle",
          "from": "primevue/inputgroupaddon/style"
        },
        {
          "name": "InputIconStyle",
          "as": "InputIconStyle",
          "from": "primevue/inputicon/style"
        },
        {
          "name": "InputMaskStyle",
          "as": "InputMaskStyle",
          "from": "primevue/inputmask/style"
        },
        {
          "name": "InputNumberStyle",
          "as": "InputNumberStyle",
          "from": "primevue/inputnumber/style"
        },
        {
          "name": "InputOtpStyle",
          "as": "InputOtpStyle",
          "from": "primevue/inputotp/style"
        },
        {
          "name": "InputSwitchStyle",
          "as": "InputSwitchStyle",
          "from": "primevue/inputswitch/style"
        },
        {
          "name": "InputTextStyle",
          "as": "InputTextStyle",
          "from": "primevue/inputtext/style"
        },
        {
          "name": "KnobStyle",
          "as": "KnobStyle",
          "from": "primevue/knob/style"
        },
        {
          "name": "ListboxStyle",
          "as": "ListboxStyle",
          "from": "primevue/listbox/style"
        },
        {
          "name": "MultiSelectStyle",
          "as": "MultiSelectStyle",
          "from": "primevue/multiselect/style"
        },
        {
          "name": "PasswordStyle",
          "as": "PasswordStyle",
          "from": "primevue/password/style"
        },
        {
          "name": "RadioButtonStyle",
          "as": "RadioButtonStyle",
          "from": "primevue/radiobutton/style"
        },
        {
          "name": "RadioButtonGroupStyle",
          "as": "RadioButtonGroupStyle",
          "from": "primevue/radiobuttongroup/style"
        },
        {
          "name": "RatingStyle",
          "as": "RatingStyle",
          "from": "primevue/rating/style"
        },
        {
          "name": "SelectStyle",
          "as": "SelectStyle",
          "from": "primevue/select/style"
        },
        {
          "name": "SelectButtonStyle",
          "as": "SelectButtonStyle",
          "from": "primevue/selectbutton/style"
        },
        {
          "name": "SliderStyle",
          "as": "SliderStyle",
          "from": "primevue/slider/style"
        },
        {
          "name": "TextareaStyle",
          "as": "TextareaStyle",
          "from": "primevue/textarea/style"
        },
        {
          "name": "ToggleButtonStyle",
          "as": "ToggleButtonStyle",
          "from": "primevue/togglebutton/style"
        },
        {
          "name": "ToggleSwitchStyle",
          "as": "ToggleSwitchStyle",
          "from": "primevue/toggleswitch/style"
        },
        {
          "name": "TreeSelectStyle",
          "as": "TreeSelectStyle",
          "from": "primevue/treeselect/style"
        },
        {
          "name": "ButtonStyle",
          "as": "ButtonStyle",
          "from": "primevue/button/style"
        },
        {
          "name": "ButtonGroupStyle",
          "as": "ButtonGroupStyle",
          "from": "primevue/buttongroup/style"
        },
        {
          "name": "SpeedDialStyle",
          "as": "SpeedDialStyle",
          "from": "primevue/speeddial/style"
        },
        {
          "name": "SplitButtonStyle",
          "as": "SplitButtonStyle",
          "from": "primevue/splitbutton/style"
        },
        {
          "name": "ColumnStyle",
          "as": "ColumnStyle",
          "from": "primevue/column/style"
        },
        {
          "name": "RowStyle",
          "as": "RowStyle",
          "from": "primevue/row/style"
        },
        {
          "name": "ColumnGroupStyle",
          "as": "ColumnGroupStyle",
          "from": "primevue/columngroup/style"
        },
        {
          "name": "DataTableStyle",
          "as": "DataTableStyle",
          "from": "primevue/datatable/style"
        },
        {
          "name": "DataViewStyle",
          "as": "DataViewStyle",
          "from": "primevue/dataview/style"
        },
        {
          "name": "OrderListStyle",
          "as": "OrderListStyle",
          "from": "primevue/orderlist/style"
        },
        {
          "name": "OrganizationChartStyle",
          "as": "OrganizationChartStyle",
          "from": "primevue/organizationchart/style"
        },
        {
          "name": "PaginatorStyle",
          "as": "PaginatorStyle",
          "from": "primevue/paginator/style"
        },
        {
          "name": "PickListStyle",
          "as": "PickListStyle",
          "from": "primevue/picklist/style"
        },
        {
          "name": "TreeStyle",
          "as": "TreeStyle",
          "from": "primevue/tree/style"
        },
        {
          "name": "TreeTableStyle",
          "as": "TreeTableStyle",
          "from": "primevue/treetable/style"
        },
        {
          "name": "TimelineStyle",
          "as": "TimelineStyle",
          "from": "primevue/timeline/style"
        },
        {
          "name": "VirtualScrollerStyle",
          "as": "VirtualScrollerStyle",
          "from": "primevue/virtualscroller/style"
        },
        {
          "name": "AccordionStyle",
          "as": "AccordionStyle",
          "from": "primevue/accordion/style"
        },
        {
          "name": "AccordionPanelStyle",
          "as": "AccordionPanelStyle",
          "from": "primevue/accordionpanel/style"
        },
        {
          "name": "AccordionHeaderStyle",
          "as": "AccordionHeaderStyle",
          "from": "primevue/accordionheader/style"
        },
        {
          "name": "AccordionContentStyle",
          "as": "AccordionContentStyle",
          "from": "primevue/accordioncontent/style"
        },
        {
          "name": "AccordionTabStyle",
          "as": "AccordionTabStyle",
          "from": "primevue/accordiontab/style"
        },
        {
          "name": "CardStyle",
          "as": "CardStyle",
          "from": "primevue/card/style"
        },
        {
          "name": "DeferredContentStyle",
          "as": "DeferredContentStyle",
          "from": "primevue/deferredcontent/style"
        },
        {
          "name": "DividerStyle",
          "as": "DividerStyle",
          "from": "primevue/divider/style"
        },
        {
          "name": "FieldsetStyle",
          "as": "FieldsetStyle",
          "from": "primevue/fieldset/style"
        },
        {
          "name": "PanelStyle",
          "as": "PanelStyle",
          "from": "primevue/panel/style"
        },
        {
          "name": "ScrollPanelStyle",
          "as": "ScrollPanelStyle",
          "from": "primevue/scrollpanel/style"
        },
        {
          "name": "SplitterStyle",
          "as": "SplitterStyle",
          "from": "primevue/splitter/style"
        },
        {
          "name": "SplitterPanelStyle",
          "as": "SplitterPanelStyle",
          "from": "primevue/splitterpanel/style"
        },
        {
          "name": "StepperStyle",
          "as": "StepperStyle",
          "from": "primevue/stepper/style"
        },
        {
          "name": "StepListStyle",
          "as": "StepListStyle",
          "from": "primevue/steplist/style"
        },
        {
          "name": "StepStyle",
          "as": "StepStyle",
          "from": "primevue/step/style"
        },
        {
          "name": "StepItemStyle",
          "as": "StepItemStyle",
          "from": "primevue/stepitem/style"
        },
        {
          "name": "StepPanelsStyle",
          "as": "StepPanelsStyle",
          "from": "primevue/steppanels/style"
        },
        {
          "name": "StepPanelStyle",
          "as": "StepPanelStyle",
          "from": "primevue/steppanel/style"
        },
        {
          "name": "TabViewStyle",
          "as": "TabViewStyle",
          "from": "primevue/tabview/style"
        },
        {
          "name": "TabsStyle",
          "as": "TabsStyle",
          "from": "primevue/tabs/style"
        },
        {
          "name": "TabListStyle",
          "as": "TabListStyle",
          "from": "primevue/tablist/style"
        },
        {
          "name": "TabStyle",
          "as": "TabStyle",
          "from": "primevue/tab/style"
        },
        {
          "name": "TabPanelsStyle",
          "as": "TabPanelsStyle",
          "from": "primevue/tabpanels/style"
        },
        {
          "name": "TabPanelStyle",
          "as": "TabPanelStyle",
          "from": "primevue/tabpanel/style"
        },
        {
          "name": "ToolbarStyle",
          "as": "ToolbarStyle",
          "from": "primevue/toolbar/style"
        },
        {
          "name": "ConfirmDialogStyle",
          "as": "ConfirmDialogStyle",
          "from": "primevue/confirmdialog/style"
        },
        {
          "name": "ConfirmPopupStyle",
          "as": "ConfirmPopupStyle",
          "from": "primevue/confirmpopup/style"
        },
        {
          "name": "DialogStyle",
          "as": "DialogStyle",
          "from": "primevue/dialog/style"
        },
        {
          "name": "DrawerStyle",
          "as": "DrawerStyle",
          "from": "primevue/drawer/style"
        },
        {
          "name": "DynamicDialogStyle",
          "as": "DynamicDialogStyle",
          "from": "primevue/dynamicdialog/style"
        },
        {
          "name": "OverlayPanelStyle",
          "as": "OverlayPanelStyle",
          "from": "primevue/overlaypanel/style"
        },
        {
          "name": "PopoverStyle",
          "as": "PopoverStyle",
          "from": "primevue/popover/style"
        },
        {
          "name": "SidebarStyle",
          "as": "SidebarStyle",
          "from": "primevue/sidebar/style"
        },
        {
          "name": "FileUploadStyle",
          "as": "FileUploadStyle",
          "from": "primevue/fileupload/style"
        },
        {
          "name": "BreadcrumbStyle",
          "as": "BreadcrumbStyle",
          "from": "primevue/breadcrumb/style"
        },
        {
          "name": "ContextMenuStyle",
          "as": "ContextMenuStyle",
          "from": "primevue/contextmenu/style"
        },
        {
          "name": "DockStyle",
          "as": "DockStyle",
          "from": "primevue/dock/style"
        },
        {
          "name": "MenuStyle",
          "as": "MenuStyle",
          "from": "primevue/menu/style"
        },
        {
          "name": "MenubarStyle",
          "as": "MenubarStyle",
          "from": "primevue/menubar/style"
        },
        {
          "name": "MegaMenuStyle",
          "as": "MegaMenuStyle",
          "from": "primevue/megamenu/style"
        },
        {
          "name": "PanelMenuStyle",
          "as": "PanelMenuStyle",
          "from": "primevue/panelmenu/style"
        },
        {
          "name": "StepsStyle",
          "as": "StepsStyle",
          "from": "primevue/steps/style"
        },
        {
          "name": "TabMenuStyle",
          "as": "TabMenuStyle",
          "from": "primevue/tabmenu/style"
        },
        {
          "name": "TieredMenuStyle",
          "as": "TieredMenuStyle",
          "from": "primevue/tieredmenu/style"
        },
        {
          "name": "MessageStyle",
          "as": "MessageStyle",
          "from": "primevue/message/style"
        },
        {
          "name": "InlineMessageStyle",
          "as": "InlineMessageStyle",
          "from": "primevue/inlinemessage/style"
        },
        {
          "name": "ToastStyle",
          "as": "ToastStyle",
          "from": "primevue/toast/style"
        },
        {
          "name": "CarouselStyle",
          "as": "CarouselStyle",
          "from": "primevue/carousel/style"
        },
        {
          "name": "GalleriaStyle",
          "as": "GalleriaStyle",
          "from": "primevue/galleria/style"
        },
        {
          "name": "ImageStyle",
          "as": "ImageStyle",
          "from": "primevue/image/style"
        },
        {
          "name": "ImageCompareStyle",
          "as": "ImageCompareStyle",
          "from": "primevue/imagecompare/style"
        },
        {
          "name": "AvatarStyle",
          "as": "AvatarStyle",
          "from": "primevue/avatar/style"
        },
        {
          "name": "AvatarGroupStyle",
          "as": "AvatarGroupStyle",
          "from": "primevue/avatargroup/style"
        },
        {
          "name": "BadgeStyle",
          "as": "BadgeStyle",
          "from": "primevue/badge/style"
        },
        {
          "name": "BlockUIStyle",
          "as": "BlockUIStyle",
          "from": "primevue/blockui/style"
        },
        {
          "name": "ChipStyle",
          "as": "ChipStyle",
          "from": "primevue/chip/style"
        },
        {
          "name": "InplaceStyle",
          "as": "InplaceStyle",
          "from": "primevue/inplace/style"
        },
        {
          "name": "MeterGroupStyle",
          "as": "MeterGroupStyle",
          "from": "primevue/metergroup/style"
        },
        {
          "name": "OverlayBadgeStyle",
          "as": "OverlayBadgeStyle",
          "from": "primevue/overlaybadge/style"
        },
        {
          "name": "ScrollTopStyle",
          "as": "ScrollTopStyle",
          "from": "primevue/scrolltop/style"
        },
        {
          "name": "SkeletonStyle",
          "as": "SkeletonStyle",
          "from": "primevue/skeleton/style"
        },
        {
          "name": "ProgressBarStyle",
          "as": "ProgressBarStyle",
          "from": "primevue/progressbar/style"
        },
        {
          "name": "ProgressSpinnerStyle",
          "as": "ProgressSpinnerStyle",
          "from": "primevue/progressspinner/style"
        },
        {
          "name": "TagStyle",
          "as": "TagStyle",
          "from": "primevue/tag/style"
        },
        {
          "name": "TerminalStyle",
          "as": "TerminalStyle",
          "from": "primevue/terminal/style"
        },
        {
          "name": "FormStyle",
          "as": "FormStyle",
          "from": "@primevue/forms/form/style"
        },
        {
          "name": "FormFieldStyle",
          "as": "FormFieldStyle",
          "from": "@primevue/forms/formfield/style"
        },
        {
          "name": "TooltipStyle",
          "as": "TooltipStyle",
          "from": "primevue/tooltip/style"
        },
        {
          "name": "RippleStyle",
          "as": "RippleStyle",
          "from": "primevue/ripple/style"
        },
        {
          "name": "StyleClassStyle",
          "as": "StyleClassStyle",
          "from": "primevue/styleclass/style"
        },
        {
          "name": "FocusTrapStyle",
          "as": "FocusTrapStyle",
          "from": "primevue/focustrap/style"
        },
        {
          "name": "AnimateOnScrollStyle",
          "as": "AnimateOnScrollStyle",
          "from": "primevue/animateonscroll/style"
        },
        {
          "name": "KeyFilterStyle",
          "as": "KeyFilterStyle",
          "from": "primevue/keyfilter/style"
        }
      ],
      "injectStylesAsString": [],
      "injectStylesAsStringToTop": [
        ""
      ]
    },
    "i18n": {
      "baseUrl": "",
      "defaultLocale": "ja",
      "rootRedirect": "",
      "redirectStatusCode": 302,
      "skipSettingLocaleOnNavigate": false,
      "locales": [
        {
          "code": "en",
          "name": "English",
          "language": ""
        },
        {
          "code": "ja",
          "name": "Japanese",
          "language": ""
        },
        {
          "code": "vi",
          "name": "Vietnamese",
          "language": ""
        }
      ],
      "detectBrowserLanguage": {
        "alwaysRedirect": false,
        "cookieCrossOrigin": false,
        "cookieDomain": "",
        "cookieKey": "i18n_redirected",
        "cookieSecure": false,
        "fallbackLocale": "",
        "redirectOn": "root",
        "useCookie": true
      },
      "experimental": {
        "localeDetector": "",
        "typedPages": true,
        "typedOptionsAndMessages": false,
        "alternateLinkCanonicalQueries": true,
        "devCache": false,
        "cacheLifetime": "",
        "stripMessagesPayload": false,
        "preload": false,
        "strictSeo": false,
        "nitroContextDetection": true,
        "httpCacheDuration": 10
      },
      "domainLocales": {
        "en": {
          "domain": ""
        },
        "ja": {
          "domain": ""
        },
        "vi": {
          "domain": ""
        }
      }
    }
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

getContext("nitro-app", {
  asyncContext: false,
  AsyncLocalStorage: void 0
});

const config$1 = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config$1.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

/**
* Nitro internal functions extracted from https://github.com/nitrojs/nitro/blob/v2/src/runtime/internal/utils.ts
*/
function isJsonRequest(event) {
	// If the client specifically requests HTML, then avoid classifying as JSON.
	if (hasReqHeader(event, "accept", "text/html")) {
		return false;
	}
	return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function hasReqHeader(event, name, includes) {
	const value = getRequestHeader(event, name);
	return value && typeof value === "string" && value.toLowerCase().includes(includes);
}

const iframeStorageBridge = (nonce) => `
(function () {
  const NONCE = ${JSON.stringify(nonce)};
  const memoryStore = Object.create(null);

  const post = (type, payload) => {
    window.parent.postMessage({ type, nonce: NONCE, ...payload }, '*');
  };

  const isValid = (data) => data && data.nonce === NONCE;

  const mockStorage = {
    getItem(key) {
      return Object.hasOwn(memoryStore, key)
        ? memoryStore[key]
        : null;
    },
    setItem(key, value) {
      const v = String(value);
      memoryStore[key] = v;
      post('storage-set', { key, value: v });
    },
    removeItem(key) {
      delete memoryStore[key];
      post('storage-remove', { key });
    },
    clear() {
      for (const key of Object.keys(memoryStore))
        delete memoryStore[key];
      post('storage-clear', {});
    },
    key(index) {
      const keys = Object.keys(memoryStore);
      return keys[index] ?? null;
    },
    get length() {
      return Object.keys(memoryStore).length;
    }
  };

  const defineLocalStorage = () => {
    try {
      Object.defineProperty(window, 'localStorage', {
        value: mockStorage,
        writable: false,
        configurable: true
      });
    } catch {
      window.localStorage = mockStorage;
    }
  };

  defineLocalStorage();

  window.addEventListener('message', (event) => {
    const data = event.data;
    if (!isValid(data) || data.type !== 'storage-sync-data') return;

    const incoming = data.data || {};
    for (const key of Object.keys(incoming))
      memoryStore[key] = incoming[key];

    if (typeof window.initTheme === 'function')
      window.initTheme();
    window.dispatchEvent(new Event('storage-ready'));
  });

  // Clipboard API is unavailable in data: URL iframe, so we use postMessage
  document.addEventListener('DOMContentLoaded', function() {
    window.copyErrorMessage = function(button) {
      post('clipboard-copy', { text: button.dataset.errorText });
      button.classList.add('copied');
      setTimeout(function() { button.classList.remove('copied'); }, 2000);
    };
  });

  post('storage-sync-request', {});
})();
`;
const parentStorageBridge = (nonce) => `
(function () {
  const host = document.querySelector('nuxt-error-overlay');
  if (!host) return;

  const NONCE = ${JSON.stringify(nonce)};
  const isValid = (data) => data && data.nonce === NONCE;

  // Handle clipboard copy from iframe
  window.addEventListener('message', function(e) {
    if (isValid(e) && e.data.type === 'clipboard-copy') {
      navigator.clipboard.writeText(e.data.text).catch(function() {});
    }
  });

  const collectLocalStorage = () => {
    const all = {};
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k != null) all[k] = localStorage.getItem(k);
    }
    return all;
  };

  const attachWhenReady = () => {
    const root = host.shadowRoot;
    if (!root)
      return false;
    const iframe = root.getElementById('frame');
    if (!iframe || !iframe.contentWindow)
      return false;

    const handlers = {
      'storage-set': (d) => localStorage.setItem(d.key, d.value),
      'storage-remove': (d) => localStorage.removeItem(d.key),
      'storage-clear': () => localStorage.clear(),
      'storage-sync-request': () => {
        iframe.contentWindow.postMessage({
          type: 'storage-sync-data',
          data: collectLocalStorage(),
          nonce: NONCE
        }, '*');
      }
    };

    window.addEventListener('message', (event) => {
      const data = event.data;
      if (!isValid(data)) return;
      const fn = handlers[data.type];
      if (fn) fn(data);
    });

    return true;
  };

  if (attachWhenReady())
    return;

  const obs = new MutationObserver(() => {
    if (attachWhenReady())
      obs.disconnect();
  });

  obs.observe(host, { childList: true, subtree: true });
})();
`;
const errorCSS = `
:host {
  --preview-width: 240px;
  --preview-height: 180px;
  --base-width: 1200px;
  --base-height: 900px;
  --z-base: 999999998;
  --error-pip-left: auto;
  --error-pip-top: auto;
  --error-pip-right: 5px;
  --error-pip-bottom: 5px;
  --error-pip-origin: bottom right;
  --app-preview-left: auto;
  --app-preview-top: auto;
  --app-preview-right: 5px;
  --app-preview-bottom: 5px;
  all: initial;
  display: contents;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
#frame {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  border: none;
  z-index: var(--z-base);
}
#frame[inert] {
  left: var(--error-pip-left);
  top: var(--error-pip-top);
  right: var(--error-pip-right);
  bottom: var(--error-pip-bottom);
  width: var(--base-width);
  height: var(--base-height);
  transform: scale(calc(240 / 1200));
  transform-origin: var(--error-pip-origin);
  overflow: hidden;
  border-radius: calc(1200 * 8px / 240);
}
#preview {
  position: fixed;
  left: var(--app-preview-left);
  top: var(--app-preview-top);
  right: var(--app-preview-right);
  bottom: var(--app-preview-bottom);
  width: var(--preview-width);
  height: var(--preview-height);
  overflow: hidden;
  border-radius: 6px;
  pointer-events: none;
  z-index: var(--z-base);
  background: white;
  display: none;
}
#preview iframe {
  transform-origin: var(--error-pip-origin);
}
#frame:not([inert]) + #preview {
  display: block;
}
#toggle {
  position: fixed;
  left: var(--app-preview-left);
  top: var(--app-preview-top);
  right: calc(var(--app-preview-right) - 3px);
  bottom: calc(var(--app-preview-bottom) - 3px);
  width: var(--preview-width);
  height: var(--preview-height);
  background: none;
  border: 3px solid #00DC82;
  border-radius: 8px;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.2s, box-shadow 0.2s;
  z-index: calc(var(--z-base) + 1);
  display: flex;
  align-items: center;
  justify-content: center;
}
#toggle:hover,
#toggle:focus {
  opacity: 1;
  box-shadow: 0 0 20px rgba(0, 220, 130, 0.6);
}
#toggle:focus-visible {
  outline: 3px solid #00DC82;
  outline-offset: 0;
  box-shadow: 0 0 24px rgba(0, 220, 130, 0.8);
}
#frame[inert] ~ #toggle {
  left: var(--error-pip-left);
  top: var(--error-pip-top);
  right: calc(var(--error-pip-right) - 3px);
  bottom: calc(var(--error-pip-bottom) - 3px);
  cursor: grab;
}
:host(.dragging) #frame[inert] ~ #toggle {
  cursor: grabbing;
}
#frame:not([inert]) ~ #toggle,
#frame:not([inert]) + #preview {
  cursor: grab;
}
:host(.dragging-preview) #frame:not([inert]) ~ #toggle,
:host(.dragging-preview) #frame:not([inert]) + #preview {
  cursor: grabbing;
}

#pip-close {
  position: absolute;
  top: 6px;
  right: 6px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: none;
  background: rgba(0, 0, 0, 0.75);
  color: #fff;
  font-size: 16px;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  pointer-events: auto;
}
#pip-close:focus-visible {
  outline: 2px solid #00DC82;
  outline-offset: 2px;
}

#pip-restore {
  position: fixed;
  right: 16px;
  bottom: 16px;
  padding: 8px 14px;
  border-radius: 999px;
  border: 2px solid #00DC82;
  background: #111;
  color: #fff;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  z-index: calc(var(--z-base) + 2);
  cursor: grab;
}
#pip-restore:focus-visible {
  outline: 2px solid #00DC82;
  outline-offset: 2px;
}
:host(.dragging-restore) #pip-restore {
  cursor: grabbing;
}

#frame[hidden],
#toggle[hidden],
#preview[hidden],
#pip-restore[hidden],
#pip-close[hidden] {
  display: none !important;
}

@media (prefers-reduced-motion: reduce) {
  #toggle {
    transition: none;
  }
}
`;
function webComponentScript(base64HTML, startMinimized) {
	return `
(function () {
  try {
    // =========================
    // Host + Shadow
    // =========================
    const host = document.querySelector('nuxt-error-overlay');
    if (!host)
      return;
    const shadow = host.attachShadow({ mode: 'open' });

    // =========================
    // DOM helpers
    // =========================
    const el = (tag) => document.createElement(tag);
    const on = (node, type, fn, opts) => node.addEventListener(type, fn, opts);
    const hide = (node, v) => node.toggleAttribute('hidden', !!v);
    const setVar = (name, value) => host.style.setProperty(name, value);
    const unsetVar = (name) => host.style.removeProperty(name);

    // =========================
    // Create DOM
    // =========================
    const style = el('style');
    style.textContent = ${JSON.stringify(errorCSS)};

    const iframe = el('iframe');
    iframe.id = 'frame';
    iframe.src = 'data:text/html;base64,${base64HTML}';
    iframe.title = 'Detailed error stack trace';
    iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin');

    const preview = el('div');
    preview.id = 'preview';

    const toggle = el('div');
    toggle.id = 'toggle';
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('role', 'button');
    toggle.setAttribute('tabindex', '0');
    toggle.innerHTML = '<span class="sr-only">Toggle detailed error view</span>';

    const liveRegion = el('div');
    liveRegion.setAttribute('role', 'status');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.className = 'sr-only';

    const pipCloseButton = el('button');
    pipCloseButton.id = 'pip-close';
    pipCloseButton.setAttribute('type', 'button');
    pipCloseButton.setAttribute('aria-label', 'Hide error preview overlay');
    pipCloseButton.innerHTML = '&times;';
    pipCloseButton.hidden = true;
    toggle.appendChild(pipCloseButton);

    const pipRestoreButton = el('button');
    pipRestoreButton.id = 'pip-restore';
    pipRestoreButton.setAttribute('type', 'button');
    pipRestoreButton.setAttribute('aria-label', 'Show error overlay');
    pipRestoreButton.innerHTML = '<span aria-hidden="true">⟲</span><span>Show error overlay</span>';
    pipRestoreButton.hidden = true;

    // Order matters: #frame + #preview adjacency
    shadow.appendChild(style);
    shadow.appendChild(liveRegion);
    shadow.appendChild(iframe);
    shadow.appendChild(preview);
    shadow.appendChild(toggle);
    shadow.appendChild(pipRestoreButton);

    // =========================
    // Constants / keys
    // =========================
    const POS_KEYS = {
      position: 'nuxt-error-overlay:position',
      hiddenPretty: 'nuxt-error-overlay:error-pip:hidden',
      hiddenPreview: 'nuxt-error-overlay:app-preview:hidden'
    };

    const CSS_VARS = {
      pip: {
        left: '--error-pip-left',
        top: '--error-pip-top',
        right: '--error-pip-right',
        bottom: '--error-pip-bottom'
      },
      preview: {
        left: '--app-preview-left',
        top: '--app-preview-top',
        right: '--app-preview-right',
        bottom: '--app-preview-bottom'
      }
    };

    const MIN_GAP = 5;
    const DRAG_THRESHOLD = 2;

    // =========================
    // Local storage safe access + state
    // =========================
    let storageReady = true;
    let isPrettyHidden = false;
    let isPreviewHidden = false;

    const safeGet = (k) => {
      try {
        return localStorage.getItem(k);
      } catch {
        return null;
      }
    };

    const safeSet = (k, v) => {
      if (!storageReady) 
        return;
      try {
        localStorage.setItem(k, v);
      } catch {}
    };

    // =========================
    // Sizing helpers
    // =========================
    const vvSize = () => {
      const v = window.visualViewport;
      return v ? { w: v.width, h: v.height } : { w: window.innerWidth, h: window.innerHeight };
    };

    const previewSize = () => {
      const styles = getComputedStyle(host);
      const w = parseFloat(styles.getPropertyValue('--preview-width')) || 240;
      const h = parseFloat(styles.getPropertyValue('--preview-height')) || 180;
      return { w, h };
    };

    const sizeForTarget = (target) => {
      if (!target)
        return previewSize();
      const rect = target.getBoundingClientRect();
      if (rect.width && rect.height)
        return { w: rect.width, h: rect.height };
      return previewSize();
    };

    // =========================
    // Dock model + offset/alignment calculations
    // =========================
    const dock = { edge: null, offset: null, align: null, gap: null };

    const maxOffsetFor = (edge, size) => {
      const vv = vvSize();
      if (edge === 'left' || edge === 'right')
        return Math.max(MIN_GAP, vv.h - size.h - MIN_GAP);
      return Math.max(MIN_GAP, vv.w - size.w - MIN_GAP);
    };

    const clampOffset = (edge, value, size) => {
      const max = maxOffsetFor(edge, size);
      return Math.min(Math.max(value, MIN_GAP), max);
    };

    const updateDockAlignment = (size) => {
      if (!dock.edge || dock.offset == null)
        return;
      const max = maxOffsetFor(dock.edge, size);
      if (dock.offset <= max / 2) {
        dock.align = 'start';
        dock.gap = dock.offset;
      } else {
        dock.align = 'end';
        dock.gap = Math.max(0, max - dock.offset);
      }
    };

    const appliedOffsetFor = (size) => {
      if (!dock.edge || dock.offset == null)
        return null;
      const max = maxOffsetFor(dock.edge, size);

      if (dock.align === 'end' && typeof dock.gap === 'number') {
        return clampOffset(dock.edge, max - dock.gap, size);
      }
      if (dock.align === 'start' && typeof dock.gap === 'number') {
        return clampOffset(dock.edge, dock.gap, size);
      }
      return clampOffset(dock.edge, dock.offset, size);
    };

    const nearestEdgeAt = (x, y) => {
      const { w, h } = vvSize();
      const d = { left: x, right: w - x, top: y, bottom: h - y };
      return Object.keys(d).reduce((a, b) => (d[a] < d[b] ? a : b));
    };

    const cornerDefaultDock = () => {
      const vv = vvSize();
      const size = previewSize();
      const offset = Math.max(MIN_GAP, vv.w - size.w - MIN_GAP);
      return { edge: 'bottom', offset };
    };

    const currentTransformOrigin = () => {
      if (!dock.edge) return null;
      if (dock.edge === 'left' || dock.edge === 'top')
        return 'top left';
      if (dock.edge === 'right')
        return 'top right';
      return 'bottom left';
    };

    // =========================
    // Persist / load dock
    // =========================
    const loadDock = () => {
      const raw = safeGet(POS_KEYS.position);
      if (!raw)
        return;
      try {
        const parsed = JSON.parse(raw);
        const { edge, offset, align, gap } = parsed || {};
        if (!['left', 'right', 'top', 'bottom'].includes(edge))
          return;
        if (typeof offset !== 'number')
          return;

        dock.edge = edge;
        dock.offset = clampOffset(edge, offset, previewSize());
        dock.align = align === 'start' || align === 'end' ? align : null;
        dock.gap = typeof gap === 'number' ? gap : null;

        if (!dock.align || dock.gap == null)
          updateDockAlignment(previewSize());
      } catch {}
    };

    const persistDock = () => {
      if (!dock.edge || dock.offset == null)
        return; 
      safeSet(POS_KEYS.position, JSON.stringify({
        edge: dock.edge,
        offset: dock.offset,
        align: dock.align,
        gap: dock.gap
      }));
    };

    // =========================
    // Apply dock
    // =========================
    const dockToVars = (vars) => ({
      set: (side, v) => host.style.setProperty(vars[side], v),
      clear: (side) => host.style.removeProperty(vars[side])
    });

    const dockToEl = (node) => ({
      set: (side, v) => { node.style[side] = v; },
      clear: (side) => { node.style[side] = ''; }
    });

    const applyDock = (target, size, opts) => {
      if (!dock.edge || dock.offset == null) {
        target.clear('left');
        target.clear('top');
        target.clear('right');
        target.clear('bottom');
        return;
      }

      target.set('left', 'auto');
      target.set('top', 'auto');
      target.set('right', 'auto');
      target.set('bottom', 'auto');

      const applied = appliedOffsetFor(size);

      if (dock.edge === 'left') {
        target.set('left', MIN_GAP + 'px');
        target.set('top', applied + 'px');
      } else if (dock.edge === 'right') {
        target.set('right', MIN_GAP + 'px');
        target.set('top', applied + 'px');
      } else if (dock.edge === 'top') {
        target.set('top', MIN_GAP + 'px');
        target.set('left', applied + 'px');
      } else {
        target.set('bottom', MIN_GAP + 'px');
        target.set('left', applied + 'px');
      }

      if (!opts || opts.persist !== false)
        persistDock();
    };

    const applyDockAll = (opts) => {
      applyDock(dockToVars(CSS_VARS.pip), previewSize(), opts);
      applyDock(dockToVars(CSS_VARS.preview), previewSize(), opts);
      applyDock(dockToEl(pipRestoreButton), sizeForTarget(pipRestoreButton), opts);
    };

    const repaintToDock = () => {
      if (!dock.edge || dock.offset == null)
        return;
      const origin = currentTransformOrigin();
      if (origin)
        setVar('--error-pip-origin', origin);
      else 
        unsetVar('--error-pip-origin');
      applyDockAll({ persist: false });
    };

    // =========================
    // Hidden state + UI
    // =========================
    const loadHidden = () => {
      const rawPretty = safeGet(POS_KEYS.hiddenPretty);
      if (rawPretty != null)
        isPrettyHidden = rawPretty === '1' || rawPretty === 'true';
      const rawPreview = safeGet(POS_KEYS.hiddenPreview);
      if (rawPreview != null)
        isPreviewHidden = rawPreview === '1' || rawPreview === 'true';
    };

    const setPrettyHidden = (v) => {
      isPrettyHidden = !!v;
      safeSet(POS_KEYS.hiddenPretty, isPrettyHidden ? '1' : '0');
      updateUI();
    };

    const setPreviewHidden = (v) => {
      isPreviewHidden = !!v;
      safeSet(POS_KEYS.hiddenPreview, isPreviewHidden ? '1' : '0');
      updateUI();
    };

    const isMinimized = () => iframe.hasAttribute('inert');

    const setMinimized = (v) => {
      if (v) {
        iframe.setAttribute('inert', '');
        toggle.setAttribute('aria-expanded', 'false');
      } else {
        iframe.removeAttribute('inert');
        toggle.setAttribute('aria-expanded', 'true');
      }
    };

    const setRestoreLabel = (kind) => {
      if (kind === 'pretty') {
        pipRestoreButton.innerHTML = '<span aria-hidden="true">⟲</span><span>Show error overlay</span>';
        pipRestoreButton.setAttribute('aria-label', 'Show error overlay');
      } else {
        pipRestoreButton.innerHTML = '<span aria-hidden="true">⟲</span><span>Show error page</span>';
        pipRestoreButton.setAttribute('aria-label', 'Show error page');
      }
    };

    const updateUI = () => {
      const minimized = isMinimized();
      const showPiP = minimized && !isPrettyHidden;
      const showPreview = !minimized && !isPreviewHidden;
      const pipHiddenByUser = minimized && isPrettyHidden;
      const previewHiddenByUser = !minimized && isPreviewHidden;
      const showToggle = minimized ? showPiP : showPreview;
      const showRestore = pipHiddenByUser || previewHiddenByUser;

      hide(iframe, pipHiddenByUser);
      hide(preview, !showPreview);
      hide(toggle, !showToggle);
      hide(pipCloseButton, !showToggle);
      hide(pipRestoreButton, !showRestore);

      pipCloseButton.setAttribute('aria-label', minimized ? 'Hide error overlay' : 'Hide error page preview');

      if (pipHiddenByUser)
        setRestoreLabel('pretty');
      else if (previewHiddenByUser)
        setRestoreLabel('preview');

      host.classList.toggle('pip-hidden', isPrettyHidden);
      host.classList.toggle('preview-hidden', isPreviewHidden);
    };

    // =========================
    // Preview snapshot
    // =========================
    const updatePreview = () => {
      try {
        let previewIframe = preview.querySelector('iframe');
        if (!previewIframe) {
          previewIframe = el('iframe');
          previewIframe.style.cssText = 'width: 1200px; height: 900px; transform: scale(0.2); transform-origin: top left; border: none;';
          previewIframe.setAttribute('sandbox', 'allow-scripts allow-same-origin');
          preview.appendChild(previewIframe);
        }

        const doctype = document.doctype ? '<!DOCTYPE ' + document.doctype.name + '>' : '';
        const cleanedHTML = document.documentElement.outerHTML
          .replace(/<nuxt-error-overlay[^>]*>.*?<\\/nuxt-error-overlay>/gs, '')
          .replace(/<script[^>]*>.*?<\\/script>/gs, '');

        const iframeDoc = previewIframe.contentDocument || previewIframe.contentWindow.document;
        iframeDoc.open();
        iframeDoc.write(doctype + cleanedHTML);
        iframeDoc.close();
      } catch (err) {
        console.error('Failed to update preview:', err);
      }
    };

    // =========================
    // View toggling
    // =========================
    const toggleView = () => {
      if (isMinimized()) {
        updatePreview();
        setMinimized(false);
        liveRegion.textContent = 'Showing detailed error view';
        setTimeout(() => { 
          try { 
            iframe.contentWindow.focus();
          } catch {}
        }, 100);
      } else {
        setMinimized(true);
        liveRegion.textContent = 'Showing error page';
        repaintToDock();
        void iframe.offsetWidth;
      }
      updateUI();
    };

    // =========================
    // Dragging (unified, rAF throttled)
    // =========================
    let drag = null;
    let rafId = null;
    let suppressToggleClick = false;
    let suppressRestoreClick = false;

    const beginDrag = (e) => {
      if (drag) 
        return;

      if (!dock.edge || dock.offset == null) {
        const def = cornerDefaultDock();
        dock.edge = def.edge;
        dock.offset = def.offset;
        updateDockAlignment(previewSize());
      }

      const isRestoreTarget = e.currentTarget === pipRestoreButton;

      drag = {
        kind: isRestoreTarget ? 'restore' : (isMinimized() ? 'pip' : 'preview'),
        pointerId: e.pointerId,
        startX: e.clientX,
        startY: e.clientY,
        lastX: e.clientX,
        lastY: e.clientY,
        moved: false,
        target: e.currentTarget
      };

      drag.target.setPointerCapture(e.pointerId);

      if (drag.kind === 'restore')
        host.classList.add('dragging-restore');
      else 
        host.classList.add(drag.kind === 'pip' ? 'dragging' : 'dragging-preview');

      e.preventDefault();
    };

    const moveDrag = (e) => {
      if (!drag || drag.pointerId !== e.pointerId)
        return;

      drag.lastX = e.clientX;
      drag.lastY = e.clientY;
      
      const dx = drag.lastX - drag.startX;
      const dy = drag.lastY - drag.startY;

      if (!drag.moved && (Math.abs(dx) > DRAG_THRESHOLD || Math.abs(dy) > DRAG_THRESHOLD)) {
        drag.moved = true;
      }

      if (!drag.moved)
        return;
      if (rafId)
        return;

      rafId = requestAnimationFrame(() => {
        rafId = null;

        const edge = nearestEdgeAt(drag.lastX, drag.lastY);
        const size = sizeForTarget(drag.target);

        let offset;
        if (edge === 'left' || edge === 'right') {
          const top = drag.lastY - (size.h / 2);
          offset = clampOffset(edge, Math.round(top), size);
        } else {
          const left = drag.lastX - (size.w / 2);
          offset = clampOffset(edge, Math.round(left), size);
        }

        dock.edge = edge;
        dock.offset = offset;
        updateDockAlignment(size);

        const origin = currentTransformOrigin();
        setVar('--error-pip-origin', origin || 'bottom right');

        applyDockAll({ persist: false });
      });
    };

    const endDrag = (e) => {
      if (!drag || drag.pointerId !== e.pointerId)
        return;

      const endedKind = drag.kind;
      drag.target.releasePointerCapture(e.pointerId);

      if (endedKind === 'restore')
        host.classList.remove('dragging-restore');
      else 
        host.classList.remove(endedKind === 'pip' ? 'dragging' : 'dragging-preview');

      const didMove = drag.moved;
      drag = null;

      if (didMove) {
        persistDock();
        if (endedKind === 'restore')
          suppressRestoreClick = true;
        else 
          suppressToggleClick = true;
        e.preventDefault();
        e.stopPropagation();
      }
    };

    const bindDragTarget = (node) => {
      on(node, 'pointerdown', beginDrag);
      on(node, 'pointermove', moveDrag);
      on(node, 'pointerup', endDrag);
      on(node, 'pointercancel', endDrag);
    };

    bindDragTarget(toggle);
    bindDragTarget(pipRestoreButton);

    // =========================
    // Events (toggle / close / restore)
    // =========================
    on(toggle, 'click', (e) => {
      if (suppressToggleClick) {
        e.preventDefault();
        suppressToggleClick = false;
        return;
      }
      toggleView();
    });

    on(toggle, 'keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleView();
      }
    });

    on(pipCloseButton, 'click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (isMinimized())
        setPrettyHidden(true);
      else
        setPreviewHidden(true);
    });

    on(pipCloseButton, 'pointerdown', (e) => {
      e.stopPropagation();
    });

    on(pipRestoreButton, 'click', (e) => {
      if (suppressRestoreClick) {
        e.preventDefault();
        suppressRestoreClick = false;
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      if (isMinimized()) 
        setPrettyHidden(false);
      else 
        setPreviewHidden(false);
    });

    // =========================
    // Lifecycle: load / sync / repaint
    // =========================
    const loadState = () => {
      loadDock();
      loadHidden();

      if (isPrettyHidden && !isMinimized())
        setMinimized(true);

      updateUI();
      repaintToDock();
    };

    loadState();

    on(window, 'storage-ready', () => {
      storageReady = true;
      loadState();
    });

    const onViewportChange = () => repaintToDock();

    on(window, 'resize', onViewportChange);

    if (window.visualViewport) {
      on(window.visualViewport, 'resize', onViewportChange);
      on(window.visualViewport, 'scroll', onViewportChange);
    }

    // initial preview
    setTimeout(updatePreview, 100);

    // initial minimized option
    if (${startMinimized}) {
      setMinimized(true);
      repaintToDock();
      void iframe.offsetWidth;
      updateUI();
    }
  } catch (err) {
    console.error('Failed to initialize Nuxt error overlay:', err);
  }
})();
`;
}
function generateErrorOverlayHTML(html, options) {
	const nonce = Array.from(crypto.getRandomValues(new Uint8Array(16)), (b) => b.toString(16).padStart(2, "0")).join("");
	const errorPage = html.replace("<head>", `<head><script>${iframeStorageBridge(nonce)}<\/script>`);
	const base64HTML = Buffer.from(errorPage, "utf8").toString("base64");
	return `
    <script>${parentStorageBridge(nonce)}<\/script>
    <nuxt-error-overlay></nuxt-error-overlay>
    <script>${webComponentScript(base64HTML, options?.startMinimized ?? false)}<\/script>
  `;
}

const errorHandler$0 = (async function errorhandler(error, event, { defaultHandler }) {
	if (event.handled || isJsonRequest(event)) {
		// let Nitro handle JSON errors
		return;
	}
	// invoke default Nitro error handler (which will log appropriately if required)
	const defaultRes = await defaultHandler(error, event, { json: true });
	// let Nitro handle redirect if appropriate
	const status = error.status || error.statusCode || 500;
	if (status === 404 && defaultRes.status === 302) {
		setResponseHeaders(event, defaultRes.headers);
		setResponseStatus(event, defaultRes.status, defaultRes.statusText);
		return send(event, JSON.stringify(defaultRes.body, null, 2));
	}
	if (typeof defaultRes.body !== "string" && Array.isArray(defaultRes.body.stack)) {
		// normalize to string format expected by nuxt `error.vue`
		defaultRes.body.stack = defaultRes.body.stack.join("\n");
	}
	const errorObject = defaultRes.body;
	// remove proto/hostname/port from URL
	const url = new URL(errorObject.url);
	errorObject.url = withoutBase(url.pathname, useRuntimeConfig(event).app.baseURL) + url.search + url.hash;
	// add default server message (keep sanitized for unhandled errors)
	errorObject.message = error.unhandled ? errorObject.message || "Server Error" : error.message || errorObject.message || "Server Error";
	// we will be rendering this error internally so we can pass along the error.data safely
	errorObject.data ||= error.data;
	errorObject.statusText ||= error.statusText || error.statusMessage;
	delete defaultRes.headers["content-type"];
	delete defaultRes.headers["content-security-policy"];
	setResponseHeaders(event, defaultRes.headers);
	// Access request headers
	const reqHeaders = getRequestHeaders(event);
	// Detect to avoid recursion in SSR rendering of errors
	const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
	// HTML response (via SSR)
	const res = isRenderingError ? null : await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), errorObject), {
		headers: {
			...reqHeaders,
			"x-nuxt-error": "true"
		},
		redirect: "manual"
	}).catch(() => null);
	if (event.handled) {
		return;
	}
	// Fallback to static rendered error page
	if (!res) {
		const { template } = await Promise.resolve().then(function () { return error500; });
		{
			// TODO: Support `message` in template
			errorObject.description = errorObject.message;
		}
		setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
		return send(event, template(errorObject));
	}
	const html = await res.text();
	for (const [header, value] of res.headers.entries()) {
		if (header === "set-cookie") {
			appendResponseHeader(event, header, value);
			continue;
		}
		setResponseHeader(event, header, value);
	}
	setResponseStatus(event, res.status && res.status !== 200 ? res.status : defaultRes.status, res.statusText || defaultRes.statusText);
	if (!globalThis._importMeta_.test && typeof html === "string") {
		const prettyResponse = await defaultHandler(error, event, { json: false });
		if (typeof prettyResponse.body === "string") {
			return send(event, html.replace("</body>", `${generateErrorOverlayHTML(prettyResponse.body, { startMinimized: 300 <= status && status < 500 })}</body>`));
		}
	}
	return send(event, html);
});

function defineNitroErrorHandler(handler) {
  return handler;
}

const errorHandler$1 = defineNitroErrorHandler(
  async function defaultNitroErrorHandler(error, event) {
    const res = await defaultHandler(error, event);
    if (!event.node?.res.headersSent) {
      setResponseHeaders(event, res.headers);
    }
    setResponseStatus(event, res.status, res.statusText);
    return send(
      event,
      typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2)
    );
  }
);
async function defaultHandler(error, event, opts) {
  const isSensitive = error.unhandled || error.fatal;
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Server Error";
  const url = getRequestURL(event, { xForwardedHost: true, xForwardedProto: true });
  if (statusCode === 404) {
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      const redirectTo = `${baseURL}${url.pathname.slice(1)}${url.search}`;
      return {
        status: 302,
        statusText: "Found",
        headers: { location: redirectTo },
        body: `Redirecting...`
      };
    }
  }
  await loadStackTrace(error).catch(consola.error);
  const youch = new Youch();
  if (isSensitive && !opts?.silent) {
    const tags = [error.unhandled && "[unhandled]", error.fatal && "[fatal]"].filter(Boolean).join(" ");
    const ansiError = await (await youch.toANSI(error)).replaceAll(process.cwd(), ".");
    consola.error(
      `[request error] ${tags} [${event.method}] ${url}

`,
      ansiError
    );
  }
  const useJSON = opts?.json ?? !getRequestHeader(event, "accept")?.includes("text/html");
  const headers = {
    "content-type": useJSON ? "application/json" : "text/html",
    // Prevent browser from guessing the MIME types of resources.
    "x-content-type-options": "nosniff",
    // Prevent error page from being embedded in an iframe
    "x-frame-options": "DENY",
    // Prevent browsers from sending the Referer header
    "referrer-policy": "no-referrer",
    // Disable the execution of any js
    "content-security-policy": "script-src 'self' 'unsafe-inline'; object-src 'none'; base-uri 'self';"
  };
  if (statusCode === 404 || !getResponseHeader(event, "cache-control")) {
    headers["cache-control"] = "no-cache";
  }
  const body = useJSON ? {
    error: true,
    url,
    statusCode,
    statusMessage,
    message: error.message,
    data: error.data,
    stack: error.stack?.split("\n").map((line) => line.trim())
  } : await youch.toHTML(error, {
    request: {
      url: url.href,
      method: event.method,
      headers: getRequestHeaders(event)
    }
  });
  return {
    status: statusCode,
    statusText: statusMessage,
    headers,
    body
  };
}
async function loadStackTrace(error) {
  if (!(error instanceof Error)) {
    return;
  }
  const parsed = await new ErrorParser().defineSourceLoader(sourceLoader).parse(error);
  const stack = error.message + "\n" + parsed.frames.map((frame) => fmtFrame(frame)).join("\n");
  Object.defineProperty(error, "stack", { value: stack });
  if (error.cause) {
    await loadStackTrace(error.cause).catch(consola.error);
  }
}
async function sourceLoader(frame) {
  if (!frame.fileName || frame.fileType !== "fs" || frame.type === "native") {
    return;
  }
  if (frame.type === "app") {
    const rawSourceMap = await readFile(`${frame.fileName}.map`, "utf8").catch(() => {
    });
    if (rawSourceMap) {
      const consumer = await new SourceMapConsumer(rawSourceMap);
      const originalPosition = consumer.originalPositionFor({ line: frame.lineNumber, column: frame.columnNumber });
      if (originalPosition.source && originalPosition.line) {
        frame.fileName = resolve(dirname(frame.fileName), originalPosition.source);
        frame.lineNumber = originalPosition.line;
        frame.columnNumber = originalPosition.column || 0;
      }
    }
  }
  const contents = await readFile(frame.fileName, "utf8").catch(() => {
  });
  return contents ? { contents } : void 0;
}
function fmtFrame(frame) {
  if (frame.type === "native") {
    return frame.raw;
  }
  const src = `${frame.fileName || ""}:${frame.lineNumber}:${frame.columnNumber})`;
  return frame.functionName ? `at ${frame.functionName} (${src}` : `at ${src}`;
}

const errorHandlers = [errorHandler$0, errorHandler$1];

async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      await handler(error, event, { defaultHandler });
      if (event.handled) {
        return; // Response handled
      }
    } catch(error) {
      // Handler itself thrown, log and continue
      console.error(error);
    }
  }
  // H3 will handle fallback
}

const script$1 = `
if (!window.__NUXT_DEVTOOLS_TIME_METRIC__) {
  Object.defineProperty(window, '__NUXT_DEVTOOLS_TIME_METRIC__', {
    value: {},
    enumerable: false,
    configurable: true,
  })
}
window.__NUXT_DEVTOOLS_TIME_METRIC__.appInit = Date.now()
`;

const _c3Oy_WZCrIk7PWk7hu0bN6fEe2nFE3hy9jfdG3_07Jo = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script$1}<\/script>`);
  });
});

/*!
  * shared v11.3.0
  * (c) 2026 kazuya kawaguchi
  * Released under the MIT License.
  */
const _create = Object.create;
const create = (obj = null) => _create(obj);
/* eslint-enable */
/**
 * Useful Utilities By Evan you
 * Modified by kazuya kawaguchi
 * MIT License
 * https://github.com/vuejs/vue-next/blob/master/packages/shared/src/index.ts
 * https://github.com/vuejs/vue-next/blob/master/packages/shared/src/codeframe.ts
 */
const isArray = Array.isArray;
const isFunction = (val) => typeof val === 'function';
const isString = (val) => typeof val === 'string';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isObject = (val) => val !== null && typeof val === 'object';
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);

const isNotObjectOrIsArray = (val) => !isObject(val) || isArray(val);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function deepCopy(src, des) {
    // src and des should both be objects, and none of them can be a array
    if (isNotObjectOrIsArray(src) || isNotObjectOrIsArray(des)) {
        throw new Error('Invalid value');
    }
    const stack = [{ src, des }];
    while (stack.length) {
        const { src, des } = stack.pop();
        // using `Object.keys` which skips prototype properties
        Object.keys(src).forEach(key => {
            if (key === '__proto__') {
                return;
            }
            // if src[key] is an object/array, set des[key]
            // to empty object/array to prevent setting by reference
            if (isObject(src[key]) && !isObject(des[key])) {
                des[key] = Array.isArray(src[key]) ? [] : create();
            }
            if (isNotObjectOrIsArray(des[key]) || isNotObjectOrIsArray(src[key])) {
                // replace with src[key] when:
                // src[key] or des[key] is not an object, or
                // src[key] or des[key] is an array
                des[key] = src[key];
            }
            else {
                // src[key] and des[key] are both objects, merge them
                stack.push({ src: src[key], des: des[key] });
            }
        });
    }
}

const __nuxtMock = { runWithContext: async (fn) => await fn() };
const merger = createDefu((obj, key, value) => {
  if (key === "messages" || key === "datetimeFormats" || key === "numberFormats") {
    obj[key] ??= create(null);
    deepCopy(value, obj[key]);
    return true;
  }
});
async function loadVueI18nOptions(vueI18nConfigs) {
  const nuxtApp = __nuxtMock;
  let vueI18nOptions = { messages: create(null) };
  for (const configFile of vueI18nConfigs) {
    const resolver = await configFile().then((x) => isModule(x) ? x.default : x);
    const resolved = isFunction(resolver) ? await nuxtApp.runWithContext(() => resolver()) : resolver;
    vueI18nOptions = merger(create(null), resolved, vueI18nOptions);
  }
  vueI18nOptions.fallbackLocale ??= false;
  return vueI18nOptions;
}
const isModule = (val) => toTypeString(val) === "[object Module]";
async function getLocaleMessages(locale, loader) {
  const nuxtApp = __nuxtMock;
  try {
    const getter = await nuxtApp.runWithContext(loader.load).then((x) => isModule(x) ? x.default : x);
    return isFunction(getter) ? await nuxtApp.runWithContext(() => getter(locale)) : getter;
  } catch (e) {
    throw new Error(`Failed loading locale (${locale}): ` + e.message);
  }
}
async function getLocaleMessagesMerged(locale, loaders = []) {
  const nuxtApp = __nuxtMock;
  const messages = await Promise.all(
    loaders.map((loader) => nuxtApp.runWithContext(() => getLocaleMessages(locale, loader)))
  );
  const merged = {};
  for (const message of messages) {
    deepCopy(message, merged);
  }
  return merged;
}

var btn$2 = {
	disable: "Disable",
	enable: "Enable",
	duplicate: "Duplicate",
	imageUpload: "Attach",
	fileUpload: "Select File",
	detail: "Detail",
	edit: "Edit",
	view: "Detail",
	create: "Register",
	ok: "OK",
	list: "List",
	add: "Add",
	register: "Register",
	save: "Save",
	back: "Back",
	"delete": "Delete",
	cancel: "Cancel",
	change: "Change",
	search: "Search...",
	deactivate: "Deactivate",
	activate: "Activate",
	approval: "Approval",
	reject: "Reject",
	confirm: "Confirm",
	start: "Start",
	draft: "Draft",
	send: "Send",
	login: "Login",
	select: "Select",
	auto: "Auto numbering",
	success: "Success",
	warning: "Warning",
	total: "Total",
	entries: "Entries",
	"import": "Import",
	next: "Next",
	request: "Request",
	"export": "Export",
	sendFax: "Send FAX",
	sendMail: "Send Email",
	update: "Update Billing Info",
	filter: "Search",
	removeFilter: "Clear",
	showAll: "Detail",
	logOut: "Logout",
	close: "Close",
	sync: "Update"
};
var text$2 = {
	cancel: "Cancel",
	"delete": "Delete",
	empty: "Empty",
	no: "No.",
	id: "ID",
	deleteSuccess: "{field} deleted successfully",
	syncSuccess: "Saved to sync queue successfully. It will be processed in order, please wait.",
	resignSuccess: "{field} registered.",
	noData: "No data available.",
	notEmptyData: "Please enter this field.",
	notEmptyChoose: "Please select {field}.",
	notEmptyInput: "Please enter {field}.",
	errorTimePast: "Please do not select a time in the past.",
	saveSuccess: "{field} saved successfully.",
	max255: "Please enter {field} within 255 characters.",
	max50: "Please enter {field} within 50 characters.",
	max20: "Please enter {field} within 20 characters.",
	max10: "Please enter {field} within 10 characters.",
	max9: "Please enter {field} within 9 characters.",
	min8: "Please enter {field} with at least 8 characters.",
	slugFormat: "{field} can only contain lowercase (a-z), numbers, and hyphens",
	length10to13: "Please enter {field} between 10 and 13 characters",
	length10to12: "Please enter {field} between 10 and 12 characters",
	updateSuccess: "Blastmail account settings completed.",
	createSuccess: "Registered successfully.",
	udSuccess: "Saved successfully.",
	activateSuccess: "Activated successfully.",
	deactivateSuccess: "Deactivated successfully.",
	max2000: "Please enter {field} within 2000 characters.",
	duplicate: "is duplicated.",
	date: "Date",
	time: "Time",
	note: "Note",
	name: "Plan Name",
	type: "Type",
	price: "Price",
	action: "Action",
	email: "Email Address",
	profile: "Profile",
	director: "Director",
	all: "All",
	status: "Status",
	minus: "min",
	second: "sec",
	success: "Success",
	error: "Error",
	require: "Required",
	registerBy: "Registered by",
	updatedBy: "Updated by",
	msgPostcodeValid: "Postcode format is incorrect",
	msgDropdownNoData: "No matching results",
	errorCodeFormat: "Product code must be alphanumeric, Japanese characters, or underscores.",
	errorMailFormat: "Email address format is incorrect.",
	min0Valid: "Please enter a value greater than 0.",
	validHiragana: "Please enter in Hiragana",
	validSpacing: "Please do not include spaces in {field}.",
	validUrl: "URL is invalid. Please double check.",
	textRequired: "{field} is a required field.",
	textNumberItem: "Only {maxLength} can be selected",
	validateCalendarRange: "Please select both start and end dates.",
	copy: "Copy",
	sendSuccess: "Sent successfully.",
	confirmLogoutTitle: "Are you sure you want to logout?",
	confirmLogoutText: "This process cannot be undone.",
	active: "Active",
	inactive: "Inactive",
	deleted: "Deleted",
	sendAllSuccess: "Sending was successful.",
	createdAt: "Registered Date",
	updatedAt: "Updated Date",
	stt: "No.",
	accountLimit: "Account Limit",
	collaboration: "Collaboration",
	content: "Description",
	apps: "Apps",
	fromDate: "Start Date",
	toDate: "End Date",
	dateRange: "Select Period",
	createNew: "Create New",
	search: "Search",
	confirmDelete: "Are you sure you want to delete?",
	systemCode: "System Code",
	year: "Year",
	month: "Month",
	week: "Week",
	weekNum: "Week {field}",
	rangeDate: "{start} - {end}",
	textMoney: "$",
	quantity: "Quantity",
	profit: "Profit",
	total: "Total",
	showAll: "Show All",
	hide: "Hide",
	pdf: "PDF",
	file: "File",
	history: "Detail",
	msgDeleteSuccess: "Deleted successfully.",
	startDate: "Start Date",
	endDate: "End Date",
	selectMonth: "Select Month",
	weekOfMonth: "Week of Month",
	loadMore: "Load More",
	errorPassLength: "Please enter a password between 8-20 characters including uppercase, lowercase, numbers, and special characters.",
	errorOtpLength: "Please enter the verification code correctly.",
	unique: "{field} already exists in the system",
	formatTax: "Please enter a tax code between 10 and 13 characters",
	taxMin9: "Discount must be within 9 characters",
	password: "Please enter {field} between 8-20 characters including uppercase, lowercase, numbers, and special characters.",
	invalidFileType: "Invalid file format. Allowed formats: png, jpg, jpeg, svg.",
	invalidFileType1: "Invalid file format. Allowed formats: glb, gltf, obj.",
	invalidFileSize: "Please upload an image size not exceeding 10MB.",
	invalidMediaType: "Unsupported file format",
	fileTooLarge: "{type} exceeds the allowed size limit ({size}).",
	image: "Image",
	video: "Video",
	emailExists: "Email address or password is invalid. Please double check.",
	emailMax: "Please enter email within 255 characters.",
	codeIncorrect: "OTP code is invalid. Please check again.",
	please_fill_all_fields: "Please fill in all required information",
	msgMapNotFound: "The address could not be found on the map.",
	verifyFidelity: "Verify Data Fidelity",
	requiredFidelity: "Ensure all REQUIRED fields are populated before finalizing.",
	errorInput: "Invalid input information. Please double check the fields highlighted in red.",
	addSuccess: "Added successfully.",
	edit: "Edit",
	errorMessage: "Invalid input or system error.",
	info: "Information",
	warning: "Warning"
};
var msgCommon$2 = {
	select: "Select",
	confirmLogoutTitle: "Are you sure you want to logout?",
	confirmLogoutText: "This process cannot be undone."
};
var radioButton$2 = {
	yes: "Yes",
	no: "No"
};
var deleteModal$2 = {
	areYouSure: "Are you sure you want to delete?",
	confirmDelete: "This process cannot be undone."
};
var confirmModal$2 = {
	confirm: "Confirm",
	confirmRequest: "Do you want to determine the new unit price?",
	cancel: "Cancel",
	language: "Language",
	vietnamese: "Vietnamese",
	english: "English",
	japanese: "Japanese",
	confirmExport: "Export Confirmation",
	ExportFile: "Export",
	leaveTabTitle: "Are you sure you want to switch tabs?",
	leaveTabMessage: "Unsaved changes will be lost if you switch.",
	changeActiveNotifySuccess: "Collaboration has been enabled.",
	changeDeactiveNotifySuccess: "Collaboration has been disabled."
};
var tableBox$2 = {
	noData: "No data available.",
	noSearchData: "No matching results",
	action: "Action",
	deleteAllSelect: "Delete all selected data"
};
var uploadAvatar$2 = {
	errType: "File format or extension is incorrect.",
	maxImage: "Please upload an image less than 10MB."
};
var uploadFile$2 = {
	errType: "File format or extension is incorrect.",
	maxFile: "Please upload a file less than 10MB.",
	uploadFileSuccess: "File data has been imported."
};
var paginator$2 = {
	itemsPerPage: "per page",
	showItems: "Page {from}-{to}/{total}",
	pages: "Page {page}/{total}",
	display: "per page",
	perPage: "items",
	showInfo: "{fieldFrom}-{fieldTo}/{fieldTotal} items"
};
var auth$2 = {
	titleLogin: "Please log in to your account",
	invalid: "Email address or password is invalid. Please double check.",
	unauthorized: "Token is invalid and cannot be used",
	need_update_password: "Password update is required.",
	forbidden: "Access denied!",
	not_found: "OTP code entered is incorrect.",
	blacklist_token: "This token has already been used",
	login: "Login",
	email: "User ID",
	code: "Verification Code",
	password: "Password",
	rememberPassword: "Keep me logged in",
	loginSuccess: "Login completed.",
	errorMail: "Please enter user ID.",
	errorMailFormat: "User ID format is incorrect.",
	userNotExisted: "User ID or password is incorrect.",
	errorPass: "Please enter password.",
	errorPassNew: "Please enter new password.",
	errorPassLength: "Please enter 8-32 characters password including lowercase, uppercase, numbers, and special characters.",
	forgotPassword: "Forgot Password",
	haveAnPassword: "Remembered password?",
	sendResetSuccess: "Password reset request has been sent.",
	resetPassword: "Reset Password",
	receiveOtp: "Didn't receive verification code?",
	retransmission: "Resend",
	settingPassword: "Password Setting",
	reSendResetSuccess: "Verification code has been sent to email. Please check your email.",
	errorOtp: "Please enter verification code.",
	newPassword: "New Password",
	newPasswordConfirm: "Confirm Password",
	errorRePass: "Please enter password confirmation.",
	rePassNotMatch: "Password and confirmation password do not match. Please check.",
	resetSuccess: "Password has been changed.",
	confirmLogout: "Are you sure you want to logout?",
	settingPasswordSuccess: "First password update successful",
	resetPass: "Change Password",
	enterEmailResetPass: "Please enter your email address to reset password.",
	sendForgotPass: "Send Verification Code",
	otp: "OTP",
	errorEmail: "Invalid email address. Please check.",
	inactive: "Access denied. Account is locked or not yet activated."
};
var notFound$2 = {
	backToHome: "Go back home"
};
var router$2 = {
	homePage: "Home",
	userList: "Employee List",
	userRegister: "Employee Registration",
	userDetail: "Employee Details",
	userEdit: "Edit Employee",
	categoryRegister: "Product Catalog Registration",
	categoryList: "Product Catalog List",
	categoryEdit: "Edit Product Catalog",
	categoryDetail: "Product Catalog Details",
	customerRegister: "Customer Registration",
	customerList: "Customer List",
	customerEdit: "Edit Customer",
	customerDetail: "Customer Details"
};
var menu$2 = {
	master: "Master",
	list: "List",
	register: "Register",
	dashboard: "Dashboard",
	department: "Department Management",
	departmentList: "Department List",
	departmentAdd: "Add Department",
	departmentEdit: "Edit Department",
	position: "Position Management",
	positionList: "Position List",
	positionAdd: "Add Position",
	positionEdit: "Edit Position",
	company: "Company Management",
	companyList: "Company List",
	companyAdd: "Add Company",
	companyEdit: "Edit Company",
	userMaster: "User Management",
	employee: "Employee Management",
	userMasterList: "User List",
	userMasterAdd: "Register User",
	userMasterEdit: "Edit User",
	basicInfo: "Basic Information",
	contactInfo: "Contact Details",
	noteInfo: "Notes & Others",
	timesheet: "Timesheet Management",
	timesheetManage: "Admin Timesheets",
	leaveRequest: "Leave Request",
	leaveRequestPending: "Leave Approval",
	contract: "Contract Management",
	transaction: "Cash Flow Management",
	compliance: "Compliance Engine",
	document: "Document & Archive Management",
	member: "Member Management"
};
var department$2 = {
	code: "Department Code",
	name: "Department Name",
	note: "Note",
	status: "Status",
	title: "Department Management",
	placeholderSearch: "Code, department name",
	noteBasic: "Basic department information configuration",
	noteDetail: "Task details & Functions",
	namePlaceholder: "Research & Development Department (R&D)",
	positionListTitle: "Job Position/Title List",
	positionListDesc: "Add job positions belonging to this department",
	addPosition: "Add Position",
	noPositionYet: "No positions yet. Please click the add position button.",
	positionName: "Job Title",
	positionNamePlaceholder: "Senior Engineer...",
	positionDesc: "Job Description",
	positionDescPlaceholder: "Describe responsibilities...",
	noteAndDesc: "Description & Notes",
	notePlaceholder: "Enter detailed description of the functional structure of this department...",
	valMissPositionName: "Please enter job title",
	valMissPositionDesc: "Please fill in all job titles.",
	associatedJobTitles: "Associated Job Titles"
};
var user$2 = {
	gender: "Gender",
	status: "Status"
};
var position$2 = {
	title: "Position Management",
	code: "Position Code",
	name: "Position Name",
	note: "Note",
	status: "Status",
	placeholderSearch: "Code, position name",
	noteBasic: "Identification and role configuration",
	noteDetail: "Job requirements & Role description"
};
var company$2 = {
	title: "Company Management",
	code: "Company Code",
	name: "Company Name",
	postcode: "Postcode",
	searchAddress: "Search Address",
	area: "Area",
	prefecture: "Prefecture",
	city: "City",
	town: "Town",
	address: "Current Office Address",
	addressRegistered: "Registered Business Address (Legal)",
	phone: "Phone Number",
	fax: "Fax Number",
	email: "Business Contact Email",
	note: "Note",
	status: "Operating Status",
	statusActive: "Active",
	statusInactive: "Inactive",
	placeholderSearch: "Code, company name",
	noteCode: "Core identity configuration",
	noteContact: "Official business contact channels",
	noteDetail: "Record important notes",
	editTitle: "Edit Company",
	createTitle: "Add New Company",
	editDesc: "Update legal entity profile",
	createDesc: "Set up partner & branch information",
	saveProfile: "Save Profile",
	basicInfo: "Basic Information",
	basicInfoDesc: "Company name, legal entity code and legal representative",
	nameKana: "Kana Name",
	legalRepresentative: "Legal Representative",
	taxSection: "Tax & Legal Identifiers",
	taxSectionDesc: "Tax code, corporate number for invoicing and reporting",
	taxCode: "Tax Code",
	corporateNumber: "Corporate Number",
	contactSection: "Contact Information",
	contactSectionDesc: "Contact details for direct communication with the company",
	addressSection: "Headquarters Address",
	addressSectionDesc: "Business registration and office working address",
	noteSection: "Notes & Memos",
	companyInfo: "Company Info",
	contactInfo: "Contact Info",
	headOfficeAddress: "Headquarters Address",
	registeredAddress: "Registered Address"
};
var userMaster$2 = {
	title: "User Management",
	code: "User Code",
	name: "Full Name",
	company: "Company",
	department: "Department",
	position: "Position",
	phone: "Phone Number",
	note: "Note",
	email: "Email",
	status: "Status",
	placeholderSearch: "Name, email, user code...",
	noteBasic: "Employee identity information",
	noteAdditional: "Additional information"
};
var document$2 = {
	dragDropText: "Drag and drop documents here or click to upload",
	allowedFormats: "Supported formats: PDF, Word, Excel, JPG, PNG (Max 10MB)",
	uploading: "Uploading...",
	totalFiles: "Total files",
	view: "Preview online",
	download: "Download file",
	"delete": "Delete document",
	noDocuments: "No documents attached.",
	viewerNotSupportedTitle: "Direct Preview Not Supported",
	viewerNotSupportedDesc: "This file format does not support online preview. Please download to view.",
	downloadFile: "Download File",
	deleteConfirmTitle: "Delete Document Confirmation",
	deleteConfirmDesc: "Are you sure you want to delete this document from the system? This action is permanent and cannot be undone."
};
var employee$2 = {
	title: "Employee Management",
	status: "Status",
	email: "Email",
	code: "Employee Code",
	addTitle: "Add New Employee",
	editTitle: "Edit Employee",
	editSubtitle: "Update personnel record",
	addSubtitle: "Set up account and organization info",
	saveProfile: "Save Profile",
	personalInfo: "Personal Information",
	personalInfoDesc: "Identification, contact and residential profile",
	orgUnit: "Organizational Unit",
	basicInfo: "Basic Information",
	basicInfoDesc: "Set up basic information, contact email and system access account",
	avatar: "Avatar",
	uploadPhoto: "Upload Photo",
	removePhoto: "Remove Photo",
	fullName: "Full Name",
	katakanaName: "Katakana Name",
	romajiName: "Romaji Name",
	dateOfBirth: "Date of Birth",
	gender: "Gender",
	hometown: "Hometown",
	placeOfBirth: "Place of Birth",
	nationality: "Nationality",
	ethnicity: "Ethnicity",
	religion: "Religion",
	phone: "Phone Number",
	department: "Department",
	selectDepartment: "Select department",
	jobTitle: "Job Title",
	selectJobTitle: "Select job title",
	statusActive: "Active",
	statusInactive: "Inactive",
	statusProbation: "Probation",
	roleAdmin: "Admin",
	roleManager: "Manager",
	roleStaff: "Staff",
	placeholderSearch: "Name, email, employee code...",
	dialogDisableTitle: "Disable Employee?",
	dialogDisableDesc: "The status of employee {name} will be changed to INACTIVE.",
	msgDisableSuccess: "Employee disabled successfully.",
	joinDate: "Join Date",
	role: "Role",
	password: "Password",
	taxInsurance: "Tax & Insurance",
	taxInsuranceBank: "Tax, Insurance & Banking",
	contractDocument: "Contracts & Documents",
	taxInsuranceTitle: "ID Documents & Social Insurance",
	taxInsuranceDesc: "Configure tax code, insurance and identity documents",
	identityType: "Identity Type",
	identityNumber: "Identity Number",
	zairyuExpiry: "Residence Card Expiry",
	taxCode: "Tax Code",
	socialInsurance: "Social Insurance Code",
	pensionNumber: "Pension Number",
	employmentInsurance: "Employment Insurance Number",
	bankInfo: "Bank Information",
	bankInfoTitle: "Salary Account & Banking",
	bankInfoDesc: "Set up salary receiving account and payment information",
	bankCode: "Bank Code",
	bankBranch: "Branch Code",
	bankAccountType: "Account Type",
	bankAccountNumber: "Account Number",
	bankAccountHolder: "Account Holder Name (Kana)",
	addressInfo: "Address & Relatives",
	addressTitle: "Residential Address",
	addressDesc: "Registered and current residential addresses",
	registeredAddress: "Registered Address",
	currentAddress: "Current Address",
	dependentsCount: "Number of Dependents",
	relatives: "Relatives Information",
	relativesTitle: "Relatives List",
	relativesDesc: "Emergency contacts and dependent information",
	addRelative: "Add Relative",
	relationship: "Relationship",
	occupation: "Occupation",
	address: "Address",
	emergencyContact: "Emergency Contact",
	isDependent: "Dependent",
	notes: "Notes",
	detailTitle: "Employee Detail",
	missingInfo: "Missing Information",
	missingInfoDesc: "Please check the tabs marked with red error badges to complete the information.",
	contractListTitle: "Labor Contracts List",
	contractListDesc: "View the list of labor contracts signed with this employee (Display only, no editing)",
	contractEmpty: "No labor contract information available.",
	contractCode: "Contract Code",
	contractType: "Contract Type",
	contractDuration: "Duration",
	contractSalary: "Salary / Value",
	contractStatus: "Status",
	contractAction: "Download / View",
	contractActive: "Active",
	contractInactive: "Expired",
	contractNoScan: "No scan",
	contractIndefinite: "Indefinite",
	personalDocTitle: "Personal Documents & Credentials Store",
	personalDocDesc: "Upload, preview, and delete scanned IDs, Passports, Residence Cards, and Certificates of the employee",
	btnUploadDoc: "Upload Document",
	msgUploadingDoc: "Uploading document, please wait...",
	docEmptyTitle: "No personal documents uploaded yet.",
	docEmptyDesc: "Drag & drop file or click the Upload Document button above.",
	tooltipViewDoc: "View Document",
	tooltipDownloadDoc: "Download",
	tooltipDeleteDoc: "Delete Document",
	workHistory: "Work History",
	workHistoryTitle: "Department, Job Title & Salary History",
	workHistoryDesc: "Manage employee work history stages over time",
	btnAddWorkHistory: "Add Stage",
	workHistoryStage: "Work Stage",
	workHistoryDefault: "Initial Default",
	workHistoryStartDate: "Start Date",
	workHistoryEndDate: "End Date",
	workHistorySalary: "Basic Salary (VND)",
	workHistoryNote: "Note",
	workHistoryEmpty: "No work history recorded yet.",
	workHistorySyncDept: "Synced from personal info",
	workHistorySyncJoin: "Synced with join date",
	workHistoryDateError: "End date cannot be before start date",
	relativeName: "Relative's Full Name",
	relativesEmpty: "No relatives information declared.",
	relationshipSpouse: "Spouse",
	relationshipChild: "Child",
	relationshipParent: "Parent",
	relationshipSibling: "Sibling",
	relationshipOther: "Other",
	noViewUrl: "No document preview URL available.",
	noDownloadUrl: "No document download URL available."
};
var gender$2 = {
	male: "Male",
	female: "Female",
	other: "Other"
};
var contract$2 = {
	title: "Contract Management",
	createTitle: "Sign New Contract",
	editTitle: "Update Contract",
	subtitle: "Compliance Management",
	updateSubtitle: "Update contract",
	generalInfo: "General Contract Information",
	type: "Contract Type",
	code: "Contract Code",
	codePlaceholder: "Auto-generated if left blank",
	signDate: "Sign Date",
	startDate: "Effective Date",
	endDate: "Expiry Date (Leave blank if indefinite)",
	baseSalary: "Monthly Base Salary",
	totalValue: "Total Contract Value",
	status: "Contract Status",
	laborSection: "Employee Details (Party B)",
	selectEmployee: "Select Employee",
	selectEmployeePlaceholder: "Search and select employee for contract",
	employmentType: "Employment Type",
	jobTitle: "Job Title / Position",
	workLocation: "Work Location",
	workingHours: "Standard Working Hours (hours/day)",
	probationPeriod: "Probation Period",
	probationSalary: "Probation Salary Rate (%)",
	bankName: "Salary Bank",
	bankAccount: "Bank Account Number",
	insurance: "Insurance Types Enrolled",
	partnerSection: "Partner / Client Details (Party B)",
	partnerName: "Partner / Client Name",
	partnerTaxCode: "Tax Code / Business License",
	partnerRepresentative: "Authorized Representative",
	partnerRepresentativeRole: "Representative Position",
	partnerAddress: "Head Office Address",
	paymentMethod: "Payment Method",
	paymentTerms: "Payment Terms",
	billingCycle: "Billing Cycle",
	overtimeSection: "Overtime Compliance (Vietnam Labor Code)",
	agreement36: "Apply Overtime Limits (Vietnam Labor Code)",
	overtimeAllowance: "Include fixed/lump-sum overtime allowance",
	includedOvertimeHours: "Included OT Hours / Month",
	edmSection: "Scanned Documents / Attachments (EDM)",
	edmUpload: "Upload scanned contract files",
	complianceBadge: "Compliance Control",
	complianceTitle: "Compliance Registration",
	complianceDescCreate: "Upon submission, the contract will be automatically cross-checked with the existing personnel list to ensure legality before storage.",
	complianceDescEdit: "Any updates to contract parameters (salary, overtime terms) will automatically sync with payroll and overtime control systems.",
	submitContract: "Finalize Contract",
	missingInfo: "Missing Information",
	saveSuccess: "Success",
	saveSuccessDesc: "New contract has been signed with full compliance.",
	updateSuccess: "Success",
	updateSuccessDesc: "Contract has been updated successfully.",
	saveError: "Contract Signing Error",
	updateError: "Contract Update Error",
	loadError: "Contract Load Error",
	loadingData: "Loading contract data...",
	typeLabor: "Labor Contract",
	typeVendor: "Vendor (Party B)",
	typeClient: "Client (Party B)",
	statusActive: "Active (ACTIVE)",
	statusExpired: "Expired (EXPIRED)",
	statusTerminated: "Terminated (TERMINATED)",
	employmentSeishain: "Full-time (Seishain)",
	employmentKeiyakushain: "Contract (Keiyakushain)",
	employmentHaken: "Dispatched (Haken)",
	employmentArubaito: "Part-time (Arubaito)",
	selectMissEmployee: "Please select the employee for this contract.",
	selectMissPartner: "Please enter partner / organization name.",
	selectMissPartnerTax: "Please enter partner tax code.",
	selectMissValue: "Please enter contract value.",
	edmUploading: "Uploading attachments...",
	manageTitle: "Contract Management",
	manageDesc: "Manage and archive employee labor contracts and commercial agreements for the business.",
	signNew: "Sign New Contract",
	quickSign: "Quick Sign Contract",
	quickSignSuccess: "Contract signed successfully. Profile updated.",
	typeCommercial: "Commercial Contract",
	searchPlaceholder: "Search contract code, employee...",
	typeSelect: "Contract Type",
	statusSelect: "Status",
	party: "Party",
	duration: "Duration",
	value: "Value",
	documents: "Documents",
	actions: "Actions",
	loading: "Loading contract list...",
	noData: "No matching contracts found.",
	noEmployee: "No Employee Assigned",
	corporatePartner: "Corporate Partner",
	indefinite: "Indefinite",
	files: "files",
	exportPdf: "Export Sample PDF",
	exportPdfStyle: "Select PDF Export Theme Style",
	exportPdfDesc: "Choose one of the professional document designs below to export the contract:",
	styleClassic: "Legal Traditional (Classic Style)",
	selected: "Selected",
	styleClassicDesc: "Uses formal Serif typography, standardized national header formats, and clean, elegant thin borders separating clauses.",
	styleModern: "Modern Corporate (Modern Style)",
	styleModernDesc: "Clean Sans-serif typography with emerald green theme color, outstanding compliance highlight box, and structured visual signature areas.",
	styleAcademic: "Elegant Publication (Academic Style)",
	styleAcademicDesc: "Minimalist layout with elegant Navy Blue accent and generous margin spacing. Perfect for large commercial agreements.",
	downloadPdf: "Export and Download PDF",
	deleteConfirmTitle: "Delete Contract?",
	deleteConfirmDesc: "Are you sure you want to delete contract {code}? This action cannot be undone.",
	allContracts: "All Contracts",
	allTypes: "All Types",
	statusAll: "All Statuses",
	deleteSuccessDesc: "Contract has been successfully deleted from the system.",
	deleteError: "Contract Deletion Error",
	payBank: "Bank Transfer",
	payCash: "Cash",
	payCredit: "Credit Card",
	cycleMonthly: "Monthly",
	cycleQuarterly: "Quarterly",
	cycleOneTime: "One-time",
	fileTooLarge: "File Too Large",
	fileTooLargeDesc: "File {name} exceeds the 10MB limit.",
	createSuccess: "Contract created successfully",
	createSuccessWithDocs: "Contract created and documents uploaded successfully",
	createError: "Error creating contract",
	downloadPdfSuccess: "PDF downloaded successfully",
	exportPdfError: "Error exporting contract PDF",
	formatError: "Invalid file format",
	formatErrorDesc: "Only PDF, DOC, DOCX, JPG, PNG formats are supported",
	sizeError: "File size too large",
	sizeErrorDesc: "Attached file size must not exceed 10MB",
	statusPending: "Pending Approval (PENDING)",
	employmentFullTimeVn: "Full-time (Vietnam)",
	employmentPartTimeVn: "Part-time (Vietnam)"
};
var timesheet$2 = {
	title: "Personal Timesheet",
	desc: "Record your daily working hours and track your attendance history.",
	standardTimeSystem: "STANDARD TIME SYSTEM",
	workingTimeVN: "Vietnam Working Time",
	gpsClock: "High-precision GPS clock time",
	todayTracking: "Today's Attendance Recording",
	trackingDesc: "Press Check-in when starting your workday. If check-in is after 09:00, the status will be recorded as Late. Press Check-out before leaving to complete the daily work record.",
	checkInTime: "Check-in Time",
	checkOutTime: "Check-out Time",
	checkedIn: "Checked In",
	checkedOut: "Checked Out",
	history: "Attendance History",
	historyDesc: "Track detailed working days recorded during the month.",
	selectMonth: "Select month",
	noData: "No attendance data for this month.",
	success: "Attendance Success",
	checkInSuccess: "You have successfully checked in today.",
	checkOutSuccess: "You have successfully checked out today.",
	date: "Date",
	status: "Status",
	day0: "Sunday",
	day1: "Monday",
	day2: "Tuesday",
	day3: "Wednesday",
	day4: "Thursday",
	day5: "Friday",
	day6: "Saturday",
	checkIn: "Check In",
	checkOut: "Check Out",
	today: "Today",
	workingHours: "Working Hours",
	overtime: "Overtime",
	manageTitle: "Timesheet Administration",
	employee: "Employee",
	totalHours: "Total Hours",
	overtimeHours: "Overtime Hours",
	lateMins: "Late (mins)",
	earlyLeaveMins: "Early Leave (mins)",
	accessDenied: "Access Denied",
	accessDeniedDesc: "Your account does not have Manager or Administrator role to manage staff timesheets.",
	backHome: "Back to Home",
	adminTitle: "Staff Timesheet Administration",
	adminDesc: "Review, adjust or add new manual timesheets and view the overall attendance report for all employees.",
	addManual: "Add Manual Timesheet",
	tabHistory: "Timesheet History",
	tabStats: "Attendance Statistics",
	tabConfigs: "Working Hour Configs",
	tabPayroll: "Payroll",
	payrollTitle: "Monthly Payroll Calculation",
	payrollDesc: "View details of hours worked, basic salary, overtime, attendance bonuses, and late/absence deductions.",
	selectPayrollMonth: "Select payroll month",
	loadingPayroll: "Loading payroll calculations...",
	noPayrollData: "No payroll data found for this month.",
	baseSalary: "Basic Salary",
	workingDaysActualStandard: "Days (Actual/Standard)",
	overtimeCol: "Overtime (OT)",
	attendanceAllowance: "Attendance Bonus",
	deductionLate: "Late Penalty",
	deductionLeave: "Leave Deduction",
	advancePayment: "Paid in Advance",
	netSalary: "Net Paid",
	statusPaid: "Paid",
	statusPending: "Pending",
	payrollDetailsFor: "Payslip: {name} ({code})",
	actualWorkingDays: "Actual Workdays",
	payrollMonth: "Working Month",
	overtimeSalary: "Overtime Salary",
	attendanceAllowanceLabel: "Attendance Allowance",
	deductionLateLabel: "Late Deduction",
	deductionLeaveLabel: "Exceeded Leave Deduction",
	deductionUnion: "Union Fee",
	deductionTax: "Personal Income Tax",
	deductionUnionLabel: "Union Fee Deduction",
	deductionTaxLabel: "Income Tax Deduction",
	advancePaymentLabel: "Advance Payment",
	paymentStatusLabel: "Payment Status",
	netSalaryLabel: "Net Paid",
	btnSavePayroll: "Save Payslip",
	msgSavePayrollSuccess: "Employee payroll saved successfully.",
	msgSavePayrollError: "An error occurred while saving payroll.",
	overtimeBreakdown: "Overtime breakdown details",
	overtimeNormal: "Normal Overtime (1.5x)",
	overtimeWeekend: "Weekend Work (2.0x)",
	overtimeHoliday: "Holiday Work (3.0x)",
	exportExcelSuccess: "Payroll Excel file exported successfully.",
	exportExcelError: "An error occurred while exporting Excel.",
	exportPdfSuccess: "Payroll PDF file exported successfully.",
	exportPdfError: "An error occurred while exporting PDF.",
	searchKeyword: "Search keyword",
	searchPlaceholder: "Employee name or code...",
	statusAll: "All Statuses",
	statusPresent: "On Time (PRESENT)",
	statusLate: "Late (LATE)",
	statusAbsent: "Absent (ABSENT)",
	fromDate: "From Date",
	toDate: "To Date",
	no: "No.",
	staff: "Staff",
	dateCol: "Date",
	checkInCol: "Check-in",
	checkOutCol: "Check-out",
	expectedWork: "Expected Work",
	checkoutDiff: "Checkout Diff",
	statusCol: "Status",
	noteCol: "Note",
	actionCol: "Actions",
	loadingList: "Loading timesheet records...",
	noHistoryFound: "No timesheet history found matching the filters.",
	editOrCompensate: "Edit / Compensate",
	showLines: "Showing {current}/{total} rows",
	monthStats: "Monthly Attendance Statistics",
	monthStatsDesc: "Summary of working days, late arrivals, and absences for all employees.",
	selectStatsMonth: "Select statistics month",
	statsSummary: "Summary Report",
	stats30Days: "30-Day Calendar Detail",
	loadingStats: "Calculating attendance metrics...",
	noEmployeeMonth: "No employees found in the selected month.",
	staffCode: "ID",
	staffName: "Employee Name",
	onTime: "On Time",
	lateCol: "Late",
	lateHoursPenalty: "Late Hours Penalty",
	excusedLeave: "Excused",
	absentNoExcuse: "Unexcused",
	totalAbsent: "Total Absent",
	workingDaysMax: "Working Days / Max",
	otHours: "OT (hrs)",
	hours: "hrs",
	days: "days",
	mins: "mins",
	times: "times",
	statsCalendarFor: "Detailed calendar for",
	legendLateEarly: "Late / Early Leave",
	legendMissInOut: "Missing check-in/out",
	legendWeekendHoliday: "Weekend / Holiday",
	legendOnTime: "On Time",
	weekend: "Weekend",
	holiday: "Holiday",
	excusedLeaveAll: "Excused Leave (All Day)",
	excusedLeaveMorning: "Excused Leave (Morning)",
	excusedLeaveAfternoon: "Excused Leave (Afternoon)",
	missCheck: "Missing Check",
	configTitle: "Working Hour Configurations",
	configDesc: "Define standard attendance shifts with flexible application periods.",
	addConfig: "Add Configuration",
	loadingConfigs: "Loading configurations...",
	noConfigsYet: "No working hour configurations created yet.",
	defaultSystem: "System Default",
	flexible: "Flexible",
	applyAllTime: "Apply: All time (Fallback)",
	applyRange: "Apply: {start} ~ {end}",
	standardIn: "Standard Check-in",
	standardOut: "Standard Check-out",
	saturday: "Saturday",
	saturdayOff: "Saturday Off",
	saturdayMorning: "Saturday Morning (until 12:00)",
	saturdayFull: "Full-day Saturday",
	editConfig: "Edit Configuration",
	deleteConfig: "Delete Configuration",
	dialogManualEdit: "Update Timesheet / Compensation",
	dialogManualCreate: "Add Manual Timesheet",
	employeeLabel: "Employee",
	employeeSelectPlaceholder: "Select employee",
	attendanceDate: "Attendance Date",
	selectDate: "Select date",
	checkInLabel: "Check-in Time",
	checkInPlaceholder: "Select check-in time",
	checkOutLabel: "Check-out Time",
	checkOutPlaceholder: "Select check-out time",
	statusLabel: "Recorded Status",
	noteLabel: "Reason / Additional Notes",
	notePlaceholder: "Enter reason for adjustment or compensation...",
	btnCancel: "Cancel",
	btnSaveRecord: "Save Record",
	dialogConfigEdit: "Edit Working Hour Config",
	dialogConfigCreate: "Add Working Hour Config",
	configName: "Configuration Name",
	configNamePlaceholder: "e.g. Summer Working Hours",
	setDefaultConfig: "Set as Default Configuration",
	setDefaultConfigDesc: "The system will use this if no other flexible configurations match the time period.",
	saturdayWorkingMode: "Saturday Working Mode",
	saturdayWorkingModeDesc: "Apply attendance counting and late penalties for Saturdays.",
	valMissManualData: "Missing Data",
	valMissManualDataDesc: "Please select employee and attendance date.",
	msgUpdateSuccess: "Update Successful",
	msgUpdateSuccessDesc: "The timesheet record has been saved successfully.",
	valInvalidConfig: "Invalid Information",
	valInvalidConfigDesc: "Please fill in configuration name and shift hours fully.",
	msgSaveConfigSuccess: "Working hour configuration saved.",
	msgDeleteConfigConfirm: "Are you sure you want to delete this working hour configuration?",
	msgDeleteConfigSuccess: "Configuration deleted successfully.",
	tabShifts: "Shifts",
	tabShiftAssignments: "Shift Assignments",
	shiftTitle: "Shift Management",
	shiftDesc: "Configure shifts and define overtime calculation rules for employees.",
	addShift: "Add Shift",
	dialogShiftCreate: "Create New Shift",
	dialogShiftEdit: "Edit Shift",
	shiftName: "Shift Name",
	shiftNamePlaceholder: "e.g. Day Shift, Night Shift...",
	allowOvertime: "Allow Overtime Calculation",
	maxOvertimeHours: "Max Overtime Hours",
	maxOvertimeHoursPlaceholder: "Hours (e.g. 2), leave blank for unlimited",
	shiftAssignedSuccess: "Shift assigned to employees successfully.",
	deleteShiftConfirm: "Are you sure you want to delete this shift? All related assignments will be deleted.",
	deleteShiftSuccess: "Shift deleted successfully.",
	assignShift: "Assign Shift to Employees",
	employeeSelect: "Select Employees",
	datesSelect: "Select Dates",
	selectShift: "Select Shift",
	btnAssign: "Assign Shift",
	assignedShiftsList: "Employee Shift Assignments",
	noAssignedShifts: "No shift assignments found for this period.",
	deleteAssignmentConfirm: "Are you sure you want to delete this assignment?",
	deleteAssignmentSuccess: "Assignment deleted successfully.",
	overtimeStatus: "Overtime",
	overtimeAllowed: "Allowed",
	overtimeNotAllowed: "Not Allowed",
	assignShiftsTitle: "Employee Shift & Overtime Schedule",
	assignShiftsDesc: "Manage flexible shifts, overtime configurations, and synchronize monthly leaves.",
	bulkActions: "Bulk Actions",
	selectedEmployees: "Selected: {count} employees",
	bulkAssignBtn: "Bulk Assign",
	bulkResetBtn: "Bulk Reset",
	legendTitle: "Schedule Legend:",
	legendAL: "Annual Leave",
	legendSL: "Sick Leave",
	legendOT: "Overtime Allowed",
	legendNoOT: "No Overtime",
	legendOff: "Day Off / Weekend",
	loadingAssignData: "Loading shift assignment data...",
	noEmployeesFound: "No employees found",
	employeeHeader: "Employee",
	departmentHeader: "Department",
	monthAssign: "Schedule Month",
	allDepartments: "All Departments",
	searchEmployee: "Search Employee",
	searchEmployeePlaceholder: "Name, employee code...",
	w0: "Sun",
	w1: "Mon",
	w2: "Tue",
	w3: "Wed",
	w4: "Thu",
	w5: "Fri",
	w6: "Sat",
	selectAtLeastOneEmployee: "Please select at least one employee",
	selectShiftError: "Please select a shift",
	selectDateRangeError: "Please select a date range",
	selectAtLeastOneWeekdayAssign: "Please select at least one day of the week to apply",
	selectAtLeastOneWeekdayReset: "Please select at least one day of the week to reset",
	bulkAssignSuccess: "Bulk shift assignment completed successfully",
	bulkResetSuccess: "Bulk shift reset completed successfully",
	dialogBulkAssignHeader: "Bulk Shift Assignment",
	dialogBulkAssignWarningPrefix: "You are assigning a shift to",
	dialogBulkAssignWarningSuffix: "selected employees.",
	dialogBulkResetHeader: "Bulk Reset Shifts to Default",
	dialogBulkResetWarningPrefix: "This action will restore the schedule of",
	dialogBulkResetWarningSuffix: "employees to system default shift within the selected date range.",
	applyToWeekdays: "Apply to weekdays",
	confirm: "Confirm"
};
var leaveRequest$2 = {
	title: "Leave Request",
	pendingTitle: "Leave Approval",
	startDate: "Start Date",
	endDate: "End Date",
	reason: "Reason",
	type: "Leave Type",
	status: "Status",
	approver: "Approver",
	approvedAt: "Approved At",
	rejectedAt: "Rejected At",
	accessDenied: "Access Denied",
	accessDeniedDesc: "Your account does not have Manager or Administrator role to approve leave requests.",
	backToHome: "Back to Home",
	panelDesc: "Review, approve or reject pending leave requests from employees.",
	tabAll: "All",
	tabPending: "Pending",
	tabApproved: "Approved",
	tabRejected: "Rejected",
	noRequest: "There are currently no leave requests.",
	noRequestWithStatus: "No leave requests found with status \"{status}\".",
	allDay: "All day",
	morning: "Morning",
	afternoon: "Afternoon",
	days: "days",
	noReason: "No reason provided",
	dialogApproveTitle: "Approve Leave Request",
	dialogRejectTitle: "Reject Leave Request",
	employee: "Employee",
	approverNote: "Approver Feedback / Notes",
	approverNotePlaceholder: "Enter feedback to the employee (optional)...",
	confirmApprove: "Confirm Approve",
	confirmReject: "Confirm Reject",
	processSuccess: "Processed successfully",
	approveSuccessDesc: "Leave request has been successfully approved.",
	rejectSuccessDesc: "Leave request has been successfully rejected.",
	stt: "No.",
	timeRange: "Leave Period",
	system: "System",
	typeAnnual: "Annual Leave",
	typeSick: "Sick Leave",
	typeSpecial: "Special Leave",
	typeUnpaid: "Unpaid Leave",
	desc: "Request leave online and track your approval history.",
	myList: "My Leave Requests",
	myListDesc: "History and status of submitted leave requests.",
	noMyRequest: "You have not created any leave requests yet.",
	createDesc: "Submit a new leave request to your manager.",
	session: "Leave Session",
	reasonPlaceholder: "Please specify the reason for leave...",
	submit: "Submit Request",
	detailTitle: "Leave Request Details",
	code: "Request Code",
	totalDays: "Total Days",
	period: "Time Period",
	approverFeedback: "Approver Feedback",
	noFeedback: "No feedback comments",
	morningSession: "Morning (Off 8:30 - 12:00)",
	afternoonSession: "Afternoon (Off 13:15 - 17:30)",
	valIncomplete: "Incomplete Information",
	valIncompleteDesc: "Please select leave type, start date, and end date.",
	submitSuccess: "Leave Request Submitted",
	submitSuccessDesc: "Your leave request has been sent to the manager.",
	from: "From",
	to: "To"
};
var compliance$2 = {
	title: "Compliance Engine",
	summary: "Compliance Overview",
	riskLevel: "Risk Level",
	violations: "Violations",
	warnings: "Warnings",
	centerTitle: "Compliance Warning Center",
	centerDesc: "Automated scanning & early warning of legal risks (Visa, Contract, Tax, Overtime Limits).",
	btnScan: "Real-time Compliance Scan",
	scanning: "Scanning...",
	healthScore: "Compliance Health Score",
	healthScoreDesc: "Calculated based on the severity of active compliance issues in the system.",
	recommendation: "Recommendation",
	healthExcellent: "Excellent (Compliant)",
	healthFair: "Fair (Moderate Risk)",
	healthAlarm: "Alarm (High Risk)",
	recExcellent: "Continue maintaining compliance procedures.",
	recFair: "Resolve WARNING level risks immediately.",
	recAlarm: "Resolve CRITICAL errors urgently to avoid legal penalties.",
	criticalRisk: "Critical Risk",
	criticalDesc: "CRITICAL / Urgent action required",
	warningRisk: "Risk Warning",
	warningDesc: "WARNING / Action & review required",
	resolvedRisk: "Auto-healed Risks",
	resolvedDesc: "AUTO-HEALED / SELF-RESOLVED",
	criticalTitle: "CRITICAL RISK (CRITICAL)",
	btnActNow: "Resolve Now",
	tabActiveRisks: "Active Risks",
	tabResolvedHistory: "Resolution History",
	searchPlaceholder: "Search compliance issues...",
	severityPlaceholder: "Severity level",
	typePlaceholder: "Risk category",
	tooltipRefresh: "Refresh",
	colSeverity: "Severity",
	colType: "Category",
	colDescription: "Issue Details",
	colEntity: "Detected Target",
	colStatus: "Status",
	colAction: "Resolution Actions",
	loading: "Analyzing compliance risks...",
	noDataTitle: "Excellent! No compliance risks detected.",
	noDataDesc: "Your system is operating in perfect compliance.",
	sevCritical: "Critical",
	sevWarning: "Warning",
	sevInfo: "Info",
	sevAll: "All Severities",
	statusOpen: "Open",
	statusResolved: "Resolved",
	resolvedBy: "By",
	btnResolve: "Resolve",
	tooltipManualResolve: "Manual resolve",
	dialogResolveTitle: "Confirm Issue Resolution",
	dialogResolveHeader: "Resolve Compliance Alert",
	dialogResolveDesc: "You are marking this compliance alert as Resolved in the system.",
	dialogResolveNote: "Explanation Note (Required)",
	dialogResolvePlaceholder: "Enter reason or notes for resolving this risk...",
	btnCancel: "Cancel",
	btnConfirmResolve: "Confirm Resolve",
	typeVisa: "Alien card expiration",
	typeContract: "Contract expiration",
	typeInvoice: "Missing invoice/receipt",
	typeOvertime: "Overtime limit exceed",
	typeAll: "All Categories",
	typeVisaExpiration: "Visa Expiration (VISA)",
	typeContractExpiration: "Contract Expiration (CONTRACT)",
	typeMissingInvoice: "Missing Receipt/Invoice (INVOICE)",
	typeOvertimeLimit: "Overtime limit exceed (OVERTIME)",
	msgScanSuccess: "Compliance Scan Complete",
	msgScanSuccessDesc: "Compliance scan completed. Newly detected: {created} risks, auto-healed: {resolved} risks.",
	msgScanError: "Compliance Scan Failed",
	msgScanErrorDesc: "Failed to connect to the scanner engine.",
	msgActError: "Unable to determine the resolution path for this alert type.",
	msgResolveSuccess: "Resolution Successful",
	msgResolveSuccessDesc: "Compliance warning has been resolved successfully.",
	msgResolveError: "Action Failed",
	msgResolveErrorDesc: "Unable to resolve compliance alert."
};
var dashboard$2 = {
	title: "Dashboard",
	welcome: "Welcome Back",
	totalEmployees: "Total Employees",
	totalContracts: "Total Contracts",
	totalTransactions: "Total Transactions",
	pendingLeaves: "Pending Leave Requests",
	complianceBannerTitle: "LEGAL VIOLATION DETECTION SYSTEM",
	complianceBannerDesc: "Warning: Detected {count} CRITICAL risks (Visa expiring soon, overtime exceeding legal limits, or missing invoices). Click to resolve automatically!",
	enterpriseDashboard: "Enterprise Dashboard",
	welcomeUser: "Welcome, {name}. Here is the aggregated analysis of actual department data.",
	admin: "Administrator",
	fiscalYear: "Fiscal Year",
	btnComplianceControl: "Compliance Control",
	revenueYearBadge: "REVENUE YEAR",
	revenueYearTitle: "Fiscal Revenue",
	expenseYearBadge: "EXPENSE YEAR",
	expenseYearTitle: "Operating Expenses",
	netIncomePositive: "SURPLUS",
	netIncomeNegative: "DEFICIT",
	netIncomeTitle: "Net Income",
	complianceScoreTitle: "Legal Compliance Index",
	compCompliant: "COMPLIANT",
	compWarning: "WARNING",
	compDanger: "DANGER",
	activeEmployees: "Present Employees",
	employeesCount: "{active} / {total} Staff",
	activeContracts: "Active Contracts",
	contractsCount: "{active} / {total} Contracts",
	pendingLeavesCount: "{count} Requests",
	cashflowTitle: "Revenue & Expenses for {year}",
	cashflowDesc: "Monthly growth trends and actual operating expenses",
	optRevenue: "Revenue",
	optExpense: "Expenses",
	optProfit: "Profit",
	contractStructure: "Contract Structure",
	contractStructureDesc: "Distribution ratio among different contract types",
	topExpenses: "Top Spend Categories",
	topExpensesDesc: "Most significant expenses incurred during the fiscal year",
	staffDensity: "Staff Distribution by Department",
	staffDensityDesc: "Allocation percentage of workforce",
	timesheetStat: "Attendance & Overtime This Month",
	timesheetStatDesc: "Monitor attendance days, total hours, and actual overtime hours",
	btnTimesheetDetail: "Timesheet Details",
	colEmpCode: "Emp Code",
	colEmpName: "Employee",
	colPresent: "Present",
	colAbsent: "Absent",
	colTotalHours: "Total Hours",
	colOvertime: "Overtime",
	colOtStatus: "OT Status",
	otOverLimit: "Over Overtime Limit!",
	otWarning: "Over Warning Limit",
	otApproaching: "Approaching Warning",
	otSafe: "Safe",
	noTimesheetData: "No attendance data recorded for this month.",
	recentTransactions: "Recent Transactions",
	recentTransactionsDesc: "Latest real-time financial ledger activity",
	btnCashbook: "Cashbook",
	unclassified: "Unclassified",
	noTransactions: "No financial transactions recorded.",
	msgConnectError: "Connection Error",
	msgSyncError: "Unable to synchronize Dashboard data."
};
var transaction$2 = {
	title: "Cashflow & Expenses",
	desc: "Manage actual Cash In/Out and monitor supporting document attachments (Invoices/Bank Transfer Slips).",
	addBtn: "Add New Transaction",
	totalRevenue: "Actual Revenue Received",
	totalExpense: "Actual Expense Paid",
	netBalance: "Net Cashflow",
	complianceRate: "Document Compliance Rate",
	tabAll: "All Transactions",
	tabExpense: "Actual Expenses",
	tabRevenue: "Revenue Streams",
	searchPlaceholder: "Transaction code, category...",
	type: "Transaction Type",
	status: "Status",
	compliance: "Legal Document Status",
	refresh: "Refresh",
	allTypes: "All Types",
	expense: "Expense (EXPENSE)",
	revenue: "Revenue (REVENUE)",
	allStatus: "All Statuses",
	paid: "Paid",
	pending: "Pending",
	cancelled: "Cancelled",
	allDocs: "All Documents",
	hasDocs: "With Documents",
	missingDocs: "Missing Documents",
	dateCol: "Date",
	codeCol: "Txn Code",
	typeCol: "Type",
	categoryCol: "Category",
	amountCol: "Amount (Total)",
	taxCol: "Tax Info / Invoice ID",
	paymentCol: "Payment",
	documentCol: "Legal Documents",
	actionCol: "Actions",
	loading: "Loading cashflow data...",
	noData: "No matching transactions found.",
	revenueShort: "In",
	expenseShort: "Out",
	original: "Net Amount",
	files: "files",
	missingDocsAlert: "MISSING DOCUMENTS",
	editTooltip: "Edit Transaction",
	deleteTooltip: "Delete Transaction",
	dialogDeleteTitle: "Confirm Transaction Deletion",
	dialogDeleteConfirm: "Delete Financial Transaction?",
	dialogDeleteDesc: "Are you sure you want to delete transaction {code} under category {category}? This action will update the cashflow statistics and cannot be undone.",
	btnCancel: "Cancel",
	btnConfirmDelete: "Confirm Delete",
	dialogDocTitle: "Transaction Documents — {code}",
	errorLoad: "Error Loading Cashflow",
	errorLoadDesc: "Could not load transaction list.",
	msgDeleteSuccess: "Transaction Deleted Successfully",
	msgDeleteSuccessDesc: "The cashflow record has been cleared.",
	msgDeleteFailed: "Action Failed",
	msgDeleteFailedDesc: "Could not delete the transaction.",
	statusPaid: "Paid/Full",
	statusPending: "Pending Payment",
	statusCancelled: "Cancelled",
	noTax: "Tax-exempt (0%)",
	bankTransfer: "Bank Transfer",
	cash: "Cash",
	creditCard: "Credit Card",
	subtitle: "Accounting & Cashflow",
	createTitle: "Record New Transaction",
	editTitle: "Edit Transaction",
	infoSection: "Transaction Info & Payment",
	code: "Transaction Code",
	amount: "Total Amount (Tax Included)",
	date: "Transaction Date",
	codeAutoGenerate: "Auto-generated Code",
	category: "Category",
	paymentMethod: "Payment Method",
	amountSection: "Transaction Value & Tax Calculation",
	netAmount: "Original Value (Before Tax)",
	taxAmount: "Tax Amount",
	withholdingTax: "Withholding Tax (if applicable)",
	invoiceNumber: "Tax ID / Invoice Number",
	invoiceError: "Qualified Invoice must start with T and followed by exactly 13 digits.",
	descriptionSection: "Detailed Explanation / Description",
	descriptionPlaceholder: "Enter detailed explanation (purpose, vendor, items)...",
	saveTransaction: "Record Transaction",
	attachSection: "Invoice & Evidence Attachment",
	attachRequired: "Required",
	attachDesc: "Please attach an e-invoice, bank transfer slip or valid receipt.",
	uploadFile: "Select file or drag and drop here",
	uploadFormats: "Supported formats: PDF, DOC, DOCX, XLS, XLSX, PNG, JPG, JPEG (max 10MB)",
	taxRate: "Applied Tax Rate",
	valMissInfo: "Missing Information",
	valMissInfoDesc: "Please fill in all required fields.",
	valMissDocs: "Missing Legal Evidence",
	valMissDocsDesc: "Businesses are required to attach supporting documents (Invoices/Receipts) for expenses to ensure tax compliance.",
	valInvalidInvoice: "Format Error",
	valInvalidInvoiceDesc: "Qualified Invoice must start with T and followed by exactly 13 digits.",
	msgSaveSuccess: "Transaction Saved Successfully",
	msgSaveSuccessDesc: "Transaction and attached documents have been updated.",
	msgSaveSuccessShort: "Transaction has been recorded.",
	msgSaveFailed: "Failed to Save Transaction",
	msgSaveFailedDesc: "Record error",
	catSalary: "Salary",
	catOfficeRent: "Office Rent",
	catUtilities: "Utilities & Internet",
	catOutsourcing: "Outsourcing Cost",
	catSoftware: "Software & SaaS",
	catTravel: "Travel Expense",
	catMarketing: "Marketing & Ads",
	catClientRevenue: "Client Revenue",
	catConsulting: "Consulting Fee",
	catOthers: "Others",
	selectType: "Select Type",
	selectCategory: "Select Category",
	selectMethod: "Select Method",
	selectStatus: "Select Status",
	selectTax: "Select Tax Rate",
	categorySalary: "Staff Salary",
	categoryRent: "Office Rent",
	categoryUtilities: "Utilities & Internet",
	categoryOutsourcing: "Outsourcing Cost",
	categorySoftware: "Software & SaaS Tools",
	categoryTravel: "Travel Expenses",
	categoryMarketing: "Advertising & Marketing",
	categoryRevenue: "Client Revenue",
	categoryConsulting: "Consulting Fee",
	categoryOthers: "Other Expenses",
	edmSection: "Scanned Documents / Attachments (EDM)",
	edmDesc: "Attach digital invoice or valid payment voucher",
	edmRequired: "Evidence Required",
	loadError: "Error loading transaction details",
	loadingData: "Loading transaction details...",
	methodBankTransfer: "Bank Transfer",
	methodCash: "Cash",
	methodCreditCard: "Credit Card",
	missingEvidence: "Missing Legal Evidence",
	missingEvidenceDesc: "Expense transactions must have an attached invoice or voucher.",
	saveChanges: "Save Changes",
	saveError: "Error saving transaction",
	taxCt10Jp: "Japan Consumption Tax 10%",
	taxCt8Jp: "Japan Consumption Tax 8%",
	taxNone: "No Tax Applicable (0%)",
	taxVat10Vn: "Vietnam VAT 10%",
	taxVat8Vn: "Vietnam VAT 8%",
	typeExpense: "Expense (EXPENSE)",
	typeRevenue: "Revenue (REVENUE)",
	updateSubtitle: "Update transaction details",
	updateSuccess: "Transaction updated successfully",
	updateSuccessDesc: "Transaction details and attachments have been saved."
};
var pagination$2 = {
	total: "Total: {total} items",
	layout: "Page Layout"
};
var common$2 = {
	cancel: "Cancel",
	"delete": "Delete"
};
var themeCustomizer$2 = {
	title: "Sidebar Settings",
	subtitle: "Theme & Style Customizer",
	mode: "Display Mode",
	modeColor: "Solid Color",
	modeImage: "Background Image",
	modeBoth: "Blended Mix",
	colorLabel: "Sidebar Theme Color (6 Colors)",
	colorNameDefault: "Default",
	colorNameGoc: "Classic",
	imageLabel: "Artistic Background (6 Images)",
	imageNone: "None",
	opacityLabel: "Transparency (Opacity)",
	opacitySub: "Applies to sidebar background color & image",
	opacityStart: "Clear",
	opacityEnd: "Solid",
	btnReset: "Reset to Default",
	btnDone: "Done",
	systemPrimaryLabel: "System Brand Color",
	systemPrimarySub: "Change the global PrimeVue theme and primary color",
	colorEmerald: "Emerald Green",
	colorBlue: "Royal Blue",
	colorPurple: "Amethyst Purple",
	colorOrange: "Vibrant Orange",
	colorRed: "Crimson Red",
	colorTeal: "Teal Breeze",
	fontLabel: "System Typography",
	fontSub: "Change the global application font family",
	fontDefault: "Outfit (Original)",
	fontInter: "Inter (Clean Tech)",
	fontPoppins: "Poppins (Soft rounded)",
	fontMontserrat: "Montserrat (Geometric)",
	fontPlayfair: "Playfair (Classic Serif)",
	fontMono: "Roboto Mono (Monospace)"
};
const locale_en_46json_2045c38c = {
	btn: btn$2,
	text: text$2,
	msgCommon: msgCommon$2,
	radioButton: radioButton$2,
	deleteModal: deleteModal$2,
	confirmModal: confirmModal$2,
	tableBox: tableBox$2,
	uploadAvatar: uploadAvatar$2,
	uploadFile: uploadFile$2,
	paginator: paginator$2,
	"token.invalid": "Token has expired, please log in again",
	"email.exists": "The entered email address does not exist.",
	"email.unique": "The entered email address already exists.",
	"password.min": "Please enter a password between 8-20 characters including uppercase, lowercase, numbers, and special characters.",
	"password.regex": "Please enter a password between 8-20 characters including uppercase, lowercase, numbers, and special characters.",
	"common.in_use": "Data is in use.",
	"system.error": "System Error",
	"common.system_error": "System Error",
	"errors.invalid_reset_password_token": "OTP code is invalid. Please check again.",
	"common.exists": "Data already exists",
	"common.update.fail": "Data update failed",
	"common.not_found": "Data not found",
	"common.noOptions": "No options available",
	"code.unique": "This code already exists in the system.",
	"code.duplicate": "This code is duplicated.",
	"start_date.invalid": "Invalid start date specify.",
	"end_date.after": "Invalid start date specify.",
	"product_manual_code.unique": "This product code is already registered in the system.",
	"common.max_rate_limit": "API call rate limit exceeded for 1 minute.",
	"email.not_found": "Person in charge with no email selected, please check.",
	auth: auth$2,
	notFound: notFound$2,
	router: router$2,
	menu: menu$2,
	department: department$2,
	user: user$2,
	position: position$2,
	company: company$2,
	userMaster: userMaster$2,
	document: document$2,
	employee: employee$2,
	gender: gender$2,
	contract: contract$2,
	timesheet: timesheet$2,
	leaveRequest: leaveRequest$2,
	compliance: compliance$2,
	dashboard: dashboard$2,
	transaction: transaction$2,
	pagination: pagination$2,
	common: common$2,
	themeCustomizer: themeCustomizer$2
};

var btn$1 = {
	disable: "無効",
	enable: "有効",
	duplicate: "複製",
	imageUpload: "添付",
	fileUpload: "ファイル選択",
	detail: "詳細",
	edit: "編集",
	view: "詳細",
	create: "登録",
	ok: "OK",
	list: "一覧",
	add: "追加",
	register: "登録",
	save: "保存",
	back: "戻る",
	"delete": "削除",
	cancel: "キャンセル",
	change: "変更",
	search: "探す...",
	deactivate: "無効化",
	activate: "有効化",
	approval: "承認",
	reject: "却下",
	confirm: "確定",
	start: "開始",
	draft: "下書き",
	send: "送信",
	login: "ログイン",
	select: "選択する",
	auto: "自動付番",
	success: "成功",
	warning: "警告",
	total: "合計",
	entries: "エントリ",
	"import": "インポート",
	next: "次へ",
	request: "申請",
	"export": "エクスポート",
	sendFax: "FAX送信",
	sendMail: "メール送信",
	update: "請求情報更新",
	filter: "検索",
	removeFilter: "クリア",
	showAll: "詳細",
	logOut: "ログアウト",
	close: "閉じる",
	sync: "更新"
};
var text$1 = {
	cancel: "キャンセル",
	"delete": "削除",
	empty: "空欄",
	no: "No.",
	id: "ID",
	deleteSuccess: "{field}削除に成功しました",
	syncSuccess: "同期の待列に保存成功しました。順番に処理されますので、お待ちください。",
	resignSuccess: "{field}登録されました。",
	noData: "データがありません。",
	notEmptyData: "このフィールドを入力してください。",
	notEmptyChoose: "{field}をご選択ください。",
	notEmptyInput: "{field}をご入力ください。",
	errorTimePast: "過去時間を選択しないでください。",
	saveSuccess: "{field}保存されました。",
	max255: "{field}を２５５文字以内で入力してください。",
	max50: "{field}を50文字以内で入力してください。",
	max20: "{field}を20文字以内で入力してください。",
	max10: "{field}を10文字以内で入力してください。",
	max9: "{field}を9文字以内で入力してください。",
	min8: "{field} を 8 文字以上で入力してください。",
	slugFormat: "{field} は小文字 (a-z)、数字、ハイフンのみ使用できます",
	length10to13: "{field} は10文字から13文字の間で入力してください",
	length10to12: "{field} は10文字から12文字の間で入力してください",
	updateSuccess: "Blastmailのアカウント設定が完了しました。",
	createSuccess: "登録に成功しました。",
	udSuccess: "保存に成功しました。",
	activateSuccess: "有効化に成功しました。",
	deactivateSuccess: "無効化に成功しました。",
	max2000: "{field}を2000文字以内で入力してください。",
	duplicate: "は重複されています。",
	date: "日付",
	time: "時間",
	note: "備考",
	name: "プラン名",
	type: "種類",
	price: "価格",
	action: "アクション",
	email: "メールアドレス",
	profile: "プロフィール",
	director: "社長",
	all: "全て",
	status: "ステータス",
	minus: "分",
	second: "秒",
	success: "成功",
	error: "エラー",
	errorInput: "入力内容が正しくありません。赤く表示されている項目を確認してください。",
	require: "必須",
	registerBy: "登録",
	updatedBy: "最更",
	msgPostcodeValid: "郵便番号のフォーマットが正しくない",
	msgDropdownNoData: "一致する結果はありません",
	errorCodeFormat: "商品コードは英数字、日本の文字とアンダライン記号でご記入ください。",
	errorMailFormat: "メールアドレスの形式が正しくありません。",
	min0Valid: "0より大きい数値を入力してください。",
	validHiragana: "ひらがなでご記入ください",
	validSpacing: "{field}には空白を記入しないでください。",
	validUrl: "URLが無効です。再確認してください。",
	textRequired: "{field}は必須項目です。",
	textNumberItem: "{maxLength}つだけ選択可能",
	validateCalendarRange: "開始日と終了日の両方をご選択ください。",
	copy: "コピー",
	sendSuccess: "送信されました。",
	confirmLogoutTitle: "ログアウトしてもよろしいでしょうか？",
	confirmLogoutText: "このプロセスは元に戻せません。",
	active: "有効",
	inactive: "無効",
	deleted: "削除済み",
	sendAllSuccess: "送信が成功しました。",
	createdAt: "登録日",
	updatedAt: "更新日",
	stt: "No.",
	accountLimit: "アカウント制限",
	collaboration: "コラボレーション",
	content: "説明",
	apps: "アプリ",
	fromDate: "開始日",
	toDate: "終了日",
	dateRange: "期間を選択",
	createNew: "新規作成",
	search: "検索",
	confirmDelete: "削除してもよろしいでしょうか？",
	systemCode: "システムコード",
	year: "年",
	month: "月",
	week: "週",
	weekNum: "第{field}週",
	rangeDate: "{start}～{end}日",
	textMoney: "¥",
	quantity: "数量",
	profit: "粗利",
	total: "合計",
	showAll: "すべて表示",
	hide: "非表示",
	pdf: "PDF",
	file: "ファイル",
	history: "詳細",
	msgDeleteSuccess: "削除されました。",
	startDate: "開始日",
	endDate: "終了日",
	selectMonth: "月を選択",
	weekOfMonth: "月の週",
	loadMore: "もっと見る",
	errorPassLength: "8～20文字の長さで、大文字、小文字、数字、特殊文字を含むパスワードを入力してください。",
	errorOtpLength: "認証コードを正しく入力してください。",
	unique: "{field} はシステムに存在してる",
	formatTax: "10文字から13文字までの税コードを入力してください",
	taxMin9: "割引は9文字以内で入力してください",
	password: "8～20文字の長さで、大文字、小文字、数字、特殊文字を含む{field}を入力してください。",
	invalidFileType: "無効なファイル形式です。許可されているファイル形式は png、jpg、jpeg、svg です。",
	invalidFileType1: "無効なファイル形式です。許可されているファイル形式は glb,gltf,obj です。",
	invalidFileSize: "10MBを超えないサイズの画像をアップロードしてください。",
	invalidMediaType: "サポートされていないファイル形式です",
	fileTooLarge: "{type}は許可されたサイズ制限（{size}）を超えています。",
	image: "画像",
	video: "ビデオ",
	emailExists: "メールアドレスまたはパスワードが無効です。再度ご確認ください。",
	emailMax: "メールを２５５文字以内で入力してください。",
	codeIncorrect: "OTPコードが無効です。もう一度ご確認ください。",
	please_fill_all_fields: "すべての必要な情報を入力してください",
	msgMapNotFound: "地図上で住所が見つかりませんでした。",
	verifyFidelity: "データの忠実度を確認する",
	requiredFidelity: "完了する前に、すべての必須フィールドが入力されていることを確認してください。",
	addSuccess: "追加に成功しました。",
	edit: "編集",
	errorMessage: "入力内容が無効であるか、システムエラーが発生しました。",
	info: "情報",
	warning: "警告"
};
var msgCommon$1 = {
	select: "選択",
	confirmLogoutTitle: "ログアウトしてもよろしいでしょうか？",
	confirmLogoutText: "このプロセスは元に戻せません。"
};
var radioButton$1 = {
	yes: "有",
	no: "無"
};
var deleteModal$1 = {
	areYouSure: "削除してもよろしいでしょうか？",
	confirmDelete: "このプロセスは元に戻せません。"
};
var confirmModal$1 = {
	confirm: "確定",
	confirmRequest: "新しい単価を決定しますか?",
	cancel: "キャンセル",
	language: "言語",
	vietnamese: "ベトナム語",
	english: "英語",
	japanese: "日本語",
	confirmExport: "出力確認",
	ExportFile: "輸出",
	leaveTabTitle: "本当にタブを切り替えますか？",
	leaveTabMessage: "保存しない場合、現在のタブの変更内容は失われます。",
	changeActiveNotifySuccess: "連携が有効にされました。",
	changeDeactiveNotifySuccess: "連携が無効にされました。"
};
var tableBox$1 = {
	noData: "まだデータがありません。",
	noSearchData: "一致する結果はありません",
	action: "アクション",
	deleteAllSelect: "選択したデータを全て削除"
};
var uploadAvatar$1 = {
	errType: "ファイル形式またはファイル拡張子が正しくありません。",
	maxImage: "10MB以下の画像をアップロードしてください。"
};
var uploadFile$1 = {
	errType: "ファイル形式またはファイル拡張子が正しくありません。",
	maxFile: "10MB以下の画像をアップロードしてください。",
	uploadFileSuccess: "ファイルのデータがインポート出来ました。"
};
var paginator$1 = {
	itemsPerPage: "1ページに",
	showItems: "{from}-{to}/{total}ページ",
	pages: "{page}/{total}ページ",
	display: " 1ページに",
	perPage: "件",
	showInfo: "{fieldFrom}-{fieldTo}/{fieldTotal}件"
};
var auth$1 = {
	titleLogin: "アカウントにアクセスしてください",
	invalid: "メールアドレスまたはパスワードが無効です。再度ご確認ください。",
	unauthorized: "トークンが不正で利用できません",
	need_update_password: "パスワードの更新が必要です。",
	forbidden: "アクセスが拒否されました！",
	not_found: "入力された OTP コードが正しくありません。",
	blacklist_token: "このトークンはすでに使用されています",
	login: "ログイン",
	email: "ユーザーID",
	code: "認証コード",
	password: "パスワード",
	rememberPassword: "ログイン状態を保持する",
	loginSuccess: "ログインが完了しました。",
	errorMail: "ユーザーIDを入力してください。",
	errorMailFormat: "ユーザーIDの形式が正しくありません。",
	userNotExisted: "ユーザーIDまたはパスワードが正しくありません。",
	errorPass: "パスワードを入力してください。",
	errorPassNew: "新しいパスワードを入力してください。",
	errorPassLength: "半角英小文字、大文字、数字、特殊文字を含む8〜32文字 frontのパスワードを入力してください。",
	forgotPassword: "パスワード忘れ",
	haveAnPassword: "パスワードを覚えましたか?",
	sendResetSuccess: "パスワード再設定リクエストは送信されました。",
	resetPassword: "パスワード再設定",
	receiveOtp: " 認証コードがまだ届いていません？",
	retransmission: "再送信",
	settingPassword: "パスワード設定",
	reSendResetSuccess: "認証コードがメールに送信されました。メールを確認してください。",
	errorOtp: "認証コードを入力してください。",
	newPassword: "新しいパスワード",
	newPasswordConfirm: "パスワード確認",
	errorRePass: "パスワード確認を入力してください。",
	rePassNotMatch: "パスワードとパスワード（確認）が一致しません。ご確認ください。",
	resetSuccess: "パスワードが変更されました。",
	confirmLogout: "ログアウトしてもよろしいでしょうか。",
	settingPasswordSuccess: "初回のパスワード更新に成功しました",
	resetPass: "パスワード変更",
	enterEmailResetPass: "パスワードをリセットするには、メールアドレスを入力してください。",
	sendForgotPass: "認証コード送信",
	otp: "OTP",
	errorEmail: "無効なメールアドレスです。ご確認ください。",
	inactive: "アクセスが拒否されました. アカウントがロックされているか、まだ有効化されていないかです。"
};
var notFound$1 = {
	backToHome: "家に帰る"
};
var router$1 = {
	homePage: "家",
	userList: "社員リスト",
	userRegister: "社員登録",
	userDetail: "従業員の詳細",
	userEdit: "従業員編集",
	categoryRegister: "商品カタログ登録",
	categoryList: "商品カタログ一覧",
	categoryEdit: "製品カタログを編集",
	categoryDetail: "詳細製品カタログ",
	customerRegister: "依頼者登録",
	customerList: "依頼者リスト",
	customerEdit: "顧客編集",
	customerDetail: "顧客詳細"
};
var menu$1 = {
	master: "マスター",
	list: "一覧",
	register: "登録",
	dashboard: "ダッシュボード",
	member: "メンバー管理",
	department: "部署管理",
	departmentList: "部署一覧",
	departmentAdd: "部署新規登録",
	departmentEdit: "部署編集",
	position: "役職管理",
	positionList: "役職一覧",
	positionAdd: "役職新規登録",
	positionEdit: "役職編集",
	company: "会社管理",
	companyList: "会社一覧",
	companyAdd: "会社新規登録",
	companyEdit: "会社編集",
	userMaster: "ユーザー管理",
	employee: "人事管理",
	userMasterList: "ユーザー一覧",
	userMasterAdd: "ユーザー登録",
	userMasterEdit: "ユーザー編集",
	basicInfo: "基本情報",
	contactInfo: "連絡先詳細",
	noteInfo: "備考とその他",
	timesheet: "勤務管理",
	timesheetManage: "勤怠管理 (管理者)",
	leaveRequest: "休暇申請",
	leaveRequestPending: "休暇承認",
	contract: "契約管理",
	transaction: "収支管理 (Cash Flow)",
	compliance: "コンプライアンス管理",
	document: "文書・アーカイブ管理"
};
var department$1 = {
	code: "部署コード",
	name: "部署名",
	note: "備考",
	status: "ステータス",
	title: "部署管理",
	placeholderSearch: "部署コード、部署名",
	noteBasic: "基本部署情報の構成",
	noteDetail: "タスク詳細と機能",
	namePlaceholder: "研究開発部 (R&D)",
	positionListTitle: "役職・職種リスト",
	positionListDesc: "この部署に所属する役職を追加します",
	addPosition: "役職の追加",
	noPositionYet: "役職がまだ登録されていません。追加ボタンをクリックしてください。",
	positionName: "役職名",
	positionNamePlaceholder: "シニアエンジニア...",
	positionDesc: "業務内容",
	positionDescPlaceholder: "業務内容の説明...",
	noteAndDesc: "説明と備考",
	notePlaceholder: "この部署の機能構造に関する詳細な説明を入力してください...",
	valMissPositionName: "役職名を入力してください",
	valMissPositionDesc: "すべての役職名を入力してください。",
	associatedJobTitles: "所属役職"
};
var user$1 = {
	gender: "性別",
	status: "ステータス"
};
var position$1 = {
	title: "役職管理",
	code: "役職コード",
	name: "役職名",
	note: "備考",
	status: "ステータス",
	placeholderSearch: "役職コード、役職名",
	noteBasic: "識別情報とロールの構成",
	noteDetail: "職務要件と役割の説明"
};
var company$1 = {
	title: "会社管理",
	code: "会社コード",
	name: "会社名",
	postcode: "郵便番号 (Postcode)",
	searchAddress: "住所検索",
	area: "エリア",
	prefecture: "都道府県",
	city: "市区町村",
	town: "町域",
	address: "現在のオフィス住所",
	addressRegistered: "登記上の本社住所 (法的)",
	phone: "電話番号",
	fax: "FAX番号",
	email: "企業連絡先メールアドレス",
	note: "備考",
	status: "稼働ステータス",
	statusActive: "稼働中",
	statusInactive: "停止中",
	placeholderSearch: "会社コード、会社名",
	noteCode: "コア識別情報の構成",
	noteContact: "企業の公式連絡先",
	noteDetail: "重要な注意事項を記録する",
	editTitle: "企業情報の編集",
	createTitle: "新規企業の追加",
	editDesc: "法人プロファイルの更新",
	createDesc: "パートナーおよびブランチ情報のセットアップ",
	saveProfile: "プロファイルを保存",
	basicInfo: "基本情報",
	basicInfoDesc: "企業名、法人コード、および法的代表者",
	nameKana: "フリガナ (カタカナ)",
	legalRepresentative: "法的代表者",
	taxSection: "登録・法的識別番号",
	taxSectionDesc: "適格請求書発行のための登録番号・法人番号",
	taxCode: "登録番号/税務コード",
	corporateNumber: "法人番号 (Corporate Number)",
	contactSection: "連絡先情報",
	contactSectionDesc: "企業と直接連絡を取るための連絡先詳細",
	addressSection: "本社所在地",
	addressSectionDesc: "商業登記住所および実際の勤務地住所",
	noteSection: "備考・メモ",
	companyInfo: "会社情報",
	contactInfo: "連絡先情報",
	headOfficeAddress: "本社所在地",
	registeredAddress: "登記住所"
};
var userMaster$1 = {
	title: "ユーザー管理",
	code: "ユーザーコード",
	name: "氏名",
	company: "会社",
	department: "部署",
	position: "役職",
	phone: "電話番号",
	note: "備考",
	email: "メールアドレス",
	status: "ステータス",
	placeholderSearch: "氏名、メール, 従業員コードで検索...",
	noteBasic: "従業員識別情報",
	noteAdditional: "追加情報"
};
var document$1 = {
	dragDropText: "ここにドキュメントをドラッグ＆ドロップするか、クリックしてアップロードします",
	allowedFormats: "対応形式: PDF, Word, Excel, JPG, PNG (最大10MB)",
	uploading: "アップロード中...",
	totalFiles: "合計ファイル数",
	view: "オンラインプレビュー",
	download: "ダウンロード",
	"delete": "削除",
	noDocuments: "添付されたドキュメントはありません。",
	viewerNotSupportedTitle: "プレビュー非対応",
	viewerNotSupportedDesc: "このファイル形式はオンラインプレビューに対応していません。ダウンロードしてご確認ください。",
	downloadFile: "ファイルをダウンロード",
	deleteConfirmTitle: "ドキュメント削除の確認",
	deleteConfirmDesc: "このドキュメントをシステムから削除してもよろしいですか？この操作は取り消すことができず、永久に削除されます。"
};
var employee$1 = {
	title: "従業員管理",
	status: "ステータス",
	email: "メールアドレス",
	code: "従業員コード",
	addTitle: "新規従業員登録",
	editTitle: "従業員編集",
	editSubtitle: "人事記録の更新",
	addSubtitle: "アカウントと組織情報の設定",
	saveProfile: "保存",
	personalInfo: "個人情報",
	personalInfoDesc: "身分証明、連絡先、居住プロファイル",
	orgUnit: "管理組織",
	basicInfo: "基本情報",
	basicInfoDesc: "基本情報、連絡先メール、システムアクセスアカウントの設定",
	avatar: "プロフィール写真",
	uploadPhoto: "写真アップロード",
	removePhoto: "写真削除",
	fullName: "氏名",
	katakanaName: "カタカナ名",
	romajiName: "ローマ字名",
	dateOfBirth: "生年月日",
	gender: "性別",
	hometown: "本籍地",
	placeOfBirth: "出生地",
	nationality: "国籍",
	ethnicity: "民族",
	religion: "宗教",
	phone: "電話番号",
	department: "部署",
	selectDepartment: "部署を選択",
	jobTitle: "役職",
	selectJobTitle: "役職を選択",
	statusActive: "在職中",
	statusInactive: "退職",
	statusProbation: "試用期間",
	roleAdmin: "管理者",
	roleManager: "マネージャー",
	roleStaff: "一般社員",
	placeholderSearch: "氏名、メール、従業員コード...",
	dialogDisableTitle: "従業員を無効化しますか？",
	dialogDisableDesc: "従業員 {name} のステータスが「無効 (INACTIVE)」に変更されます。",
	msgDisableSuccess: "従業員が無効化されました。",
	joinDate: "入社日",
	role: "ロール",
	password: "パスワード",
	taxInsurance: "税金・保険",
	taxInsuranceBank: "税・保険・銀行",
	contractDocument: "契約・書類",
	taxInsuranceTitle: "身分証明書・社会保険",
	taxInsuranceDesc: "税番号、保険、身分証明書の設定",
	identityType: "身分証明書の種類",
	identityNumber: "証明書番号",
	zairyuExpiry: "在留カード有効期限",
	taxCode: "税番号",
	socialInsurance: "社会保険番号",
	pensionNumber: "年金番号",
	employmentInsurance: "雇用保険番号",
	bankInfo: "銀行情報",
	bankInfoTitle: "給与口座・銀行",
	bankInfoDesc: "給与受取口座と決済情報の設定",
	bankCode: "銀行コード",
	bankBranch: "支店コード",
	bankAccountType: "口座種別",
	bankAccountNumber: "口座番号",
	bankAccountHolder: "口座名義（カナ）",
	addressInfo: "住所・親族",
	addressTitle: "居住地住所",
	addressDesc: "登録住所と現住所",
	registeredAddress: "登録住所",
	currentAddress: "現住所",
	dependentsCount: "扶養人数",
	relatives: "親族情報",
	relativesTitle: "親族一覧",
	relativesDesc: "緊急連絡先と扶養者情報",
	addRelative: "親族追加",
	relationship: "続柄",
	occupation: "職業",
	address: "住所",
	emergencyContact: "緊急連絡先",
	isDependent: "扶養者",
	notes: "備考",
	detailTitle: "従業員詳細",
	missingInfo: "情報不足",
	missingInfoDesc: "赤いエラーマークのあるタブを確認して情報を完成させてください。",
	contractListTitle: "雇用契約書一覧",
	contractListDesc: "この従業員と締結した雇用契約書の一覧を表示します（表示のみ、編集不可）",
	contractEmpty: "雇用契約情報がありません。",
	contractCode: "契約番号",
	contractType: "契約の種類",
	contractDuration: "契約期間",
	contractSalary: "基本給 / 契約額",
	contractStatus: "ステータス",
	contractAction: "ダウンロード/プレビュー",
	contractActive: "有効",
	contractInactive: "無効",
	contractNoScan: "スキャンなし",
	contractIndefinite: "無期限",
	personalDocTitle: "個人証明書・資料キャビネット",
	personalDocDesc: "従業員のマイナンバー、パスポート、在留カード、資格証明書等のスキャンデータをアップロード・管理します",
	btnUploadDoc: "書類をアップロード",
	msgUploadingDoc: "書類をアップロードしています。しばらくお待ちください...",
	docEmptyTitle: "アップロードされた個人書類はありません。",
	docEmptyDesc: "ファイルをドラッグ＆ドロップするか、上のアップロードボタンをクリックしてください。",
	tooltipViewDoc: "書類を表示",
	tooltipDownloadDoc: "ダウンロード",
	tooltipDeleteDoc: "書類を削除",
	workHistory: "職歴",
	workHistoryTitle: "部署・職位・給与の異動履歴",
	workHistoryDesc: "各ステージにおける従業員の職歴を管理します",
	btnAddWorkHistory: "履歴を追加",
	workHistoryStage: "勤務期間",
	workHistoryDefault: "初期デフォルト",
	workHistoryStartDate: "開始日",
	workHistoryEndDate: "終了日",
	workHistorySalary: "基本給 (VND)",
	workHistoryNote: "備考",
	workHistoryEmpty: "職歴が登録されていません。",
	workHistorySyncDept: "個人情報から同期",
	workHistorySyncJoin: "入社日と同期",
	workHistoryDateError: "終了日は開始日より前の日付にできません",
	relativeName: "親族の氏名",
	relativesEmpty: "親族情報が登録されていません。",
	relationshipSpouse: "配偶者",
	relationshipChild: "子供",
	relationshipParent: "親",
	relationshipSibling: "兄弟姉妹",
	relationshipOther: "その他",
	noViewUrl: "書類プレビューのURLがありません。",
	noDownloadUrl: "書類ダウンロードのURLがありません。"
};
var gender$1 = {
	male: "男性",
	female: "女性",
	other: "その他"
};
var contract$1 = {
	title: "契約管理",
	createTitle: "新規契約締結",
	editTitle: "契約更新",
	subtitle: "コンプライアンス管理",
	updateSubtitle: "契約更新",
	generalInfo: "契約基本情報",
	type: "契約種別",
	code: "契約コード",
	codePlaceholder: "空白の場合は自動生成",
	signDate: "締結日",
	startDate: "発効日",
	endDate: "満了日（無期限の場合は空白）",
	baseSalary: "月額基本給",
	totalValue: "契約総額",
	status: "契約ステータス",
	laborSection: "労働者詳細（労働契約）",
	selectEmployee: "従業員選択",
	selectEmployeePlaceholder: "契約対象の従業員を検索・選択",
	employmentType: "雇用形態",
	jobTitle: "職種・職位",
	workLocation: "勤務地",
	workingHours: "所定労働時間（時間/日）",
	probationPeriod: "試用期間",
	probationSalary: "試用期間給与率（%）",
	bankName: "給与振込銀行",
	bankAccount: "銀行口座番号",
	insurance: "加入保険種別",
	partnerSection: "取引先・顧客詳細",
	partnerName: "取引先・顧客名",
	partnerTaxCode: "法人番号・営業許可番号",
	partnerRepresentative: "代表者",
	partnerRepresentativeRole: "代表者役職",
	partnerAddress: "本社所在地",
	paymentMethod: "支払方法",
	paymentTerms: "支払条件",
	billingCycle: "請求サイクル",
	overtimeSection: "残業コンプライアンス（ベトナム労働法）",
	agreement36: "残業時間上限の適用（ベトナム労働法基準）",
	overtimeAllowance: "固定/一括残業手当を含む",
	includedOvertimeHours: "月間固定残業時間",
	edmSection: "スキャン文書・添付ファイル（EDM）",
	edmUpload: "契約書スキャンファイルをアップロード",
	complianceBadge: "コンプライアンス管理",
	complianceTitle: "コンプライアンス登録",
	complianceDescCreate: "送信時、契約は既存の人事リストと自動的にクロスチェックされ、保存前に合法性が確保されます。",
	complianceDescEdit: "契約パラメータ（給与、残業条件）の更新は、給与計算・残業管理システムに自動同期されます。",
	submitContract: "契約を完了",
	missingInfo: "情報不足",
	saveSuccess: "成功",
	saveSuccessDesc: "新規契約がコンプライアンスに準拠して締結されました。",
	updateSuccess: "成功",
	updateSuccessDesc: "契約が正常に更新されました。",
	saveError: "契約締結エラー",
	updateError: "契約更新エラー",
	loadError: "契約読み込みエラー",
	loadingData: "契約データを読み込み中...",
	typeLabor: "雇用契約",
	typeVendor: "業務委託（取引先）",
	typeClient: "サービス提供（顧客）",
	statusActive: "有効（ACTIVE）",
	statusExpired: "期限切れ（EXPIRED）",
	statusTerminated: "解約（TERMINATED）",
	employmentSeishain: "正社員（Seishain）",
	employmentKeiyakushain: "契約社員（Keiyakushain）",
	employmentHaken: "派遣社員（Haken）",
	employmentArubaito: "アルバイト（Arubaito）",
	selectMissEmployee: "契約対象 of 従業員を選択してください。",
	selectMissPartner: "パートナー・組織名を入力してください。",
	selectMissPartnerTax: "パートナーの法人番号を入力してください。",
	selectMissValue: "契約金額を入力してください。",
	edmUploading: "添付ファイルをアップロード中...",
	manageTitle: "契約管理",
	manageDesc: "従業員の雇用契約および企業の商取引契約の管理・保管を行います。",
	signNew: "新規契約締結",
	quickSign: "簡易契約締結",
	quickSignSuccess: "簡易契約の締結が完了し、プロファイルが更新されました。",
	typeCommercial: "商取引契約",
	searchPlaceholder: "契約コード、従業員名で検索...",
	typeSelect: "契約種別",
	statusSelect: "ステータス",
	party: "契約対象",
	duration: "適用期間",
	value: "総額",
	documents: "添付書類",
	actions: "操作",
	loading: "契約リストを読み込み中...",
	noData: "条件に一致する契約が見つかりません。",
	noEmployee: "従業員未割り当て",
	corporatePartner: "企業パートナー",
	indefinite: "無期限",
	files: "件",
	exportPdf: "PDFサンプル出力",
	exportPdfStyle: "契約書PDF出力スタイルの選択",
	exportPdfDesc: "出力する契約書のプロフェッショナルなドキュメントデザインを選択してください：",
	styleClassic: "クラシック・リーガル（Classic Style）",
	selected: "選択中",
	styleClassicDesc: "格式高い明朝体（Serif）フォントを使用し、日本の公的書式に準拠したレイアウト。条項を細い罫線でエレガントに分割します。",
	styleModern: "モダン・コーポレート（Modern Style）",
	styleModernDesc: "クリーンなゴシック体（Sans-serif）フォントとエメラルドグリーンを基調としたデザイン。コンプライアンス強調ボックスと視覚的な署名エリアが特徴です。",
	styleAcademic: "アカデミック・エレガント（Academic Style）",
	styleAcademicDesc: "洗練されたネイビーブルーをアクセントに、広めの余白を取ったミニマルなデザイン。高額な商取引契約に最適です。",
	downloadPdf: "PDFを出力してダウンロード",
	deleteConfirmTitle: "契約を削除しますか？",
	deleteConfirmDesc: "契約コード {code} を削除してもよろしいですか？この操作は取り消せません。",
	allContracts: "すべての契約",
	allTypes: "すべての種別",
	statusAll: "すべてのステータス",
	deleteSuccessDesc: "契約はシステムから正常に削除されました。",
	deleteError: "契約削除エラー",
	payBank: "銀行振込",
	payCash: "現金",
	payCredit: "クレジットカード",
	cycleMonthly: "月払い",
	cycleQuarterly: "四半期払い",
	cycleOneTime: "一括払い",
	fileTooLarge: "ファイルサイズ超過",
	fileTooLargeDesc: "ファイル {name} は制限の10MBを超えています。",
	createSuccess: "契約書の作成に成功しました",
	createSuccessWithDocs: "契約書の作成および書類のアップロードに成功しました",
	createError: "契約書作成エラー",
	downloadPdfSuccess: "PDFダウンロードに成功しました",
	exportPdfError: "契約書PDF出力エラー",
	formatError: "無効なファイル形式",
	formatErrorDesc: "サポートされている形式：PDF, DOC, DOCX, JPG, PNG",
	sizeError: "ファイルサイズ超過",
	sizeErrorDesc: "添付ファイルのサイズは10MBを超えてはなりません",
	statusPending: "承認待ち (PENDING)",
	employmentFullTimeVn: "正社員 (ベトナム)",
	employmentPartTimeVn: "アルバイト (ベトナム)"
};
var timesheet$1 = {
	title: "個人タイムシート",
	desc: "毎日の労働時間を記録し、出勤履歴を追跡します。",
	standardTimeSystem: "標準時刻システム",
	workingTimeVN: "ベトナム労働時間",
	gpsClock: "高精度GPSクロック時間",
	todayTracking: "本日の勤怠記録",
	trackingDesc: "勤務開始時に「チェックイン」を押してください。09:00以降のチェックインは「遅刻」として記録されます。退勤前に「チェックアウト」を押して、毎日の勤務記録を完了させてください。",
	checkInTime: "出勤時間",
	checkOutTime: "退勤時間",
	checkedIn: "チェックイン済み",
	checkedOut: "チェックアウト済み",
	history: "勤怠履歴",
	historyDesc: "月内に記録された勤務日の詳細を追跡します。",
	selectMonth: "月を選択",
	noData: "今月の勤怠データはありません。",
	success: "打刻成功",
	checkInSuccess: "本日正常にチェックインしました。",
	checkOutSuccess: "本日正常にチェックアウトしました。",
	date: "日付",
	status: "ステータス",
	day0: "日曜日",
	day1: "月曜日",
	day2: "火曜日",
	day3: "水曜日",
	day4: "木曜日",
	day5: "金曜日",
	day6: "土曜日",
	checkIn: "出勤",
	checkOut: "退勤",
	today: "本日",
	workingHours: "勤務時間",
	overtime: "残業",
	manageTitle: "勤怠管理（管理者）",
	employee: "従業員",
	totalHours: "合計時間",
	overtimeHours: "残業時間",
	lateMins: "遅刻（分）",
	earlyLeaveMins: "早退（分）",
	accessDenied: "アクセス拒否",
	accessDeniedDesc: "従業員の勤怠を管理するためのマネージャーまたは管理者ロールを持っていません。",
	backHome: "ホームに戻る",
	adminTitle: "勤怠管理パネル",
	adminDesc: "全従業員の勤怠履歴の確認、手動修正、新規作成、および勤怠統計レポートを表示します。",
	addManual: "手動勤怠登録",
	tabHistory: "勤怠履歴",
	tabStats: "勤怠統計",
	tabConfigs: "勤務時間設定",
	tabPayroll: "給与計算",
	payrollTitle: "月次給与計算表",
	payrollDesc: "勤務時間詳細、基本給、残業代、精勤手当、遅刻ペナルティ、欠勤控除の計算および確認。",
	selectPayrollMonth: "給与対象月を選択",
	loadingPayroll: "給与データを読み込み中...",
	noPayrollData: "この月の給与データはありません。",
	baseSalary: "基本給",
	workingDaysActualStandard: "出勤日数 (実績/所定)",
	overtimeCol: "残業 (OT)",
	attendanceAllowance: "精勤手当",
	deductionLate: "遅刻控除",
	deductionLeave: "欠勤控除",
	advancePayment: "前払い金",
	netSalary: "差引支給額",
	statusPaid: "支払済",
	statusPending: "未処理",
	payrollDetailsFor: "給与明細: {name} ({code})",
	actualWorkingDays: "実出勤日数",
	payrollMonth: "対象月",
	overtimeSalary: "時間外勤務手当 (残業代)",
	attendanceAllowanceLabel: "精勤手当",
	deductionLateLabel: "遅刻控除額",
	deductionLeaveLabel: "所定外欠勤控除額",
	deductionUnion: "労働組合費",
	deductionTax: "所得税",
	deductionUnionLabel: "組合費控除",
	deductionTaxLabel: "所得税控除 (源泉徴収税)",
	advancePaymentLabel: "前払い・仮払金",
	paymentStatusLabel: "支払状況",
	netSalaryLabel: "差引支給額",
	btnSavePayroll: "給与明細を保存",
	msgSavePayrollSuccess: "従業員の給与情報を保存しました。",
	msgSavePayrollError: "給与情報の保存中にエラーが発生しました。",
	overtimeBreakdown: "時間外手当（残業）の内訳詳細",
	overtimeNormal: "通常残業 (1.5x)",
	overtimeWeekend: "休日労働 (2.0x)",
	overtimeHoliday: "祝日労働 (3.0x)",
	exportExcelSuccess: "給与のExcelファイルを正常にエクスポートしました。",
	exportExcelError: "Excelのエクスポート中にエラーが発生しました。",
	exportPdfSuccess: "給与のPDFファイルを正常にエクスポートしました。",
	exportPdfError: "PDFのエクスポート中にエラーが発生しました。",
	searchKeyword: "検索キーワード",
	searchPlaceholder: "従業員名またはコード...",
	statusAll: "すべてのステータス",
	statusPresent: "定時 (PRESENT)",
	statusLate: "遅刻 (LATE)",
	statusAbsent: "欠勤 (ABSENT)",
	fromDate: "開始日",
	toDate: "終了日",
	no: "No.",
	staff: "従業員",
	dateCol: "日付",
	checkInCol: "出勤",
	checkOutCol: "退勤",
	expectedWork: "所定勤務 ca",
	checkoutDiff: "退勤差分",
	statusCol: "ステータス",
	noteCol: "備考",
	actionCol: "操作",
	loadingList: "勤怠履歴を読み込み中...",
	noHistoryFound: "フィルターに一致する勤怠履歴が見つかりません。",
	editOrCompensate: "編集 / 打刻補正",
	showLines: "{current} / {total} 件表示中",
	monthStats: "月間勤怠統計",
	monthStatsDesc: "全従業員の出勤日数、遅刻、欠勤データの集計。",
	selectStatsMonth: "統計月を選択",
	statsSummary: "集計レポート",
	stats30Days: "30日カレンダー詳細",
	loadingStats: "勤怠データを集計中...",
	noEmployeeMonth: "選択した月に従業員が見つかりません。",
	staffCode: "従業員ID",
	staffName: "従業員名",
	onTime: "定時",
	lateCol: "遅刻",
	lateHoursPenalty: "遅刻ペナルティ時間",
	excusedLeave: "有給/公欠",
	absentNoExcuse: "無断欠勤",
	totalAbsent: "合計欠勤",
	workingDaysMax: "出勤日数 / 所定日数",
	otHours: "残業（時間）",
	hours: "時間",
	days: "日",
	mins: "分",
	times: "回",
	statsCalendarFor: "詳細カレンダーの表示対象",
	legendLateEarly: "遅刻 / 早退",
	legendMissInOut: "打刻漏れ",
	legendWeekendHoliday: "土日 / 祝日",
	legendOnTime: "定時出勤",
	weekend: "週末",
	holiday: "祝日",
	excusedLeaveAll: "終日休暇",
	excusedLeaveMorning: "午前半休",
	excusedLeaveAfternoon: "午後半休",
	missCheck: "打刻なし",
	configTitle: "勤務時間設定",
	configDesc: "適用期間に応じた柔軟な勤務シフト時間帯を設定します。",
	addConfig: "設定を追加",
	loadingConfigs: "設定を読み込み中...",
	noConfigsYet: "勤務時間設定がまだ作成されていません。",
	defaultSystem: "システムデフォルト",
	flexible: "フレックス",
	applyAllTime: "適用: 全期間 (Fallback)",
	applyRange: "適用: {start} ~ {end}",
	standardIn: "所定出勤時間",
	standardOut: "所定退勤時間",
	saturday: "土曜日",
	saturdayOff: "土曜休み",
	saturdayMorning: "土曜午前出勤 (12:00まで)",
	saturdayFull: "土曜終日出勤",
	editConfig: "設定を編集",
	deleteConfig: "設定を削除",
	dialogManualEdit: "勤怠更新 / 打刻補正",
	dialogManualCreate: "手動勤怠登録",
	employeeLabel: "従業員",
	employeeSelectPlaceholder: "従業員を選択してください",
	attendanceDate: "勤怠日付",
	selectDate: "日付を選択",
	checkInLabel: "出勤時間",
	checkInPlaceholder: "出勤時間を選択",
	checkOutLabel: "退勤時間",
	checkOutPlaceholder: "退勤時間を選択",
	statusLabel: "記録ステータス",
	noteLabel: "理由 / 補足備考",
	notePlaceholder: "修正または補正の理由を入力してください...",
	btnCancel: "キャンセル",
	btnSaveRecord: "保存する",
	dialogConfigEdit: "勤務時間設定を編集",
	dialogConfigCreate: "勤務時間設定を追加",
	configName: "設定名",
	configNamePlaceholder: "例: 夏季勤務時間",
	setDefaultConfig: "デフォルト設定にする",
	setDefaultConfigDesc: "他の期間設定に一致しない場合、このデフォルト設定が適用されます。",
	saturdayWorkingMode: "土曜日の勤務モード",
	saturdayWorkingModeDesc: "土曜日の出勤カウントおよび遅刻判定 of Saturdays。",
	valMissManualData: "データ不足",
	valMissManualDataDesc: "従業員と勤怠日付を選択してください。",
	msgUpdateSuccess: "更新成功",
	msgUpdateSuccessDesc: "勤怠記録が正常に保存されました。",
	valInvalidConfig: "入力情報が無効です",
	valInvalidConfigDesc: "設定名および所定時間帯を正しく入力してください。",
	msgSaveConfigSuccess: "勤務時間設定を保存しました。",
	msgDeleteConfigConfirm: "この勤務時間設定を削除してもよろしいですか？",
	msgDeleteConfigSuccess: "設定を正常に削除しました。",
	tabShifts: "シフト管理",
	tabShiftAssignments: "シフト割り当て",
	shiftTitle: "シフト一覧",
	shiftDesc: "従業員のシフトパターンを設定し、時間外労働의 計算ルールを定義します。",
	addShift: "シフトを追加",
	dialogShiftCreate: "新規シフト作成",
	dialogShiftEdit: "シフト編集",
	shiftName: "シフト名",
	shiftNamePlaceholder: "例: 日勤、夜勤...",
	allowOvertime: "残業計算を有効にする",
	maxOvertimeHours: "最大残業時間",
	maxOvertimeHoursPlaceholder: "時間（例: 2）、制限なしの場合は空白",
	shiftAssignedSuccess: "従業員にシフトが正常に割り当てられました。",
	deleteShiftConfirm: "このシフトを削除してもよろしいですか？関連するすべての割り当てが削除されます。",
	deleteShiftSuccess: "シフトが正常に削除されました。",
	assignShift: "従業員にシフトを割り当てる",
	employeeSelect: "従業員を選択",
	datesSelect: "日付を選択",
	selectShift: "シフトを選択",
	btnAssign: "割り当てる",
	assignedShiftsList: "従業員シフト割り当て状況",
	noAssignedShifts: "この期間のシフト割り当てデータはありません。",
	deleteAssignmentConfirm: "この割り当てを削除してもよろしいですか？",
	deleteAssignmentSuccess: "割り当てが正常に削除されました。",
	overtimeStatus: "残業",
	overtimeAllowed: "許可",
	overtimeNotAllowed: "不許可",
	assignShiftsTitle: "従業員シフト・残業予定表",
	assignShiftsDesc: "柔軟なシフト、残業時間設定、および月間休暇情報の同期を管理します。",
	bulkActions: "一括操作",
	selectedEmployees: "選択中: {count} 名",
	bulkAssignBtn: "一括シフト割り当て",
	bulkResetBtn: "一括リセット",
	legendTitle: "シフト記号一覧:",
	legendAL: "有給休暇",
	legendSL: "病気休暇",
	legendOT: "残業計算対象",
	legendNoOT: "残業計算対象外",
	legendOff: "休日 / 土日",
	loadingAssignData: "シフト割り当てデータを読み込み中...",
	noEmployeesFound: "従業員が見つかりません",
	employeeHeader: "従業員",
	departmentHeader: "部署",
	monthAssign: "割り当て月",
	allDepartments: "すべての部署",
	searchEmployee: "従業員検索",
	searchEmployeePlaceholder: "氏名、従業員コード...",
	w0: "日",
	w1: "月",
	w2: "火",
	w3: "水",
	w4: "木",
	w5: "金",
	w6: "土",
	selectAtLeastOneEmployee: "少なくとも1人の従業員を選択してください",
	selectShiftError: "シフトを選択してください",
	selectDateRangeError: "期間を選択してください",
	selectAtLeastOneWeekdayAssign: "適用する曜日を少なくとも1つ選択してください",
	selectAtLeastOneWeekdayReset: "リセットする曜日を少なくとも1つ選択してください",
	bulkAssignSuccess: "一括シフト割り当てが正常に完了しました",
	bulkResetSuccess: "一括シフトリセットが正常に完了しました",
	dialogBulkAssignHeader: "一括シフト割り当て",
	dialogBulkAssignWarningPrefix: "選択した",
	dialogBulkAssignWarningSuffix: "名の従業員にシフトを設定しています。",
	dialogBulkResetHeader: "一括デフォルトシフトへ復元",
	dialogBulkResetWarningPrefix: "この操作により、指定された期間内において選択された",
	dialogBulkResetWarningSuffix: "名の従業員のスケジュールがシステムデフォルトのシフトに復元されます。",
	applyToWeekdays: "適用曜日",
	confirm: "確定"
};
var leaveRequest$1 = {
	title: "休暇申請",
	pendingTitle: "休暇承認",
	startDate: "開始日",
	endDate: "終了日",
	reason: "理由",
	type: "休暇種別",
	status: "ステータス",
	approver: "承認者",
	approvedAt: "承認日",
	rejectedAt: "却下日",
	accessDenied: "アクセス拒否",
	accessDeniedDesc: "あなたのアカウントには、休暇申請を承認するためのマネージャーまたは管理者の権限がありません。",
	backToHome: "ホームに戻る",
	panelDesc: "従業員からの保留中の休暇申請を確認、承認、または却下します。",
	tabAll: "すべて",
	tabPending: "保留中",
	tabApproved: "承認済み",
	tabRejected: "却下済み",
	noRequest: "現在、休暇申請はありません。",
	noRequestWithStatus: "{status} 状態の休暇申請はありません。",
	allDay: "終日",
	morning: "午前休",
	afternoon: "午後休",
	days: "日間",
	noReason: "理由なし",
	dialogApproveTitle: "休暇申請の承認",
	dialogRejectTitle: "休暇申請の却下",
	employee: "従業員",
	approverNote: "承認者フィードバック / メモ",
	approverNotePlaceholder: "従業員へのフィードバックを入力（任意）...",
	confirmApprove: "承認する",
	confirmReject: "却下する",
	processSuccess: "処理が成功しました",
	approveSuccessDesc: "休暇申請が正常に承認されました。",
	rejectSuccessDesc: "休暇申請が正常に却下されました。",
	stt: "No.",
	timeRange: "休暇期間",
	system: "システム",
	typeAnnual: "有給休暇",
	typeSick: "病気休暇",
	typeSpecial: "特別休暇",
	typeUnpaid: "無給休暇",
	desc: "オンラインで休暇を申請し、承認履歴を追跡します。",
	myList: "マイ休暇申請",
	myListDesc: "送信された休暇申請の履歴とステータス。",
	noMyRequest: "休暇申請はまだ作成されていません。",
	createDesc: "上司に新しい休暇申請を提出します。",
	session: "休暇区分",
	reasonPlaceholder: "休暇の理由を詳しく入力してください...",
	submit: "申請を送信",
	detailTitle: "休暇申請の詳細",
	code: "申請コード",
	totalDays: "合計日数",
	period: "対象期間",
	approverFeedback: "承認者のフィードバック",
	noFeedback: "フィードバックコメントなし",
	morningSession: "午前（8:30 - 12:00休み）",
	afternoonSession: "午後（13:15 - 17:30休み）",
	valIncomplete: "不完全な情報",
	valIncompleteDesc: "休暇の種類、開始日、終了日を選択してください。",
	submitSuccess: "休暇申請の送信完了",
	submitSuccessDesc: "休暇申請がマネージャーに送信されました。",
	from: "開始",
	to: "終了"
};
var compliance$1 = {
	title: "コンプライアンス管理",
	summary: "コンプライアンス概要",
	riskLevel: "リスクレベル",
	violations: "違反",
	warnings: "警告",
	centerTitle: "コンプライアンス警告センター",
	centerDesc: "法的リスク（ビザ期限、雇用契約、領収書、残業時間上限）を自動的にスキャンし、早期警告します。",
	btnScan: "リアルタイムスキャン実行",
	scanning: "スキャン中...",
	healthScore: "コンプライアンス健康度",
	healthScoreDesc: "現在システム内で発生している問題の深刻度に基づいて算出されます。",
	recommendation: "推奨アクション",
	healthExcellent: "極めて良好（適合）",
	healthFair: "良好（中リスク）",
	healthAlarm: "警告（高リスク）",
	recExcellent: "現在の管理体制を維持してください。",
	recFair: "WARNINGレベルのリスクを直ちに解消してください。",
	recAlarm: "法的処罰を避けるため、CRITICALエラーを緊急に解決してください。",
	criticalRisk: "致命的なリスク",
	criticalDesc: "CRITICAL / 即時対応が必要",
	warningRisk: "リスク警告",
	warningDesc: "WARNING / 追加の確認が必要",
	resolvedRisk: "自動修復済みリスク",
	resolvedDesc: "AUTO-HEALED / 自動解消",
	criticalTitle: "致命的なリスク（CRITICAL）",
	btnActNow: "今すぐ解決",
	tabActiveRisks: "未解決リスク",
	tabResolvedHistory: "対応履歴",
	searchPlaceholder: "問題を検索...",
	severityPlaceholder: "深刻度",
	typePlaceholder: "リスクカテゴリ",
	tooltipRefresh: "更新",
	colSeverity: "深刻度",
	colType: "カテゴリ",
	colDescription: "問題の詳細内容",
	colEntity: "対象オブジェクト",
	colStatus: "ステータス",
	colAction: "対応アクション",
	loading: "コンプライアンスリスクを分析中...",
	noDataTitle: "素晴らしい！問題は検出されませんでした。",
	noDataDesc: "システムは完璧なコンプライアンス状態で稼働しています。",
	sevCritical: "致命的",
	sevWarning: "警告",
	sevInfo: "情報",
	sevAll: "すべての深刻度",
	statusOpen: "未解決",
	statusResolved: "解決済み",
	resolvedBy: "担当者",
	btnResolve: "解決する",
	tooltipManualResolve: "手動で解決",
	dialogResolveTitle: "対応完了の確認",
	dialogResolveHeader: "コンプライアンス警告の解決",
	dialogResolveDesc: "このコンプライアンス警告を解決済みとしてマークします。",
	dialogResolveNote: "対応理由 / メモ（必須）",
	dialogResolvePlaceholder: "このリスクを解決した理由や対応内容を入力してください...",
	btnCancel: "キャンセル",
	btnConfirmResolve: "解決を確定",
	typeVisa: "在留カード期限切れ",
	typeContract: "雇用契約書期限切れ",
	typeInvoice: "領収書/請求書の不足",
	typeOvertime: "法定残業上限超過",
	typeAll: "すべてのカテゴリ",
	typeVisaExpiration: "ビザ有効期限 (VISA)",
	typeContractExpiration: "雇用契約有効期限 (CONTRACT)",
	typeMissingInvoice: "領収書/請求書の不足 (INVOICE)",
	typeOvertimeLimit: "法定残業上限超過 (OVERTIME)",
	msgScanSuccess: "スキャン完了",
	msgScanSuccessDesc: "コンプライアンススキャンが完了しました。新規検出：{created}件、自動修復：{resolved}件。",
	msgScanError: "スキャン失敗",
	msgScanErrorDesc: "スキャンエンジンへの接続に失敗しました。",
	msgActError: "この警告タイプに対する解決パスを特定できません。",
	msgResolveSuccess: "対応完了",
	msgResolveSuccessDesc: "警告が正常に解決されました。",
	msgResolveError: "エラー",
	msgResolveErrorDesc: "警告を解決できませんでした。"
};
var dashboard$1 = {
	title: "ダッシュボード",
	welcome: "おかえりなさい",
	totalEmployees: "従業員数",
	totalContracts: "契約数",
	totalTransactions: "取引数",
	pendingLeaves: "承認待ち休暇",
	complianceBannerTitle: "法的違反検出システム",
	complianceBannerDesc: "警告: {count}件の致命的なリスク（在留カード期限切れ、残業時間上限超過、または領収書不足）が検出されました。クリックして自動修復します！",
	enterpriseDashboard: "企業管理ダッシュボード",
	welcomeUser: "こんにちは、{name}さん。こちらは各部署の実データの集計分析です。",
	admin: "管理者",
	fiscalYear: "会計年度",
	btnComplianceControl: "コンプライアンス管理",
	revenueYearBadge: "年間売上",
	revenueYearTitle: "会計売上",
	expenseYearBadge: "年間支出",
	expenseYearTitle: "営業費用",
	netIncomePositive: "黒字",
	netIncomeNegative: "赤字",
	netIncomeTitle: "当期純利益",
	complianceScoreTitle: "コンプライアンス適合指数",
	compCompliant: "適合",
	compWarning: "警告",
	compDanger: "危険",
	activeEmployees: "現在従業員数",
	employeesCount: "{active} / {total} 名",
	activeContracts: "有効契約数",
	contractsCount: "{active} / {total} 件",
	pendingLeavesCount: "{count} 件",
	cashflowTitle: "{year}年度 キャッシュフロー推移",
	cashflowDesc: "月別の成長傾向と実際の営業費用",
	optRevenue: "売上高",
	optExpense: "費用",
	optProfit: "利益",
	contractStructure: "契約構成比",
	contractStructureDesc: "各契約タイプ間の分布割合",
	topExpenses: "支出上位カテゴリ",
	topExpensesDesc: "当年度に発生した主な営業費用",
	staffDensity: "部署別人員分布",
	staffDensityDesc: "全従業員における部署ごとの割合",
	timesheetStat: "今月の勤務＆時間外統計",
	timesheetStatDesc: "勤務日数、総労働時間、実際の時間外労働時間の監視",
	btnTimesheetDetail: "勤務詳細",
	colEmpCode: "社員コード",
	colEmpName: "氏名",
	colPresent: "出勤",
	colAbsent: "欠勤",
	colTotalHours: "総時間",
	colOvertime: "残業",
	colOtStatus: "残業状況",
	otOverLimit: "残業上限超過！",
	otWarning: "警告基準超過",
	otApproaching: "警告基準近接",
	otSafe: "安全",
	noTimesheetData: "今月の勤務データは記録されていません。",
	recentTransactions: "最近の取引履歴",
	recentTransactionsDesc: "最新のリアルタイム財務取引履歴",
	btnCashbook: "出納帳",
	unclassified: "未分類",
	noTransactions: "財務取引データがありません。",
	msgConnectError: "接続エラー",
	msgSyncError: "ダッシュボードデータを同期できませんでした。"
};
var transaction$1 = {
	title: "キャッシュフローと経費",
	desc: "実際の入出金を管理し、証憑書類（請求書や振込伝票など）の添付状況を監視します。",
	addBtn: "新規取引を追加",
	totalRevenue: "実績売上高",
	totalExpense: "実績経費支出",
	netBalance: "フリーキャッシュフロー",
	complianceRate: "証憑類添付率",
	tabAll: "すべての取引",
	tabExpense: "経費支出",
	tabRevenue: "売上収入",
	searchPlaceholder: "取引コード、カテゴリ...",
	type: "取引タイプ",
	status: "ステータス",
	compliance: "法令文書ステータス",
	refresh: "更新",
	allTypes: "すべてのタイプ",
	expense: "経費 (EXPENSE)",
	revenue: "売上 (REVENUE)",
	allStatus: "すべてのステータス",
	paid: "支払済み",
	pending: "処理中",
	cancelled: "キャンセル済み",
	allDocs: "すべての書類",
	hasDocs: "証憑あり",
	missingDocs: "証憑不足",
	dateCol: "日付",
	codeCol: "取引コード",
	typeCol: "タイプ",
	categoryCol: "カテゴリ",
	amountCol: "金額 (税込合計)",
	taxCol: "税金情報 / 適格請求書番号",
	paymentCol: "決済状況",
	documentCol: "証憑書類",
	actionCol: "操作",
	loading: "キャッシュフローデータを読み込み中...",
	noData: "一致する取引が見つかりませんでした。",
	revenueShort: "収入",
	expenseShort: "支出",
	original: "税抜金額",
	files: "ファイル",
	missingDocsAlert: "証憑不足",
	editTooltip: "取引を編集",
	deleteTooltip: "取引を削除",
	dialogDeleteTitle: "取引削除の確認",
	dialogDeleteConfirm: "財務取引を削除しますか？",
	dialogDeleteDesc: "本当にカテゴリ「{category}」の取引「{code}」を削除しますか？この操作によりキャッシュフロー統計が再計算され、元に戻すことはできません。",
	btnCancel: "キャンセル",
	btnConfirmDelete: "削除する",
	dialogDocTitle: "取引証憑書類 — {code}",
	errorLoad: "キャッシュフローの読み込みエラー",
	errorLoadDesc: "取引リストを読み込めませんでした。",
	msgDeleteSuccess: "取引を正常に削除しました",
	msgDeleteSuccessDesc: "キャッシュフローの記録が正常に消去されました。",
	msgDeleteFailed: "操作失敗",
	msgDeleteFailedDesc: "取引を削除できませんでした。",
	statusPaid: "出金済み/完了",
	statusPending: "支払待ち",
	statusCancelled: "キャンセル済み",
	noTax: "非課税 (0%)",
	bankTransfer: "銀行振込",
	cash: "現金",
	creditCard: "クレジットカード",
	subtitle: "会計＆キャッシュフロー",
	createTitle: "新規取引を記録",
	editTitle: "取引を編集",
	infoSection: "取引情報＆決済方法",
	code: "取引コード",
	amount: "合計金額（税込）",
	date: "取引日",
	codeAutoGenerate: "取引コード自動採番",
	category: "勘定科目",
	paymentMethod: "支払方法",
	amountSection: "取引金額＆税計算",
	netAmount: "本体価格 (税抜額)",
	taxAmount: "消費税額",
	withholdingTax: "源泉徴収税 (該当する場合)",
	invoiceNumber: "登録番号 / 納税コード / 請求書番号",
	invoiceError: "日本の適格請求書登録番号はTから始まる13桁の数字である必要があります。",
	descriptionSection: "取引詳細内容 / 摘要",
	descriptionPlaceholder: "取引詳細、目的、サプライヤー、購入内容などの摘要を入力...",
	saveTransaction: "取引を記録",
	attachSection: "請求書＆証憑添付",
	attachRequired: "必須",
	attachDesc: "電子請求書、振込依頼書、または有効な領収書・証憑を添付してください。",
	uploadFile: "ファイルを選択するか、ここにドラッグ＆ドロップしてください",
	uploadFormats: "対応形式: PDF, DOC, DOCX, XLS, XLSX, PNG, JPG, JPEG (最大10MB)",
	taxRate: "適用税率",
	valMissInfo: "情報不足",
	valMissInfoDesc: "必須フィールドをすべて入力してください。",
	valMissDocs: "法的証憑不足",
	valMissDocsDesc: "企業は経費の税法準拠を確保するために、証憑（請求書/領収書）の添付が必須です。",
	valInvalidInvoice: "形式エラー",
	valInvalidInvoiceDesc: "日本の適格請求書登録番号はTから始まる13桁の数字である必要があります。",
	msgSaveSuccess: "取引を保存しました",
	msgSaveSuccessDesc: "取引と添付証憑書類が正常に更新されました。",
	msgSaveSuccessShort: "取引が正常に記録されました。",
	msgSaveFailed: "取引保存失敗",
	msgSaveFailedDesc: "記録に失敗しました。",
	catSalary: "人件費 (Salary)",
	catOfficeRent: "オフィス賃料 (Office Rent)",
	catUtilities: "水道光熱費・通信費 (Utilities)",
	catOutsourcing: "外注費 (Outsourcing Cost)",
	catSoftware: "ソフトウェア・SaaS (Software & SaaS)",
	catTravel: "旅費交通費 (Travel Expense)",
	catMarketing: "広告宣伝費 (Marketing & Ads)",
	catClientRevenue: "売上高 (Client Revenue)",
	catConsulting: "コンサルティング料 (Consulting Fee)",
	catOthers: "その他費用 (Others)",
	selectType: "取引タイプを選択",
	selectCategory: "勘定科目を選択",
	selectMethod: "決済方法を選択",
	selectStatus: "ステータスを選択",
	selectTax: "税率を選択",
	categorySalary: "給与・手当",
	categoryRent: "オフィス賃料",
	categoryUtilities: "水道光熱費・ネット",
	categoryOutsourcing: "外注費",
	categorySoftware: "ツール・ソフトウェア",
	categoryTravel: "旅費交通費",
	categoryMarketing: "広告宣伝費",
	categoryRevenue: "売上・収入",
	categoryConsulting: "コンサルティング費",
	categoryOthers: "その他経費",
	edmSection: "スキャン文書・添付ファイル (EDM)",
	edmDesc: "有効な電子請求書または支払伝票を添付してください",
	edmRequired: "証憑書類必須",
	loadError: "取引詳細の読み込みエラー",
	loadingData: "取引データを読み込み中...",
	methodBankTransfer: "銀行振込",
	methodCash: "現金",
	methodCreditCard: "クレジットカード",
	missingEvidence: "法的証憑書類不足",
	missingEvidenceDesc: "経費取引には請求書または領収書の添付が必須です。",
	saveChanges: "変更を保存",
	saveError: "取引保存エラー",
	taxCt10Jp: "日本消費税 10%",
	taxCt8Jp: "日本消費税 8%",
	taxNone: "課税対象外 (0%)",
	taxVat10Vn: "ベトナム VAT 10%",
	taxVat8Vn: "ベトナム VAT 8%",
	typeExpense: "経費 (EXPENSE)",
	typeRevenue: "収益 (REVENUE)",
	updateSubtitle: "取引詳細の更新",
	updateSuccess: "取引の更新に成功しました",
	updateSuccessDesc: "取引内容および添付書類が保存されました。"
};
var pagination$1 = {
	total: "合計: {total} 件",
	layout: "ページレイアウト"
};
var common$1 = {
	cancel: "キャンセル",
	"delete": "削除"
};
var themeCustomizer$1 = {
	title: "サイドバー設定",
	subtitle: "テーマ＆スタイルカスタマイザー",
	mode: "表示モード",
	modeColor: "単色",
	modeImage: "背景画像",
	modeBoth: "ブレンド",
	colorLabel: "サイドバーのテーマカラー（6色）",
	colorNameDefault: "デフォルト",
	colorNameGoc: "クラシック",
	imageLabel: "アート背景画像（6枚）",
	imageNone: "なし",
	opacityLabel: "不透明度 (Opacity)",
	opacitySub: "サイドバーの背景色と画像に適用されます",
	opacityStart: "透明",
	opacityEnd: "不透明",
	btnReset: "デフォルトに戻す",
	btnDone: "完了",
	systemPrimaryLabel: "システムブランドカラー",
	systemPrimarySub: "グローバルなPrimeVueのプライマリカラーを変更します",
	colorEmerald: "エメラルドグリーン",
	colorBlue: "ロイヤルブルー",
	colorPurple: "アメジストパープル",
	colorOrange: "ビブラントオレンジ",
	colorRed: "クリムゾンレッド",
	colorTeal: "ティールブリーズ",
	fontLabel: "システムフォント設定",
	fontSub: "アプリケーション全体のフォントファミリーを変更します",
	fontDefault: "Outfit (オリジナル)",
	fontInter: "Inter (モダンテクロノジー)",
	fontPoppins: "Poppins (ソフト丸型)",
	fontMontserrat: "Montserrat (ジオメトリック)",
	fontPlayfair: "Playfair (クラシックセリフ)",
	fontMono: "Roboto Mono (等幅)"
};
const locale_ja_46json_1fe0de68 = {
	btn: btn$1,
	text: text$1,
	msgCommon: msgCommon$1,
	radioButton: radioButton$1,
	deleteModal: deleteModal$1,
	confirmModal: confirmModal$1,
	tableBox: tableBox$1,
	uploadAvatar: uploadAvatar$1,
	uploadFile: uploadFile$1,
	paginator: paginator$1,
	"token.invalid": "トークンの有効期限が切れているため、再度ログインする必要があります",
	"email.exists": "入力されたメールアドレスは存在しません。",
	"email.unique": "入力したメールは存在されました。",
	"password.min": "8～20文字の長さで、大文字、小文字、数字、特殊文字を含むパスワードを入力してください。",
	"password.regex": "8～20文字の長さで、大文字、小文字、数字、特殊文字を含むパスワードを入力してください。",
	"common.in_use": "データは使用されています。",
	"system.error": "システムエラー",
	"common.system_error": "システムエラー",
	"errors.invalid_reset_password_token": "OTPコードが無効です。もう一度ご確認ください。",
	"common.exists": "データはすでに存在されています",
	"common.update.fail": "データの更新に失敗しました",
	"common.not_found": "データが見つかりませんでした",
	"common.noOptions": "データがありません",
	"code.unique": "このコードはすでにシステムに存在しています。",
	"code.duplicate": "このコードは重複されています。",
	"start_date.invalid": "開始日の指定が正しくありません。",
	"end_date.after": "開始日の指定が正しくありません。",
	"product_manual_code.unique": "この商品コードは既にシステムに登録されています。",
	"common.max_rate_limit": "1分間のAPI呼び出し数の制限を超えました。",
	"email.not_found": "メールがない担当者が選択されたので、ご確認ください。",
	auth: auth$1,
	notFound: notFound$1,
	router: router$1,
	menu: menu$1,
	department: department$1,
	user: user$1,
	position: position$1,
	company: company$1,
	userMaster: userMaster$1,
	document: document$1,
	employee: employee$1,
	gender: gender$1,
	contract: contract$1,
	timesheet: timesheet$1,
	leaveRequest: leaveRequest$1,
	compliance: compliance$1,
	dashboard: dashboard$1,
	transaction: transaction$1,
	pagination: pagination$1,
	common: common$1,
	themeCustomizer: themeCustomizer$1
};

var btn = {
	disable: "Vô hiệu hóa",
	enable: "Kích hoạt",
	duplicate: "Sao chép",
	imageUpload: "Đính kèm",
	fileUpload: "Chọn tệp",
	detail: "Chi tiết",
	edit: "Chỉnh sửa",
	view: "Chi tiết",
	create: "Đăng ký",
	ok: "OK",
	list: "Danh sách",
	add: "Thêm mới",
	register: "Đăng ký",
	save: "Lưu",
	back: "Quay lại",
	"delete": "Xóa",
	cancel: "Hủy",
	change: "Thay đổi",
	search: "Tìm kiếm...",
	deactivate: "Vô hiệu hóa",
	activate: "Kích hoạt",
	approval: "Phê duyệt",
	reject: "Từ chối",
	confirm: "Xác nhận",
	start: "Bắt đầu",
	draft: "Bản nháp",
	send: "Gửi",
	login: "Đăng nhập",
	select: "Chọn",
	auto: "Đánh số tự động",
	success: "Thành công",
	warning: "Cảnh báo",
	total: "Tổng cộng",
	entries: "Mục",
	"import": "Nhập dữ liệu",
	next: "Tiếp theo",
	request: "Yêu cầu",
	"export": "Xuất dữ liệu",
	sendFax: "Gửi FAX",
	sendMail: "Gửi Email",
	update: "Cập nhật thông tin thanh toán",
	filter: "Tìm kiếm",
	removeFilter: "Xóa bộ lọc",
	showAll: "Chi tiết",
	logOut: "Đăng xuất",
	close: "Đóng",
	sync: "Cập nhật"
};
var text = {
	cancel: "Hủy",
	"delete": "Xóa",
	empty: "Trống",
	no: "STT",
	id: "ID",
	deleteSuccess: "Xóa {field} thành công",
	syncSuccess: "Đã lưu vào hàng đợi đồng bộ thành công. Vui lòng chờ xử lý.",
	resignSuccess: "Đã đăng ký {field}.",
	noData: "Không có dữ liệu.",
	notEmptyData: "Vui lòng nhập trường này.",
	notEmptyChoose: "Vui lòng chọn {field}.",
	notEmptyInput: "Vui lòng nhập {field}.",
	errorTimePast: "Vui lòng không chọn thời gian trong quá khứ.",
	saveSuccess: "Đã lưu {field} thành công.",
	max255: "Vui lòng nhập {field} trong vòng 255 ký tự.",
	max50: "Vui lòng nhập {field} trong vòng 50 ký tự.",
	max20: "Vui lòng nhập {field} trong vòng 20 ký tự.",
	max10: "Vui lòng nhập {field} trong vòng 10 ký tự.",
	max9: "Vui lòng nhập {field} trong vòng 9 ký tự.",
	min8: "Vui lòng nhập {field} tối thiểu 8 ký tự.",
	slugFormat: "{field} chỉ có thể chứa chữ thường (a-z), số và dấu gạch ngang",
	length10to13: "Vui lòng nhập {field} từ 10 đến 13 ký tự",
	length10to12: "Vui lòng nhập {field} từ 10 đến 12 ký tự",
	updateSuccess: "Hoàn tất cài đặt tài khoản Blastmail.",
	createSuccess: "Đăng ký thành công.",
	udSuccess: "Lưu thành công.",
	activateSuccess: "Kích hoạt thành công.",
	deactivateSuccess: "Hủy kích hoạt thành công.",
	max2000: "Vui lòng nhập {field} trong vòng 2000 ký tự.",
	duplicate: "đã bị trùng lặp.",
	date: "Ngày",
	time: "Thời gian",
	note: "Ghi chú",
	name: "Tên gói",
	type: "Loại",
	price: "Giá",
	action: "Thao tác",
	email: "Địa chỉ Email",
	profile: "Hồ sơ",
	director: "Giám đốc",
	all: "Tất cả",
	status: "Trạng thái",
	minus: "phút",
	second: "giây",
	success: "Thành công",
	error: "Lỗi",
	errorInput: "Thông tin nhập liệu không hợp lệ. Vui lòng kiểm tra lại các trường bị báo lỗi đỏ.",
	require: "Bắt buộc",
	registerBy: "Người đăng ký",
	updatedBy: "Người cập nhật",
	msgPostcodeValid: "Định dạng mã bưu điện không đúng",
	msgDropdownNoData: "Không có kết quả phù hợp",
	errorCodeFormat: "Mã sản phẩm phải là chữ số, ký tự tiếng Nhật hoặc dấu gạch dưới.",
	errorMailFormat: "Định dạng địa chỉ email không đúng.",
	min0Valid: "Vui lòng nhập giá trị lớn hơn 0.",
	validHiragana: "Vui lòng nhập bằng chữ Hiragana",
	validSpacing: "Vui lòng không nhập khoảng trắng trong {field}.",
	validUrl: "URL không hợp lệ. Vui lòng kiểm tra lại.",
	textRequired: "{field} là trường bắt buộc.",
	textNumberItem: "Chỉ có thể chọn {maxLength} mục",
	validateCalendarRange: "Vui lòng chọn cả ngày bắt đầu và ngày kết thúc.",
	copy: "Sao chép",
	sendSuccess: "Gửi thành công.",
	active: "Hoạt động",
	inactive: "Ngưng hoạt động",
	deleted: "Đã xóa",
	sendAllSuccess: "Gửi tất cả thành công.",
	createdAt: "Ngày đăng ký",
	updatedAt: "Ngày cập nhật",
	stt: "STT",
	accountLimit: "Giới hạn tài khoản",
	collaboration: "Cộng tác",
	content: "Mô tả",
	apps: "Ứng dụng",
	fromDate: "Từ ngày",
	toDate: "Đến ngày",
	dateRange: "Chọn khoảng thời gian",
	createNew: "Tạo mới",
	search: "Tìm kiếm",
	confirmDelete: "Bạn có chắc chắn muốn xóa không?",
	systemCode: "Mã hệ thống",
	year: "Năm",
	month: "Tháng",
	week: "Tuần",
	weekNum: "Tuần {field}",
	rangeDate: "{start} ~ {end}",
	textMoney: "₫",
	quantity: "Số lượng",
	profit: "Lợi nhuận",
	total: "Tổng",
	showAll: "Hiển thị tất cả",
	hide: "Ẩn",
	pdf: "PDF",
	file: "Tệp",
	history: "Chi tiết",
	msgDeleteSuccess: "Đã xóa thành công.",
	startDate: "Ngày bắt đầu",
	endDate: "Ngày kết thúc",
	selectMonth: "Chọn tháng",
	weekOfMonth: "Tuần của tháng",
	loadMore: "Xem thêm",
	errorPassLength: "Vui lòng nhập mật khẩu từ 8-20 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt.",
	errorOtpLength: "Vui lòng nhập đúng mã xác thực.",
	unique: "{field} đã tồn tại trong hệ thống",
	formatTax: "Vui lòng nhập mã số thuế từ 10 đến 13 ký tự",
	taxMin9: "Mô tả giảm giá tối đa 9 ký tự",
	password: "Vui lòng nhập {field} từ 8-20 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt.",
	invalidFileType: "Định dạng tệp không hợp lệ. Các định dạng cho phép: png, jpg, jpeg, svg.",
	invalidFileType1: "Định dạng tệp không hợp lệ. Các định dạng cho phép: glb, gltf, obj.",
	invalidFileSize: "Vui lòng tải lên hình ảnh có dung lượng không quá 10MB.",
	invalidMediaType: "Định dạng phương tiện không được hỗ trợ",
	fileTooLarge: "{type} vượt quá giới hạn kích thước cho phép ({size}).",
	image: "Hình ảnh",
	video: "Video",
	emailExists: "Địa chỉ email hoặc mật khẩu không hợp lệ. Vui lòng kiểm tra lại.",
	emailMax: "Vui lòng nhập email trong vòng 255 ký tự.",
	codeIncorrect: "Mã OTP không hợp lệ. Vui lòng kiểm tra lại.",
	please_fill_all_fields: "Vui lòng điền đầy đủ tất cả các thông tin bắt buộc",
	msgMapNotFound: "Không tìm thấy địa chỉ trên bản đồ.",
	verifyFidelity: "Xác thực tính xác thực của dữ liệu",
	requiredFidelity: "Đảm bảo tất cả các trường BẮT BUỘC được điền đầy đủ trước khi hoàn tất.",
	confirmLogoutTitle: "Bạn có chắc chắn muốn đăng xuất không?",
	confirmLogoutText: "Quy trình này không thể hoàn tác.",
	addSuccess: "Thêm mới thành công.",
	edit: "Chỉnh sửa",
	errorMessage: "Thông tin không hợp lệ hoặc lỗi hệ thống.",
	info: "Thông tin",
	warning: "Cảnh báo"
};
var msgCommon = {
	select: "Chọn",
	confirmLogoutTitle: "Bạn có chắc chắn muốn đăng xuất không?",
	confirmLogoutText: "Quy trình này không thể hoàn tác."
};
var radioButton = {
	yes: "Có",
	no: "Không"
};
var deleteModal = {
	areYouSure: "Bạn có chắc chắn muốn xóa không?",
	confirmDelete: "Quy trình này không thể hoàn tác."
};
var confirmModal = {
	confirm: "Xác nhận",
	confirmRequest: "Bạn có muốn xác định đơn giá mới không?",
	cancel: "Hủy",
	language: "Ngôn ngữ",
	vietnamese: "Tiếng Việt",
	english: "Tiếng Anh",
	japanese: "Tiếng Nhật",
	confirmExport: "Xác nhận xuất",
	ExportFile: "Xuất",
	leaveTabTitle: "Bạn có chắc chắn muốn chuyển tab không?",
	leaveTabMessage: "Các thay đổi chưa lưu sẽ bị mất nếu bạn chuyển tab.",
	changeActiveNotifySuccess: "Đã bật liên kết.",
	changeDeactiveNotifySuccess: "Đã tắt liên kết."
};
var tableBox = {
	noData: "Chưa có dữ liệu.",
	noSearchData: "Không có kết quả phù hợp",
	action: "Thao tác",
	deleteAllSelect: "Xoa tất cả dữ liệu đã chọn"
};
var uploadAvatar = {
	errType: "Định dạng hoặc phần mở rộng tệp không đúng.",
	maxImage: "Vui lòng tải lên hình ảnh dung lượng dưới 10MB."
};
var uploadFile = {
	errType: "Định dạng hoặc phần mở rộng tệp không đúng.",
	maxFile: "Vui lòng tải lên tệp dung lượng dưới 10MB.",
	uploadFileSuccess: "Dữ liệu tệp đã được nhập thành công."
};
var paginator = {
	itemsPerPage: "mỗi trang",
	showItems: "Trang {from}-{to}/{total}",
	pages: "Trang {page}/{total}",
	display: "mỗi trang",
	perPage: "mục",
	showInfo: "{fieldFrom}-{fieldTo}/{fieldTotal} mục"
};
var auth = {
	titleLogin: "Vui lòng đăng nhập vào tài khoản của bạn",
	invalid: "Địa chỉ email hoặc mật khẩu không hợp lệ. Vui lòng kiểm tra lại.",
	unauthorized: "Token không hợp lệ và không thể sử dụng",
	need_update_password: "Cần cập nhật mật khẩu.",
	forbidden: "Truy cập bị từ chối!",
	not_found: "Mã OTP đã nhập không đúng.",
	blacklist_token: "Token này đã được sử dụng",
	login: "Đăng nhập",
	email: "ID người dùng",
	code: "Mã xác thực",
	password: "Mật khẩu",
	rememberPassword: "Duy trì đăng nhập",
	loginSuccess: "Đăng nhập thành công.",
	errorMail: "Vui lòng nhập ID người dùng.",
	errorMailFormat: "Định dạng ID người dùng không đúng.",
	userNotExisted: "ID người dùng hoặc mật khẩu không đúng.",
	errorPass: "Vui lòng nhập mật khẩu.",
	errorPassNew: "Vui lòng nhập mật khẩu mới.",
	errorPassLength: "Vui lòng nhập mật khẩu từ 8-32 ký tự bao gồm chữ thường, chữ hoa, số và ký tự đặc biệt.",
	forgotPassword: "Quên mật khẩu",
	haveAnPassword: "Bạn đã nhớ mật khẩu?",
	sendResetSuccess: "Yêu cầu đặt lại mật khẩu đã được gửi.",
	resetPassword: "Đặt lại mật khẩu",
	receiveOtp: "Bạn chưa nhận được mã xác thực?",
	retransmission: "Gửi lại",
	settingPassword: "Cài đặt mật khẩu",
	reSendResetSuccess: "Mã xác thực đã được gửi đến email. Vui lòng kiểm tra email.",
	errorOtp: "Vui lòng nhập mã xác thực.",
	newPassword: "Mật khẩu mới",
	newPasswordConfirm: "Xác nhận mật khẩu",
	errorRePass: "Vui lòng nhập xác nhận mật khẩu.",
	rePassNotMatch: "Mật khẩu và mật khẩu xác nhận không khớp. Vui lòng kiểm tra lại.",
	resetSuccess: "Mật khẩu đã được thay đổi.",
	confirmLogout: "Bạn có chắc chắn muốn đăng xuất không?",
	settingPasswordSuccess: "Cập nhật mật khẩu lần đầu thành công",
	resetPass: "Thay đổi mật khẩu",
	enterEmailResetPass: "Vui lòng nhập địa chỉ email để đặt lại mật khẩu.",
	sendForgotPass: "Gửi mã xác thực",
	otp: "OTP",
	errorEmail: "Địa chỉ email không hợp lệ. Vui lòng kiểm tra lại.",
	inactive: "Truy cập bị từ chối. Tài khoản đã bị khóa hoặc chưa được kích hoạt."
};
var notFound = {
	backToHome: "Quay về trang chủ"
};
var router = {
	homePage: "Trang chủ",
	userList: "Danh sách nhân viên",
	userRegister: "Đăng ký nhân viên",
	userDetail: "Chi tiết nhân viên",
	userEdit: "Chỉnh sửa nhân viên",
	categoryRegister: "Đăng ký danh mục sản phẩm",
	categoryList: "Danh mục sản phẩm",
	categoryEdit: "Chỉnh sửa danh mục sản phẩm",
	categoryDetail: "Chi tiết danh mục sản phẩm",
	customerRegister: "Đăng ký khách hàng",
	customerList: "Danh sách khách hàng",
	customerEdit: "Chỉnh sửa khách hàng",
	customerDetail: "Chi tiết khách hàng"
};
var menu = {
	master: "Master",
	list: "Danh sách",
	register: "Đăng ký",
	dashboard: "Bảng điều khiển",
	department: "Quản lý phòng ban",
	departmentList: "Danh sách phòng ban",
	departmentAdd: "Thêm mới phòng ban",
	departmentEdit: "Chỉnh sửa phòng ban",
	position: "Quản lý chức vụ",
	positionList: "Danh sách chức vụ",
	positionAdd: "Thêm mới chức vụ",
	positionEdit: "Chỉnh sửa chức vụ",
	company: "Quản lý công ty",
	companyList: "Danh sách công ty",
	companyAdd: "Thêm mới công ty",
	companyEdit: "Chỉnh sửa công ty",
	userMaster: "Quản lý nhân viên",
	employee: "Quản lý nhân sự",
	userMasterList: "Danh sách nhân viên",
	userMasterAdd: "Đăng ký nhân viên",
	userMasterEdit: "Chỉnh sửa nhân viên",
	basicInfo: "Thông tin cơ bản",
	contactInfo: "Thông tin liên hệ",
	noteInfo: "Ghi chú & Khác",
	timesheet: "Quản lý chấm công",
	timesheetManage: "Quản trị chấm công",
	leaveRequest: "Đơn xin nghỉ phép",
	leaveRequestPending: "Phê duyệt nghỉ phép",
	contract: "Quản lý hợp đồng",
	transaction: "Quản lý thu chi (Cash Flow)",
	compliance: "Kiểm soát Tuân thủ",
	document: "Quản lý tài liệu & hồ sơ",
	member: "Quản lý thành viên"
};
var department = {
	code: "Mã phòng ban",
	name: "Tên phòng ban",
	note: "Ghi chú",
	status: "Trạng thái",
	title: "Quản lý phòng ban",
	placeholderSearch: "Mã phòng ban, tên phòng ban...",
	noteBasic: "Cấu hình thông tin phòng ban cơ sở",
	noteDetail: "Chi tiết nhiệm vụ & Chức năng",
	namePlaceholder: "Phòng Nghiên cứu & Phát triển (R&D)",
	positionListTitle: "Danh sách chức vụ/chức danh",
	positionListDesc: "Thêm các chức vụ thuộc phòng ban này",
	addPosition: "Thêm chức vụ",
	noPositionYet: "Chưa có chức vụ nào. Vui lòng nhấp nút thêm chức vụ.",
	positionName: "Tên chức vụ",
	positionNamePlaceholder: "Kỹ sư Senior...",
	positionDesc: "Mô tả công việc",
	positionDescPlaceholder: "Mô tả nhiệm vụ...",
	noteAndDesc: "Mô tả & Ghi chú",
	notePlaceholder: "Nhập thông tin mô tả chi tiết về sơ đồ chức năng của phòng ban này...",
	valMissPositionName: "Vui lòng nhập tên chức vụ",
	valMissPositionDesc: "Vui lòng điền đầy đủ tên các chức vụ.",
	associatedJobTitles: "Chức vụ trực thuộc"
};
var user = {
	gender: "Giới tính",
	status: "Trạng thái"
};
var position = {
	title: "Quản lý chức vụ",
	code: "Mã chức vụ",
	name: "Tên chức vụ",
	note: "Ghi chú",
	status: "Trạng thái",
	placeholderSearch: "Mã chức vụ, tên chức vụ",
	noteBasic: "Cấu hình các thông tin định danh và vai trò",
	noteDetail: "Yêu cầu công việc & Mô tả vai trò"
};
var company = {
	title: "Quản lý công ty",
	code: "Mã công ty",
	name: "Tên công ty",
	postcode: "Mã bưu điện (Postcode)",
	searchAddress: "Tìm kiếm địa chỉ",
	area: "Vùng",
	prefecture: "Tỉnh/Thành phố",
	city: "Quận/Huyện",
	town: "Phường/Xã",
	address: "Địa chỉ văn phòng hiện tại",
	addressRegistered: "Địa chỉ đăng ký kinh doanh (Hồ sơ pháp lý)",
	phone: "Số điện thoại",
	fax: "Số Fax",
	email: "Email liên hệ doanh nghiệp",
	note: "Ghi chú",
	status: "Trạng thái hoạt động",
	statusActive: "Đang hoạt động",
	statusInactive: "Ngừng hoạt động",
	placeholderSearch: "Mã công ty, tên công ty",
	noteCode: "Cấu hình các thông tin định danh cốt lõi",
	noteContact: "Kênh liên lạc chính thức của doanh nghiệp",
	noteDetail: "Ghi lại các lưu ý quan trọng",
	editTitle: "Chỉnh sửa doanh nghiệp",
	createTitle: "Thêm doanh nghiệp mới",
	editDesc: "Cập nhật hồ sơ pháp nhân",
	createDesc: "Thiết lập thông tin đối tác & chi nhánh",
	saveProfile: "Lưu hồ sơ",
	basicInfo: "Thông tin cơ bản",
	basicInfoDesc: "Tên doanh nghiệp, mã pháp nhân và người đại diện pháp luật",
	nameKana: "Tên Kana",
	legalRepresentative: "Người đại diện pháp luật",
	taxSection: "Mã số & Định danh pháp lý",
	taxSectionDesc: "Mã số thuế, mã số doanh nghiệp phục vụ xuất hóa đơn và khai báo",
	taxCode: "Mã số thuế",
	corporateNumber: "Mã số doanh nghiệp (Corporate Number)",
	contactSection: "Thông tin liên hệ",
	contactSectionDesc: "Các thông tin để trao đổi, liên hệ trực tiếp với doanh nghiệp",
	addressSection: "Địa chỉ trụ sở",
	addressSectionDesc: "Địa chỉ đăng ký kinh doanh và địa chỉ văn phòng làm việc",
	noteSection: "Ghi chú & Ghi nhớ",
	companyInfo: "Thông tin công ty",
	contactInfo: "Thông tin liên hệ",
	headOfficeAddress: "Địa chỉ trụ sở",
	registeredAddress: "Địa chỉ đăng ký"
};
var userMaster = {
	title: "Quản lý nhân viên",
	code: "Mã nhân viên",
	name: "Họ và tên",
	company: "Công ty",
	department: "Phòng ban",
	position: "Chức vụ",
	phone: "Số điện thoại",
	note: "Ghi chú",
	email: "Email",
	status: "Trạng thái",
	placeholderSearch: "Tên, email, mã nhân viên...",
	noteBasic: "Thông tin định danh nhân viên",
	noteAdditional: "Thông tin bổ sung"
};
var document = {
	dragDropText: "Kéo thả tài liệu vào đây hoặc click để tải lên",
	allowedFormats: "Hỗ trợ định dạng: PDF, Word, Excel, JPG, PNG (Tối đa 10MB)",
	uploading: "Đang tải lên...",
	totalFiles: "Tổng số tệp tin",
	view: "Xem trực tuyến",
	download: "Tải xuống",
	"delete": "Xóa tài liệu",
	noDocuments: "Không có tài liệu nào đính kèm.",
	viewerNotSupportedTitle: "Không hỗ trợ xem trực tiếp",
	viewerNotSupportedDesc: "Trình duyệt không hỗ trợ xem trực tiếp định dạng này. Vui lòng tải xuống máy để mở.",
	downloadFile: "Tải xuống tệp tin",
	deleteConfirmTitle: "Xác nhận xóa tài liệu",
	deleteConfirmDesc: "Bạn có chắc chắn muốn xóa tài liệu này khỏi hệ thống? Hành động này sẽ xóa vĩnh viễn tệp lưu trữ và không thể khôi phục."
};
var employee = {
	title: "Quản lý nhân viên",
	status: "Trạng thái",
	email: "Địa chỉ Email",
	code: "Mã nhân viên",
	addTitle: "Thêm nhân viên mới",
	editTitle: "Chỉnh sửa nhân viên",
	editSubtitle: "Cập nhật hồ sơ nhân sự",
	addSubtitle: "Thiết lập thông tin tài khoản và tổ chức",
	saveProfile: "Lưu hồ sơ",
	personalInfo: "Thông tin cá nhân",
	personalInfoDesc: "Hồ sơ định danh, liên hệ và thông tin cư trú",
	orgUnit: "Đơn vị quản lý",
	basicInfo: "Thông tin cơ bản",
	basicInfoDesc: "Thiết lập các thông tin cơ bản, email liên lạc và tài khoản truy cập hệ thống",
	avatar: "Ảnh đại diện",
	uploadPhoto: "Tải ảnh",
	removePhoto: "Xóa ảnh",
	fullName: "Họ và tên",
	katakanaName: "Tên Katakana",
	romajiName: "Tên Romaji",
	dateOfBirth: "Ngày sinh",
	gender: "Giới tính",
	hometown: "Quê quán",
	placeOfBirth: "Nơi sinh",
	nationality: "Quốc tịch",
	ethnicity: "Dân tộc",
	religion: "Tôn giáo",
	phone: "Số điện thoại",
	department: "Phòng ban",
	selectDepartment: "Chọn phòng ban",
	jobTitle: "Chức vụ",
	selectJobTitle: "Chọn chức vụ",
	statusActive: "Đang làm việc",
	statusInactive: "Nghỉ việc",
	statusProbation: "Thử việc",
	roleAdmin: "Admin",
	roleManager: "Quản lý",
	roleStaff: "Nhân viên",
	placeholderSearch: "Tên, email, mã nhân viên...",
	dialogDisableTitle: "Vô hiệu hóa nhân viên?",
	dialogDisableDesc: "Trạng thái của nhân sự {name} sẽ được chuyển thành INACTIVE.",
	msgDisableSuccess: "Đã vô hiệu hóa nhân viên.",
	joinDate: "Ngày gia nhập",
	role: "Vai trò",
	password: "Mật khẩu",
	taxInsurance: "Thuế & Bảo hiểm",
	taxInsuranceBank: "Thuế, Bảo hiểm & Ngân hàng",
	contractDocument: "Hợp đồng & Tài liệu",
	taxInsuranceTitle: "Giấy tờ & Bảo hiểm xã hội",
	taxInsuranceDesc: "Cấu hình mã số thuế, bảo hiểm và giấy tờ tuỳ thân",
	identityType: "Loại giấy tờ",
	identityNumber: "Số giấy tờ",
	zairyuExpiry: "Hạn thẻ cư trú",
	taxCode: "Mã số thuế",
	socialInsurance: "Mã bảo hiểm xã hội",
	pensionNumber: "Mã số lương hưu",
	employmentInsurance: "Số bảo hiểm thất nghiệp",
	bankInfo: "Thông tin ngân hàng",
	bankInfoTitle: "Tài khoản lương & Ngân hàng",
	bankInfoDesc: "Thiết lập thông tin tài khoản nhận lương và thanh toán",
	bankCode: "Mã ngân hàng",
	bankBranch: "Mã chi nhánh",
	bankAccountType: "Loại tài khoản",
	bankAccountNumber: "Số tài khoản",
	bankAccountHolder: "Tên chủ tài khoản (Katakana)",
	addressInfo: "Địa chỉ & Người thân",
	addressTitle: "Địa chỉ cư trú",
	addressDesc: "Địa chỉ đăng ký hộ khẩu và địa chỉ hiện tại",
	registeredAddress: "Địa chỉ đăng ký hộ khẩu",
	currentAddress: "Địa chỉ cư trú hiện tại",
	dependentsCount: "Số người phụ thuộc",
	relatives: "Thông tin người thân",
	relativesTitle: "Danh sách người thân",
	relativesDesc: "Thông tin liên lạc khẩn cấp và người phụ thuộc",
	addRelative: "Thêm người thân",
	relationship: "Mối quan hệ",
	occupation: "Nghề nghiệp",
	address: "Địa chỉ",
	emergencyContact: "Liên lạc khẩn cấp",
	isDependent: "Người phụ thuộc",
	notes: "Ghi chú",
	detailTitle: "Chi tiết nhân viên",
	missingInfo: "Thiếu thông tin",
	missingInfoDesc: "Vui lòng kiểm tra các tab có đánh dấu lỗi đỏ để hoàn thiện thông tin.",
	contractListTitle: "Danh sách Hợp đồng lao động",
	contractListDesc: "Xem danh sách các hợp đồng lao động đã và đang ký kết của nhân viên này (Chỉ hiển thị, không chỉnh sửa)",
	contractEmpty: "Chưa có thông tin hợp đồng lao động nào.",
	contractCode: "Số hiệu HĐ",
	contractType: "Loại hợp đồng",
	contractDuration: "Thời hạn",
	contractSalary: "Giá trị / Lương",
	contractStatus: "Trạng thái",
	contractAction: "Tải/Xem scan",
	contractActive: "Còn hiệu lực",
	contractInactive: "Hết hiệu lực",
	contractNoScan: "Không có scan",
	contractIndefinite: "Không thời hạn",
	personalDocTitle: "Kho Chứng từ & Tài liệu cá nhân",
	personalDocDesc: "Tải lên, xem trực tiếp và xóa các bản scan CCCD, Hộ chiếu, Thẻ cư trú, Bằng cấp, Chứng chỉ của nhân sự",
	btnUploadDoc: "Tải tài liệu lên",
	msgUploadingDoc: "Đang tải tài liệu lên hệ thống, vui lòng chờ...",
	docEmptyTitle: "Chưa có chứng từ cá nhân nào được tải lên.",
	docEmptyDesc: "Kéo thả file hoặc click nút Tải tài liệu lên ở góc trên.",
	tooltipViewDoc: "Xem tài liệu",
	tooltipDownloadDoc: "Tải xuống",
	tooltipDeleteDoc: "Xóa tài liệu",
	workHistory: "Quá trình làm việc",
	workHistoryTitle: "Lịch sử thay đổi phòng ban, chức vụ & lương",
	workHistoryDesc: "Quản lý lịch sử quá trình làm việc của nhân viên qua các giai đoạn",
	btnAddWorkHistory: "Thêm quá trình",
	workHistoryStage: "Giai đoạn làm việc",
	workHistoryDefault: "Mặc định ban đầu",
	workHistoryStartDate: "Ngày bắt đầu",
	workHistoryEndDate: "Ngày kết thúc",
	workHistorySalary: "Mức lương cơ bản (VND)",
	workHistoryNote: "Ghi chú",
	workHistoryEmpty: "Chưa có lịch sử làm việc nào được ghi nhận.",
	workHistorySyncDept: "Đồng bộ từ thông tin cá nhân",
	workHistorySyncJoin: "Đồng bộ với Ngày gia nhập",
	workHistoryDateError: "Ngày kết thúc không được trước ngày bắt đầu",
	relativeName: "Họ tên thân nhân",
	relativesEmpty: "Chưa có thông tin thân nhân nào được khai báo.",
	relationshipSpouse: "Vợ/Chồng",
	relationshipChild: "Con",
	relationshipParent: "Bố/Mẹ",
	relationshipSibling: "Anh/Chị/Em",
	relationshipOther: "Khác",
	noViewUrl: "Không có URL xem tài liệu.",
	noDownloadUrl: "Không có URL tải tài liệu."
};
var gender = {
	male: "Nam",
	female: "Nữ",
	other: "Khác"
};
var contract = {
	title: "Quản lý Hợp Đồng",
	createTitle: "Ký Hợp Đồng Mới",
	editTitle: "Cập nhật Hợp Đồng",
	subtitle: "Quản lý Tuân thủ",
	updateSubtitle: "Cập nhật hợp đồng",
	generalInfo: "Thông tin chung hợp đồng",
	type: "Loại hợp đồng",
	code: "Mã số hợp đồng",
	codePlaceholder: "Hệ thống tự tạo nếu để trống",
	signDate: "Ngày ký",
	startDate: "Ngày hiệu lực",
	endDate: "Ngày hết hạn (Để trống nếu vô thời hạn)",
	baseSalary: "Lương cơ bản hàng tháng",
	totalValue: "Tổng giá trị hợp đồng",
	status: "Trạng thái hợp đồng",
	laborSection: "Chi tiết Người lao động (Bên B)",
	selectEmployee: "Chọn nhân viên",
	selectEmployeePlaceholder: "Tìm và chọn nhân sự cần ký hợp đồng",
	employmentType: "Hình thức nhân sự",
	jobTitle: "Chức danh / Vị trí công tác",
	workLocation: "Địa điểm làm việc",
	workingHours: "Thời giờ làm việc quy chuẩn (giờ/ngày)",
	probationPeriod: "Thời gian thử việc",
	probationSalary: "Tỷ lệ hưởng lương thử việc (%)",
	bankName: "Ngân hàng nhận lương",
	bankAccount: "Số tài khoản ngân hàng",
	insurance: "Các loại bảo hiểm tham gia",
	partnerSection: "Chi tiết đối tác / khách hàng (Bên B)",
	partnerName: "Tên đơn vị đối tác / khách hàng",
	partnerTaxCode: "Mã số thuế / Số GPKD",
	partnerRepresentative: "Người đại diện ký kết",
	partnerRepresentativeRole: "Chức vụ người đại diện",
	partnerAddress: "Địa chỉ trụ sở chính",
	paymentMethod: "Phương thức thanh toán",
	paymentTerms: "Điều khoản thanh toán",
	billingCycle: "Chu kỳ thanh toán",
	overtimeSection: "Tuân thủ làm thêm giờ theo Luật Lao động Việt Nam",
	agreement36: "Áp dụng giới hạn làm thêm giờ (Bộ Luật Lao động Việt Nam)",
	overtimeAllowance: "Bao gồm phụ cấp làm thêm giờ khoán/gộp sẵn",
	includedOvertimeHours: "Định mức số giờ OT gộp sẵn / tháng",
	edmSection: "Bản quét / Tệp đính kèm (EDM)",
	edmUpload: "Tải lên tệp quét hợp đồng",
	complianceBadge: "Kiểm soát tuân thủ",
	complianceTitle: "Đăng ký tuân thủ",
	complianceDescCreate: "Khi bạn gửi biểu mẫu, hợp đồng sẽ được kiểm tra chéo tự động với danh sách nhân sự hiện hữu để đảm bảo tính pháp lý trước khi lưu trữ.",
	complianceDescEdit: "Mọi cập nhật thông số hợp đồng (lương, điều khoản làm thêm giờ) sẽ tự động đồng bộ sang bộ máy tính lương và kiểm soát giờ tăng ca.",
	submitContract: "Hoàn tất ký hợp đồng",
	missingInfo: "Thiếu thông tin",
	saveSuccess: "Thành công",
	saveSuccessDesc: "Hợp đồng mới đã được ký kết và tuân thủ hoàn hảo.",
	updateSuccess: "Thành công",
	updateSuccessDesc: "Hợp đồng đã được cập nhật tuân thủ thành công.",
	saveError: "Lỗi ký hợp đồng",
	updateError: "Lỗi cập nhật hợp đồng",
	loadError: "Lỗi tải chi tiết hợp đồng",
	loadingData: "Đang tải dữ liệu hợp đồng...",
	typeLabor: "Hợp đồng lao động",
	typeVendor: "Thầu phụ (Vendor)",
	typeClient: "Khách hàng (Client)",
	statusActive: "Đang hoạt động (ACTIVE)",
	statusExpired: "Hết hạn (EXPIRED)",
	statusTerminated: "Chấm dứt (TERMINATED)",
	employmentSeishain: "Chính thức (Seishain)",
	employmentKeiyakushain: "Hợp đồng (Keiyakushain)",
	employmentHaken: "Phái cử (Haken)",
	employmentArubaito: "Bán thời gian (Arubaito)",
	selectMissEmployee: "Vui lòng chọn nhân viên được ký kết hợp đồng.",
	selectMissPartner: "Vui lòng nhập tên đối tác / đơn vị ký kết.",
	selectMissPartnerTax: "Vui lòng nhập mã số thuế đối tác.",
	selectMissValue: "Vui lòng nhập giá trị hợp đồng.",
	edmUploading: "Đang tải lên các tệp đính kèm...",
	manageTitle: "Quản Lý Hợp Đồng",
	manageDesc: "Quản lý và lưu trữ hợp đồng lao động nhân viên và hợp đồng thương mại của doanh nghiệp.",
	signNew: "Ký hợp đồng mới",
	quickSign: "Ký nhanh hợp đồng",
	quickSignSuccess: "Ký hợp đồng thành công. Hợp đồng đã được cập nhật.",
	typeCommercial: "Hợp đồng thương mại",
	searchPlaceholder: "Tìm kiếm số HĐ, nhân viên...",
	typeSelect: "Loại hợp đồng",
	statusSelect: "Trạng thái",
	party: "Đối tượng",
	duration: "Thời hạn",
	value: "Giá trị",
	documents: "Tài liệu",
	actions: "Thao tác",
	loading: "Đang tải danh sách hợp đồng...",
	noData: "Không tìm thấy hợp đồng nào phù hợp.",
	noEmployee: "Chưa phân bổ nhân sự",
	corporatePartner: "Đối tác Doanh nghiệp",
	indefinite: "Vô thời hạn",
	files: "tệp",
	exportPdf: "Xuất PDF mẫu",
	exportPdfStyle: "Chọn phong cách xuất hợp đồng PDF",
	exportPdfDesc: "Chọn một trong các phong cách thiết kế biểu mẫu chuyên nghiệp dưới đây để xuất hợp đồng:",
	styleClassic: "Truyền thống pháp lý (Classic Style)",
	selected: "Đang chọn",
	styleClassicDesc: "Sử dụng phông chữ Serif trang trọng, Quốc hiệu tiêu ngữ chuẩn Bộ Nội vụ Việt Nam, phân chia các Điều khoản bằng đường viền kẻ mảnh thanh lịch.",
	styleModern: "Doanh nghiệp hiện đại (Modern Style)",
	styleModernDesc: "Phông chữ Sans-serif hiện đại, phối màu ngọc lục bảo (Emerald Green) chủ đạo, khung điều khoản tuân thủ nổi bật và chữ ký phân chia trực quan.",
	styleAcademic: "Ấn phẩm thanh lịch (Academic Style)",
	styleAcademicDesc: "Thiết kế tinh giản phối sắc xanh Navy lịch lãm, lề giấy rộng rãi chuẩn định dạng ấn phẩm cao cấp, lý tưởng cho hợp đồng thương mại lớn.",
	downloadPdf: "Xuất và Tải xuống PDF",
	deleteConfirmTitle: "Xóa hợp đồng?",
	deleteConfirmDesc: "Bạn chắc chắn muốn xóa hợp đồng {code}? Hành động này không thể hoàn tác.",
	allContracts: "Tất cả hợp đồng",
	allTypes: "Tất cả loại",
	statusAll: "Tất cả trạng thái",
	deleteSuccessDesc: "Hợp đồng đã được xóa khỏi hệ thống.",
	deleteError: "Lỗi xóa hợp đồng",
	payBank: "Chuyển khoản ngân hàng",
	payCash: "Tiền mặt",
	payCredit: "Thẻ tín dụng",
	cycleMonthly: "Hàng tháng",
	cycleQuarterly: "Hàng quý",
	cycleOneTime: "Một lần",
	fileTooLarge: "Tệp quá lớn",
	fileTooLargeDesc: "Tệp {name} vượt quá giới hạn cho phép 10MB.",
	createSuccess: "Tạo hợp đồng thành công",
	createSuccessWithDocs: "Tạo hợp đồng và tải chứng từ thành công",
	createError: "Lỗi khi tạo hợp đồng",
	downloadPdfSuccess: "Tải tệp PDF thành công",
	exportPdfError: "Lỗi khi xuất PDF hợp đồng",
	formatError: "Định dạng tệp không hợp lệ",
	formatErrorDesc: "Hệ thống chỉ hỗ trợ các định dạng: PDF, DOC, DOCX, JPG, PNG",
	sizeError: "Kích thước tệp quá lớn",
	sizeErrorDesc: "Kích thước tệp đính kèm không được vượt quá 10MB",
	statusPending: "Chờ duyệt (PENDING)",
	employmentFullTimeVn: "Chính thức (Việt Nam)",
	employmentPartTimeVn: "Bán thời gian (Việt Nam)"
};
var timesheet = {
	title: "Bảng công cá nhân",
	desc: "Ghi nhận thời gian làm việc hàng ngày và theo dõi lịch sử chuyên cần của bạn.",
	standardTimeSystem: "HỆ THỐNG GIỜ CHUẨN",
	workingTimeVN: "Giờ làm việc Việt Nam",
	gpsClock: "Giờ đồng hồ GPS độ phân giải cao",
	todayTracking: "Ghi nhận chấm công hôm nay",
	trackingDesc: "Nhấn Check-in khi bắt đầu ngày làm việc. Nếu check-in sau 09:00, trạng thái ghi nhận sẽ là đi muộn. Nhấn Check-out trước khi ra về để hoàn tất ghi nhận ngày công.",
	checkInTime: "Giờ vào",
	checkOutTime: "Giờ ra",
	checkedIn: "Đã Check-in",
	checkedOut: "Đã Check-out",
	history: "Lịch sử chấm công",
	historyDesc: "Theo dõi chi tiết các ngày công ghi nhận trong tháng.",
	selectMonth: "Chọn tháng",
	noData: "Chưa có dữ liệu chấm công cho tháng này.",
	success: "Chấm công thành công",
	checkInSuccess: "Bạn đã check-in thành công hôm nay.",
	checkOutSuccess: "Bạn đã check-out thành công hôm nay.",
	multiModalCheckin: "Chấm công đa phương thức",
	qrTab: "Mã QR Cá Nhân",
	deviceTab: "Máy Vân Tay & FaceID",
	qrDesc: "Đưa mã QR cá nhân dưới đây trước camera của máy quét để tự động chấm công.",
	qrRefreshesIn: "Tự động làm mới sau {seconds} giây",
	deviceConnected: "Máy quét: ZK-Teco FaceID Pro #01",
	deviceStatusConnected: "KẾT NỐI",
	deviceSyncDesc: "Hệ thống tự động đồng bộ dấu vân tay & khuôn mặt mỗi 5 phút.",
	syncButtonLabel: "Đồng bộ từ thiết bị",
	syncingText: "Đang kết nối máy chấm công...",
	syncSuccess: "Đồng bộ thành công! Đã tải và ghi nhận 2 lượt chấm công mới nhất.",
	simulateQrBtn: "Giả lập máy quét tại VP",
	simulatingScan: "Đang giả lập camera văn phòng quét mã QR cá nhân của bạn...",
	alreadyCheckedOut: "Bạn đã hoàn thành chấm công ra/vào hôm nay.",
	date: "Ngày",
	status: "Trạng thái",
	day0: "Chủ Nhật",
	day1: "Thứ Hai",
	day2: "Thứ Ba",
	day3: "Thứ Tư",
	day4: "Thứ Năm",
	day5: "Thứ Sáu",
	day6: "Thứ Bảy",
	checkIn: "Vào ca",
	checkOut: "Kết ca",
	today: "Hôm nay",
	workingHours: "Số giờ làm việc",
	overtime: "Tăng ca",
	manageTitle: "Quản trị chấm công",
	employee: "Nhân viên",
	totalHours: "Tổng giờ",
	overtimeHours: "Giờ tăng ca",
	lateMins: "Đi muộn (phút)",
	earlyLeaveMins: "Về sớm (phút)",
	accessDenied: "Từ chối truy cập",
	accessDeniedDesc: "Tài khoản của bạn không có vai trò Quản lý hoặc Quản trị viên để thực hiện quản lý chấm công nhân sự.",
	backHome: "Quay lại Trang chủ",
	adminTitle: "Quản trị Chấm công Nhân sự",
	adminDesc: "Kiểm tra, điều chỉnh hoặc thêm mới chấm công thủ công và xem báo cáo tổng hợp chuyên cần của toàn bộ nhân viên.",
	addManual: "Thêm chấm công thủ công",
	tabHistory: "Lịch sử Chấm công",
	tabStats: "Thống kê chuyên cần",
	tabConfigs: "Cấu hình Giờ làm việc",
	tabPayroll: "Tính tiền lương",
	payrollTitle: "Bảng tính tiền lương hàng tháng",
	payrollDesc: "Xem chi tiết công, tính lương cơ bản, tính tăng ca, các khoản phụ cấp chuyên cần và khấu trừ đi muộn, nghỉ phép.",
	selectPayrollMonth: "Chọn tháng tính lương",
	loadingPayroll: "Đang tải bảng tính lương...",
	noPayrollData: "Không có dữ liệu lương cho tháng này.",
	baseSalary: "Lương cơ bản",
	workingDaysActualStandard: "Công (Thực/Chuẩn)",
	overtimeCol: "Tăng ca (OT)",
	attendanceAllowance: "Chuyên cần",
	deductionLate: "Trừ muộn",
	deductionLeave: "Trừ nghỉ phép",
	advancePayment: "Đã trả trước",
	netSalary: "Thực lĩnh",
	statusPaid: "Đã thanh toán",
	statusPending: "Chờ xử lý",
	payrollDetailsFor: "Bảng lương: {name} ({code})",
	actualWorkingDays: "Công thực tế",
	payrollMonth: "Tháng làm việc",
	overtimeSalary: "Tiền OT",
	attendanceAllowanceLabel: "PC Chuyên cần",
	deductionLateLabel: "Trừ đi muộn",
	deductionLeaveLabel: "Trừ nghỉ K.Phép",
	deductionUnion: "Phí công đoàn",
	deductionTax: "Thuế TNCN",
	deductionUnionLabel: "Phí công đoàn",
	deductionTaxLabel: "Thuế TNCN",
	advancePaymentLabel: "Tạm ứng",
	paymentStatusLabel: "Trạng thái thanh toán",
	netSalaryLabel: "Thực lĩnh",
	btnSavePayroll: "Lưu bảng lương",
	msgSavePayrollSuccess: "Đã lưu thông tin bảng lương nhân viên thành công.",
	msgSavePayrollError: "Có lỗi xảy ra khi lưu bảng lương.",
	overtimeBreakdown: "Chi tiết các khoản làm thêm (Tăng ca)",
	overtimeNormal: "Tăng ca ngày thường (1.5x)",
	overtimeWeekend: "Cuối tuần (2.0x)",
	overtimeHoliday: "Ngày lễ, Tết (3.0x)",
	exportExcelSuccess: "Đã xuất file Excel bảng lương thành công.",
	exportExcelError: "Có lỗi xảy ra khi xuất file Excel.",
	exportPdfSuccess: "Đã xuất file PDF bảng lương thành công.",
	exportPdfError: "Có lỗi xảy ra khi xuất file PDF.",
	searchKeyword: "Từ khóa tìm kiếm",
	searchPlaceholder: "Tên hoặc mã nhân viên...",
	statusAll: "Tất cả trạng thái",
	statusPresent: "Đúng giờ (PRESENT)",
	statusLate: "Đi muộn (LATE)",
	statusAbsent: "Vắng mặt (ABSENT)",
	fromDate: "Từ ngày",
	toDate: "Đến ngày",
	no: "STT",
	staff: "Nhân sự",
	dateCol: "Ngày",
	checkInCol: "Check-in",
	checkOutCol: "Check-out",
	expectedWork: "Ca quy định",
	checkoutDiff: "Chênh lệch ra",
	statusCol: "Trạng thái",
	noteCol: "Ghi chú",
	actionCol: "Thao tác",
	loadingList: "Đang tải danh sách chấm công...",
	noHistoryFound: "Không tìm thấy lịch sử chấm công nào phù hợp với bộ lọc.",
	editOrCompensate: "Sửa / Bù công",
	showLines: "Hiển thị {current}/{total} dòng",
	monthStats: "Thống kê chuyên cần tháng",
	monthStatsDesc: "Tổng hợp số liệu ngày công đi làm, muộn, vắng mặt của toàn bộ nhân viên.",
	selectStatsMonth: "Chọn tháng thống kê",
	statsSummary: "Thống kê tổng hợp",
	stats30Days: "Chi tiết lịch 30 ngày",
	loadingStats: "Đang tính toán số liệu thống kê...",
	noEmployeeMonth: "Không tìm thấy nhân viên nào trong tháng được chọn.",
	staffCode: "Mã NV",
	staffName: "Tên Nhân viên",
	onTime: "Đúng Giờ",
	lateCol: "Đi Muộn",
	lateHoursPenalty: "Giờ muộn phạt",
	excusedLeave: "Nghỉ có phép",
	absentNoExcuse: "Vắng KP",
	totalAbsent: "Tổng Vắng",
	workingDaysMax: "Ngày đi làm / Tối đa",
	otHours: "OT (giờ)",
	hours: "giờ",
	days: "ngày",
	mins: "phút",
	times: "lần",
	statsCalendarFor: "Xem lịch chi tiết cho nhân viên",
	legendLateEarly: "Muộn / Về sớm",
	legendMissInOut: "Thiếu check-in/out",
	legendWeekendHoliday: "Cuối tuần / Lễ",
	legendOnTime: "Đúng giờ",
	weekend: "Cuối tuần",
	holiday: "Nghỉ lễ",
	excusedLeaveAll: "Nghỉ phép cả ngày",
	excusedLeaveMorning: "Nghỉ phép sáng",
	excusedLeaveAfternoon: "Nghỉ phép chiều",
	missCheck: "Thiếu Check",
	configTitle: "Cấu hình Giờ làm việc",
	configDesc: "Thiết lập khung giờ chấm công chuẩn theo từng khoảng thời gian linh hoạt.",
	addConfig: "Thêm cấu hình",
	loadingConfigs: "Đang tải danh sách...",
	noConfigsYet: "Chưa có cấu hình giờ làm việc nào được tạo.",
	defaultSystem: "Mặc định hệ thống",
	flexible: "Linh hoạt",
	applyAllTime: "Áp dụng: Toàn bộ thời gian (Fallback)",
	applyRange: "Áp dụng: {start} ~ {end}",
	standardIn: "Giờ vào chuẩn",
	standardOut: "Giờ ra chuẩn",
	saturday: "Thứ 7",
	saturdayOff: "Nghỉ Thứ 7",
	saturdayMorning: "Làm sáng Thứ 7 (đến 12:00)",
	saturdayFull: "Làm cả ngày Thứ 7",
	editConfig: "Chỉnh sửa",
	deleteConfig: "Xóa cấu hình",
	dialogManualEdit: "Cập nhật Chấm công / Bù giờ",
	dialogManualCreate: "Thêm Chấm công Thủ công",
	employeeLabel: "Nhân viên",
	employeeSelectPlaceholder: "Chọn nhân sự",
	attendanceDate: "Ngày chấm công",
	selectDate: "Chọn ngày",
	checkInLabel: "Giờ Check-in",
	checkInPlaceholder: "Chọn giờ vào",
	checkOutLabel: "Giờ Check-out",
	checkOutPlaceholder: "Chọn giờ ra",
	statusLabel: "Trạng thái ghi nhận",
	noteLabel: "Lý do / Ghi chú bổ sung",
	notePlaceholder: "Nhập lý do điều chỉnh hoặc bù công...",
	btnCancel: "Hủy",
	btnSaveRecord: "Lưu bản ghi",
	dialogConfigEdit: "Chỉnh sửa Cấu hình Giờ làm việc",
	dialogConfigCreate: "Thêm Cấu hình Giờ làm việc",
	configName: "Tên cấu hình",
	configNamePlaceholder: "e.g. Giờ làm việc mùa hè",
	setDefaultConfig: "Đặt làm cấu hình mặc định",
	setDefaultConfigDesc: "Hệ thống sẽ dùng cấu hình này nếu không có khoảng thời gian nào khớp.",
	saturdayWorkingMode: "Chế độ làm việc ngày Thứ 7",
	saturdayWorkingModeDesc: "Áp dụng tính công và kiểm soát đi muộn cho ngày Thứ 7.",
	valMissManualData: "Thiếu dữ liệu",
	valMissManualDataDesc: "Vui lòng chọn nhân viên và ngày chấm công.",
	msgUpdateSuccess: "Cập nhật thành công",
	msgUpdateSuccessDesc: "Bản ghi chấm công đã được lưu thành công.",
	valInvalidConfig: "Thông tin không hợp lệ",
	valInvalidConfigDesc: "Vui lòng điền đầy đủ tên cấu hình và khoảng giờ làm việc.",
	msgSaveConfigSuccess: "Đã lưu cấu hình giờ làm việc.",
	msgDeleteConfigConfirm: "Bạn có chắc chắn muốn xóa cấu hình giờ làm việc này?",
	msgDeleteConfigSuccess: "Đã xóa cấu hình thành công.",
	tabShifts: "Ca làm việc",
	tabShiftAssignments: "Phân ca nhân viên",
	shiftTitle: "Danh sách Ca làm việc",
	shiftDesc: "Thiết lập các ca làm việc khác nhau cho nhân viên và cấu hình điều kiện tính tăng ca.",
	addShift: "Thêm ca làm việc",
	dialogShiftCreate: "Thêm Ca Làm Việc Mới",
	dialogShiftEdit: "Chỉnh Sửa Ca Làm Việc",
	shiftName: "Tên ca làm việc",
	shiftNamePlaceholder: "Ví dụ: Ca hành chính, Ca tối...",
	allowOvertime: "Cho phép tính tăng ca",
	maxOvertimeHours: "Số giờ tăng ca tối đa",
	maxOvertimeHoursPlaceholder: "Số giờ (e.g. 2), để trống nếu không giới hạn",
	shiftAssignedSuccess: "Đã phân ca cho nhân viên thành công.",
	deleteShiftConfirm: "Bạn có chắc chắn muốn xóa ca làm việc này? Tất cả dữ liệu phân ca liên quan sẽ bị xóa.",
	deleteShiftSuccess: "Đã xóa ca làm việc thành công.",
	assignShift: "Phân ca cho nhân viên",
	employeeSelect: "Chọn nhân viên",
	datesSelect: "Chọn ngày phân ca",
	selectShift: "Chọn ca làm việc",
	btnAssign: "Phân ca",
	assignedShiftsList: "Bảng phân ca nhân viên",
	noAssignedShifts: "Chưa có nhân sự nào được phân ca trong khoảng thời gian này.",
	deleteAssignmentConfirm: "Bạn có chắc chắn muốn xóa phân ca này?",
	deleteAssignmentSuccess: "Đã xóa phân ca thành công.",
	overtimeStatus: "Tăng ca",
	overtimeAllowed: "Cho phép",
	overtimeNotAllowed: "Không cho phép",
	assignShiftsTitle: "Bảng Phân ca & Tăng ca Nhân viên",
	assignShiftsDesc: "Quản lý ca làm việc linh hoạt, tăng ca và đồng bộ thông tin nghỉ phép hàng tháng.",
	bulkActions: "Hành động hàng loạt",
	selectedEmployees: "Đã chọn: {count} nhân viên",
	bulkAssignBtn: "Phân ca hàng loạt",
	bulkResetBtn: "Reset ca hàng loạt",
	legendTitle: "Ký hiệu phân ca:",
	legendAL: "Nghỉ phép năm",
	legendSL: "Nghỉ ốm",
	legendOT: "Cho phép tăng ca",
	legendNoOT: "Không tăng ca",
	legendOff: "Ngày nghỉ / Cuối tuần",
	loadingAssignData: "Đang tải dữ liệu phân ca...",
	noEmployeesFound: "Không tìm thấy nhân viên nào",
	employeeHeader: "Nhân viên",
	departmentHeader: "Bộ phận",
	monthAssign: "Tháng phân ca",
	allDepartments: "Tất cả phòng ban",
	searchEmployee: "Tìm kiếm nhân viên",
	searchEmployeePlaceholder: "Tên, mã nhân viên...",
	w0: "CN",
	w1: "T2",
	w2: "T3",
	w3: "T4",
	w4: "T5",
	w5: "T6",
	w6: "T7",
	selectAtLeastOneEmployee: "Vui lòng chọn ít nhất một nhân viên",
	selectShiftError: "Vui lòng chọn ca làm việc",
	selectDateRangeError: "Vui lòng chọn khoảng thời gian",
	selectAtLeastOneWeekdayAssign: "Vui lòng chọn ít nhất một ngày trong tuần để áp dụng",
	selectAtLeastOneWeekdayReset: "Vui lòng chọn ít nhất một ngày trong tuần để reset",
	bulkAssignSuccess: "Phân ca hàng loạt thành công",
	bulkResetSuccess: "Reset ca làm việc hàng loạt thành công",
	dialogBulkAssignHeader: "Phân ca làm việc hàng loạt",
	dialogBulkAssignWarningPrefix: "Bạn đang thiết lập ca làm việc cho",
	dialogBulkAssignWarningSuffix: "nhân viên đã chọn.",
	dialogBulkResetHeader: "Khôi phục ca mặc định hàng loạt",
	dialogBulkResetWarningPrefix: "Hành động này sẽ khôi phục lịch làm việc của",
	dialogBulkResetWarningSuffix: "nhân viên về ca mặc định của hệ thống trong khoảng thời gian đã chọn.",
	applyToWeekdays: "Áp dụng cho các ngày trong tuần",
	confirm: "Xác nhận"
};
var leaveRequest = {
	title: "Đơn xin nghỉ phép",
	pendingTitle: "Phê duyệt nghỉ phép",
	startDate: "Ngày bắt đầu",
	endDate: "Ngày kết thúc",
	reason: "Lý do",
	type: "Loại nghỉ phép",
	status: "Trạng thái",
	approver: "Người phê duyệt",
	approvedAt: "Ngày phê duyệt",
	rejectedAt: "Ngày từ chối",
	accessDenied: "Từ chối truy cập",
	accessDeniedDesc: "Tài khoản của bạn không có vai trò Quản lý hoặc Quản trị viên để thực hiện phê duyệt đơn xin nghỉ phép.",
	backToHome: "Quay lại Trang chủ",
	panelDesc: "Xem xét, phê duyệt hoặc từ chối các đơn xin nghỉ phép đang chờ xử lý của nhân viên.",
	tabAll: "Tất cả",
	tabPending: "Chờ duyệt",
	tabApproved: "Đã duyệt",
	tabRejected: "Đã từ chối",
	noRequest: "Hiện không có đơn xin nghỉ phép nào.",
	noRequestWithStatus: "Không có đơn nghỉ phép nào ở trạng thái \"{status}\".",
	allDay: "Cả ngày",
	morning: "Nghỉ Sáng",
	afternoon: "Nghỉ Chiều",
	days: "ngày",
	noReason: "Không có lý do",
	dialogApproveTitle: "Phê duyệt đơn nghỉ phép",
	dialogRejectTitle: "Từ chối đơn nghỉ phép",
	employee: "Nhân viên",
	approverNote: "Phản hồi / Ghi chú phê duyệt",
	approverNotePlaceholder: "Nhập ý kiến phản hồi gửi tới nhân viên (không bắt buộc)...",
	confirmApprove: "Xác nhận Duyệt",
	confirmReject: "Xác nhận Từ chối",
	processSuccess: "Xử lý thành công",
	approveSuccessDesc: "Đã duyệt đơn phép thành công.",
	rejectSuccessDesc: "Đã từ chối đơn phép thành công.",
	stt: "STT",
	timeRange: "Thời gian nghỉ",
	system: "Hệ thống",
	typeAnnual: "Nghỉ phép năm",
	typeSick: "Nghỉ ốm",
	typeSpecial: "Nghỉ đặc biệt",
	typeUnpaid: "Nghỉ không lương",
	desc: "Đăng ký nghỉ phép trực tuyến và theo dõi lịch sử phê duyệt của bạn.",
	attachment: "Tài liệu đính kèm",
	uploadInstructions: "Kéo thả hoặc nhấp để chọn tệp",
	attachmentCol: "Tài liệu",
	noAttachment: "Không có tài liệu",
	viewAttachment: "Xem tài liệu đính kèm",
	attachmentPlaceholder: "Chọn tệp hỗ trợ (Đơn khám bệnh, vé tàu...)",
	fileSizeLimitError: "Kích thước tệp vượt quá giới hạn 10MB.",
	myList: "Danh sách phép của tôi",
	myListDesc: "Lịch sử và trạng thái các đơn xin nghỉ phép đã nộp.",
	noMyRequest: "Bạn chưa tạo bất kỳ đơn xin nghỉ phép nào.",
	createDesc: "Đăng ký ngày xin nghỉ gửi tới cấp trên.",
	session: "Buổi nghỉ",
	reasonPlaceholder: "Vui lòng nêu rõ lý do nghỉ phép...",
	submit: "Gửi yêu cầu",
	detailTitle: "Chi tiết đơn xin nghỉ phép",
	code: "Mã đơn phép",
	totalDays: "Tổng số ngày",
	period: "Khoảng thời gian",
	approverFeedback: "Ý kiến phản hồi từ người duyệt",
	noFeedback: "Không có ghi chú phản hồi",
	morningSession: "Buổi sáng (Nghỉ 8:30 - 12:00)",
	afternoonSession: "Buổi chiều (Nghỉ 13:15 - 17:30)",
	valIncomplete: "Thông tin không đầy đủ",
	valIncompleteDesc: "Vui lòng chọn loại phép, ngày bắt đầu và kết thúc.",
	submitSuccess: "Gửi đơn phép thành công",
	submitSuccessDesc: "Đơn xin nghỉ phép của bạn đã được gửi cho quản lý.",
	from: "Từ",
	to: "Đến"
};
var compliance = {
	title: "Kiểm soát Tuân thủ",
	summary: "Tổng quan tuân thủ",
	riskLevel: "Mức độ rủi ro",
	violations: "Vi phạm",
	warnings: "Cảnh báo",
	centerTitle: "Trung Tâm Cảnh Báo Tuân Thủ",
	centerDesc: "Quét tự động & cảnh báo sớm các rủi ro pháp lý (Visa, Hợp đồng, Thuế khóa, Tăng ca quá giờ).",
	btnScan: "Quét Tuân Thủ Real-time",
	scanning: "Đang quét...",
	healthScore: "Điểm số sức khỏe tuân thủ",
	healthScoreDesc: "Được đánh giá dựa trên mức độ nghiêm trọng của các rủi ro hiện hữu trong hệ thống.",
	recommendation: "Khuyến nghị",
	healthExcellent: "Tuyệt vời (Hợp chuẩn)",
	healthFair: "Khá (Rủi ro trung bình)",
	healthAlarm: "Báo động (Rủi ro cao)",
	recExcellent: "Tiếp tục duy trì quy trình kiểm soát.",
	recFair: "Cần khắc phục ngay các rủi ro loại WARNING.",
	recAlarm: "Xử lý khẩn cấp các lỗi CRITICAL để tránh phạt pháp lý.",
	criticalRisk: "Nguy cơ Chí mạng",
	criticalDesc: "CRITICAL / Yêu cầu xử lý gấp",
	warningRisk: "Cảnh báo rủi ro",
	warningDesc: "WARNING / Cần bổ sung & lưu tâm",
	resolvedRisk: "Đã tự động khắc phục",
	resolvedDesc: "TỰ ĐỘNG CHỮA LÀNH / SELF-HEALED",
	criticalTitle: "NGUY CƠ CHÍ MẠNG (CRITICAL)",
	btnActNow: "Xử lý ngay",
	tabActiveRisks: "Rủi ro Hiện hữu",
	tabResolvedHistory: "Lịch sử giải quyết",
	searchPlaceholder: "Tìm kiếm nội dung vi phạm...",
	severityPlaceholder: "Mức độ nghiêm trọng",
	typePlaceholder: "Phân loại rủi ro",
	tooltipRefresh: "Làm mới",
	colSeverity: "Mức độ",
	colType: "Phân loại",
	colDescription: "Nội dung chi tiết vi phạm",
	colEntity: "Đối tượng phát hiện",
	colStatus: "Trạng thái",
	colAction: "Hành động khắc phục",
	loading: "Đang phân tích rủi ro tuân thủ...",
	noDataTitle: "Tuyệt vời! Không phát hiện rủi ro tuân thủ nào.",
	noDataDesc: "Hệ thống của bạn đang hoạt động tuân thủ hoàn hảo.",
	sevCritical: "Chí mạng",
	sevWarning: "Cảnh báo",
	sevInfo: "Thẩm định",
	sevAll: "Tất cả mức độ",
	statusOpen: "Chưa giải quyết",
	statusResolved: "Đã giải quyết",
	resolvedBy: "Bởi",
	btnResolve: "Khắc phục",
	tooltipManualResolve: "Giải quyết thủ công",
	dialogResolveTitle: "Xác nhận giải quyết vi phạm",
	dialogResolveHeader: "Giải quyết cảnh báo tuân thủ",
	dialogResolveDesc: "Bạn đang đánh dấu cảnh báo này là Đã được giải quyết trong hệ thống kiểm tra.",
	dialogResolveNote: "Ghi chú giải trình (Bắt buộc)",
	dialogResolvePlaceholder: "Nhập ghi chú hoặc lý do giải quyết rủi ro này...",
	btnCancel: "Hủy",
	btnConfirmResolve: "Xác nhận Giải quyết",
	typeVisa: "Hạn thẻ ngoại kiều",
	typeContract: "Hết hạn hợp đồng",
	typeInvoice: "Thiếu hóa đơn/chứng từ",
	typeOvertime: "Làm thêm giờ quá giới hạn",
	typeAll: "Tất cả phân loại",
	typeVisaExpiration: "Hết hạn Visa (VISA)",
	typeContractExpiration: "Hết hạn Hợp đồng (CONTRACT)",
	typeMissingInvoice: "Thiếu Hóa đơn/Chứng từ (INVOICE)",
	typeOvertimeLimit: "Tăng ca quá giới hạn (OVERTIME)",
	msgScanSuccess: "Quét tuân thủ hoàn tất",
	msgScanSuccessDesc: "Bộ máy kiểm soát đã quét xong. Phát hiện mới: {created} rủi ro, tự động chữa lành: {resolved} rủi ro.",
	msgScanError: "Quét tuân thủ thất bại",
	msgScanErrorDesc: "Lỗi kết nối bộ máy quét.",
	msgActError: "Không thể xác định đường dẫn khắc phục cho loại cảnh báo này.",
	msgResolveSuccess: "Khắc phục thành công",
	msgResolveSuccessDesc: "Cảnh báo vi phạm tuân thủ đã được giải quyết.",
	msgResolveError: "Thao tác thất bại",
	msgResolveErrorDesc: "Không thể giải quyết cảnh báo."
};
var dashboard = {
	title: "Bảng điều khiển",
	welcome: "Chào mừng trở lại",
	totalEmployees: "Tổng nhân viên",
	totalContracts: "Tổng hợp đồng",
	totalTransactions: "Tổng giao dịch",
	pendingLeaves: "Nghỉ phép chờ duyệt",
	complianceBannerTitle: "HỆ THỐNG PHÁT HIỆN VI PHẠM PHÁP LÝ",
	complianceBannerDesc: "Cảnh báo: Phát hiện {count} rủi ro CHÍ MẠNG (Visa sắp hết hạn, vượt hạn mức tăng ca hoặc thiếu hóa đơn giao dịch). Nhấp để khắc phục tự động!",
	enterpriseDashboard: "Bảng Điều Khiển Doanh Nghiệp",
	welcomeUser: "Xin chào, {name}. Đây là phân tích tổng hợp dữ liệu thực từ các phòng ban.",
	admin: "Quản trị viên",
	fiscalYear: "Niên độ tài khóa",
	btnComplianceControl: "Kiểm soát Tuân thủ",
	revenueYearBadge: "NĂM CÓ THU",
	revenueYearTitle: "Doanh thu tài khóa",
	expenseYearBadge: "NĂM CHI TIÊU",
	expenseYearTitle: "Chi phí vận hành",
	netIncomePositive: "DƯƠNG VỐN",
	netIncomeNegative: "THÂM HỤT",
	netIncomeTitle: "Lợi nhuận thuần ròng",
	complianceScoreTitle: "Chỉ số tuân thủ pháp lý",
	compCompliant: "HỢP CHUẨN",
	compWarning: "CẢNH BÁO",
	compDanger: "NGUY HIỂM",
	activeEmployees: "Nhân viên hiện diện",
	employeesCount: "{active} / {total} Nhân sự",
	activeContracts: "Hợp đồng hiệu lực",
	contractsCount: "{active} / {total} Hợp đồng",
	pendingLeavesCount: "{count} Yêu cầu",
	cashflowTitle: "Dòng Tiền Thu Chi Năm {year}",
	cashflowDesc: "Xu hướng tăng trưởng và phát sinh chi phí thực tế theo tháng",
	optRevenue: "Doanh Thu",
	optExpense: "Chi Phí",
	optProfit: "Lợi Nhuận",
	contractStructure: "Cơ Cấu Hợp Đồng",
	contractStructureDesc: "Tỷ lệ phân chia giữa các loại hình hợp đồng",
	topExpenses: "Top Danh Mục Chi Tiêu",
	topExpensesDesc: "Các khoản chi phát sinh nhiều nhất trong niên độ",
	staffDensity: "Mật Độ Nhân Sự Theo Phòng Ban",
	staffDensityDesc: "Tỉ trọng lực lượng lao động được phân bổ",
	timesheetStat: "Thống Kê Công & Tăng Ca Tháng Này",
	timesheetStatDesc: "Giám sát số ngày công, tổng giờ làm và giờ tăng ca thực tế",
	btnTimesheetDetail: "Chi tiết Chấm công",
	colEmpCode: "Mã NV",
	colEmpName: "Nhân viên",
	colPresent: "Có mặt",
	colAbsent: "Vắng",
	colTotalHours: "Tổng giờ",
	colOvertime: "Tăng ca",
	colOtStatus: "Trạng thái OT",
	otOverLimit: "Vượt giới hạn tăng ca!",
	otWarning: "Vượt mốc Cảnh báo",
	otApproaching: "Tiệm cận Cảnh báo",
	otSafe: "An toàn",
	noTimesheetData: "Không có dữ liệu chấm công phát sinh trong tháng này.",
	recentTransactions: "Phát Sinh Giao Dịch Gần Đây",
	recentTransactionsDesc: "Lịch sử thu chi tài chính thời gian thực mới nhất",
	btnCashbook: "Sổ quỹ",
	unclassified: "Không phân loại",
	noTransactions: "Chưa có giao dịch tài chính phát sinh.",
	msgConnectError: "Lỗi kết nối",
	msgSyncError: "Không thể đồng bộ dữ liệu Bảng điều khiển."
};
var transaction = {
	title: "Dòng Tiền & Chi Phí",
	desc: "Quản lý các khoản Thu/Chi thực tế và giám sát tiến trình đính kèm chứng từ (Hóa đơn/Ủy nhiệm chi).",
	addBtn: "Thêm giao dịch mới",
	totalRevenue: "Doanh thu thực nhận",
	totalExpense: "Chi phí thực chi",
	netBalance: "Dòng tiền thuần (Net Cash)",
	complianceRate: "Tỷ lệ đủ chứng từ chi",
	tabAll: "Tất cả thu chi",
	tabExpense: "Khoản chi thực tế",
	tabRevenue: "Dòng doanh thu",
	searchPlaceholder: "Mã giao dịch, danh mục...",
	type: "Loại giao dịch",
	status: "Trạng thái",
	compliance: "Hồ sơ pháp lý",
	refresh: "Làm mới",
	allTypes: "Tất cả loại",
	expense: "Khoản Chi (EXPENSE)",
	revenue: "Khoản Thu (REVENUE)",
	allStatus: "Tất cả trạng thái",
	paid: "Đã thanh toán",
	pending: "Chờ xử lý",
	cancelled: "Đã hủy",
	allDocs: "Tất cả tài liệu",
	hasDocs: "Có đủ chứng từ",
	missingDocs: "Thiếu chứng từ chi",
	dateCol: "Ngày",
	codeCol: "Mã GD",
	typeCol: "Loại",
	categoryCol: "Danh mục",
	amountCol: "Số tiền (Tổng)",
	taxCol: "Thông tin Thuế / Mã hóa đơn",
	paymentCol: "Thanh toán",
	documentCol: "Tài liệu pháp lý",
	actionCol: "Thao tác",
	loading: "Đang tải dữ liệu dòng tiền...",
	noData: "Không tìm thấy giao dịch nào phù hợp.",
	revenueShort: "Thu",
	expenseShort: "Chi",
	original: "Gốc",
	files: "tệp",
	missingDocsAlert: "THIẾU CHỨNG TỪ",
	editTooltip: "Sửa giao dịch",
	deleteTooltip: "Xóa giao dịch",
	dialogDeleteTitle: "Xác nhận xóa giao dịch",
	dialogDeleteConfirm: "Xóa giao dịch tài chính?",
	dialogDeleteDesc: "Bạn chắc chắn muốn xóa giao dịch {code} hạng mục {category}? Hành động này sẽ cập nhật lại dòng tiền và không thể khôi phục.",
	btnCancel: "Hủy",
	btnConfirmDelete: "Xác nhận xóa",
	dialogDocTitle: "Tài liệu chứng từ giao dịch — {code}",
	errorLoad: "Lỗi tải dòng tiền",
	errorLoadDesc: "Không thể tải danh sách giao dịch",
	msgDeleteSuccess: "Xóa giao dịch thành công",
	msgDeleteSuccessDesc: "Khoản thu chi đã được giải tỏa.",
	msgDeleteFailed: "Thao tác thất bại",
	msgDeleteFailedDesc: "Không thể xóa giao dịch.",
	statusPaid: "Đã Chi/Đủ",
	statusPending: "Chờ thanh toán",
	statusCancelled: "Đã hủy",
	noTax: "Không thuế (0%)",
	bankTransfer: "Chuyển khoản",
	cash: "Tiền mặt",
	creditCard: "Thẻ tín dụng",
	subtitle: "Kế toán & Dòng tiền",
	createTitle: "Ghi Nhận Giao Dịch Mới",
	editTitle: "Chỉnh Sửa Giao Dịch",
	infoSection: "Thông tin giao dịch & Thanh toán",
	code: "Mã giao dịch",
	amount: "Tổng số tiền (Đã gồm thuế)",
	date: "Ngày giao dịch",
	codeAutoGenerate: "Tự động phát sinh mã",
	category: "Hạng mục",
	paymentMethod: "Phương thức thanh toán",
	amountSection: "Giá trị giao dịch & Tính toán thuế",
	netAmount: "Giá trị gốc (Trước thuế)",
	taxAmount: "Tiền thuế phát sinh",
	withholdingTax: "Thuế khấu trừ tại nguồn (nếu có)",
	invoiceNumber: "Mã số thuế / Số hóa đơn",
	invoiceError: "Mã Qualified Invoice của Nhật phải bắt đầu bằng chữ T và gồm đúng 13 chữ số.",
	descriptionSection: "Nội dung / Diễn giải chi tiết",
	descriptionPlaceholder: "Nhập diễn giải chi tiết cho giao dịch (mục đích, nhà cung cấp, nội dung)...",
	saveTransaction: "Ghi nhận giao dịch",
	attachSection: "Hóa đơn & Chứng từ đính kèm",
	attachRequired: "Bắt buộc",
	attachDesc: "Vui lòng đính kèm hóa đơn điện tử, ủy nhiệm chi hoặc chứng từ hợp lệ.",
	uploadFile: "Chọn tệp hoặc kéo thả vào đây",
	uploadFormats: "Hỗ trợ định dạng: PDF, DOC, DOCX, XLS, XLSX, PNG, JPG, JPEG (tối đa 10MB)",
	taxRate: "Thuế suất áp dụng",
	valMissInfo: "Thiếu thông tin",
	valMissInfoDesc: "Vui lòng điền đầy đủ các trường bắt buộc.",
	valMissDocs: "Thiếu chứng từ pháp lý",
	valMissDocsDesc: "Doanh nghiệp bắt buộc phải đính kèm chứng từ (Hóa đơn/UNC) cho các khoản chi phí để đảm bảo tuân thủ pháp luật thuế.",
	valInvalidInvoice: "Lỗi định dạng",
	valInvalidInvoiceDesc: "Mã Qualified Invoice của Nhật phải bắt đầu bằng chữ T và gồm đúng 13 chữ số.",
	msgSaveSuccess: "Đã lưu giao dịch",
	msgSaveSuccessDesc: "Giao dịch và chứng từ đính kèm đã được cập nhật.",
	msgSaveSuccessShort: "Giao dịch đã được ghi nhận.",
	msgSaveFailed: "Lưu giao dịch thất bại",
	msgSaveFailedDesc: "Lỗi ghi nhận",
	catSalary: "Tiền lương nhân sự (Salary)",
	catOfficeRent: "Thuê văn phòng (Office Rent)",
	catUtilities: "Điện nước & Internet (Utilities)",
	catOutsourcing: "Chi phí thầu phụ (Outsourcing Cost)",
	catSoftware: "Công cụ & Phần mềm (Software & SaaS)",
	catTravel: "Chi phí đi lại (Travel Expense)",
	catMarketing: "Quảng cáo & Marketing (Marketing & Ads)",
	catClientRevenue: "Doanh thu khách hàng (Client Revenue)",
	catConsulting: "Phí tư vấn dịch vụ (Consulting Fee)",
	catOthers: "Chi phí khác (Others)",
	selectType: "Chọn phân loại",
	selectCategory: "Chọn hạng mục",
	selectMethod: "Chọn phương thức",
	selectStatus: "Chọn trạng thái",
	selectTax: "Chọn loại thuế suất",
	categorySalary: "Tiền lương nhân sự",
	categoryRent: "Thuê văn phòng",
	categoryUtilities: "Điện nước & Internet",
	categoryOutsourcing: "Chi phí thầu phụ",
	categorySoftware: "Công cụ & Phần mềm",
	categoryTravel: "Chi phí đi lại",
	categoryMarketing: "Quảng cáo & Marketing",
	categoryRevenue: "Doanh thu khách hàng",
	categoryConsulting: "Phí tư vấn dịch vụ",
	categoryOthers: "Chi phí khác",
	edmSection: "Bản quét / Tệp đính kèm (EDM)",
	edmDesc: "Đính kèm hóa đơn điện tử, chứng từ thanh toán hợp lệ",
	edmRequired: "Yêu cầu chứng từ",
	loadError: "Lỗi tải thông tin giao dịch",
	loadingData: "Đang tải thông tin giao dịch...",
	methodBankTransfer: "Chuyển khoản ngân hàng",
	methodCash: "Tiền mặt",
	methodCreditCard: "Thẻ tín dụng",
	missingEvidence: "Thiếu chứng từ pháp lý",
	missingEvidenceDesc: "Giao dịch chi phí bắt buộc phải có hóa đơn hoặc chứng từ đính kèm.",
	saveChanges: "Lưu thay đổi",
	saveError: "Lỗi khi lưu giao dịch",
	taxCt10Jp: "Tiêu dùng Nhật Bản 10%",
	taxCt8Jp: "Tiêu dùng Nhật Bản 8%",
	taxNone: "Không áp dụng thuế (0%)",
	taxVat10Vn: "VAT Việt Nam 10%",
	taxVat8Vn: "VAT Việt Nam 8%",
	typeExpense: "Khoản Chi (EXPENSE)",
	typeRevenue: "Khoản Thu (REVENUE)",
	updateSubtitle: "Cập nhật chi tiết giao dịch",
	updateSuccess: "Cập nhật giao dịch thành công",
	updateSuccessDesc: "Thông tin giao dịch và chứng từ đã được lưu trữ."
};
var pagination = {
	total: "Tổng cộng: {total} mục",
	layout: "Bố cục trang"
};
var common = {
	cancel: "Hủy",
	"delete": "Xóa"
};
var themeCustomizer = {
	title: "Cấu hình Sidebar",
	subtitle: "Theme & Style Customizer",
	mode: "Kiểu hiển thị (Mode)",
	modeColor: "Màu sắc",
	modeImage: "Hình nền",
	modeBoth: "Hỗn hợp",
	colorLabel: "Màu sắc Sidebar (6 màu)",
	colorNameDefault: "Mặc định",
	colorNameGoc: "Gốc",
	imageLabel: "Hình nền nghệ thuật (6 ảnh)",
	imageNone: "Không có",
	opacityLabel: "Độ trong suốt (Opacity)",
	opacitySub: "Áp dụng cho màu/ảnh nền của sidebar",
	opacityStart: "T.Suốt",
	opacityEnd: "Đậm",
	btnReset: "Mặc định gốc",
	btnDone: "Hoàn tất",
	systemPrimaryLabel: "Màu chủ đạo hệ thống",
	systemPrimarySub: "Thay đổi tông màu thương hiệu PrimeVue toàn hệ thống",
	colorEmerald: "Xanh lục bảo",
	colorBlue: "Xanh hoàng gia",
	colorPurple: "Tím thạch anh",
	colorOrange: "Cam ấm áp",
	colorRed: "Đỏ nhung",
	colorTeal: "Xanh ngọc bích",
	fontLabel: "Phông chữ hệ thống",
	fontSub: "Thay đổi kiểu chữ (Font Family) toàn bộ ứng dụng",
	fontDefault: "Outfit (Gốc)",
	fontInter: "Inter (Hiện đại)",
	fontPoppins: "Poppins (Mềm mại)",
	fontMontserrat: "Montserrat (Hình học)",
	fontPlayfair: "Playfair (Cổ điển)",
	fontMono: "Roboto Mono (Mã code)"
};
const locale_vi_46json_24468de9 = {
	btn: btn,
	text: text,
	msgCommon: msgCommon,
	radioButton: radioButton,
	deleteModal: deleteModal,
	confirmModal: confirmModal,
	tableBox: tableBox,
	uploadAvatar: uploadAvatar,
	uploadFile: uploadFile,
	paginator: paginator,
	"token.invalid": "Token đã hết hạn, vui lòng đăng nhập lại",
	"email.exists": "Địa chỉ email đã nhập không tồn tại.",
	"email.unique": "Địa chỉ email đã nhập đã tồn tại.",
	"password.min": "Vui lòng nhập mật khẩu từ 8-20 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt.",
	"password.regex": "Vui lòng nhập mật khẩu từ 8-20 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt.",
	"common.in_use": "Dữ liệu đang được sử dụng.",
	"system.error": "Lỗi hệ thống",
	"common.system_error": "Lỗi hệ thống",
	"errors.invalid_reset_password_token": "Mã OTP không hợp lệ. Vui lòng kiểm tra lại.",
	"common.exists": "Dữ liệu đã tồn tại",
	"common.update.fail": "Cập nhật dữ liệu thất bại",
	"common.not_found": "Không tìm thấy dữ liệu",
	"common.noOptions": "Không có tùy chọn",
	"code.unique": "Mã này đã tồn tại trong hệ thống.",
	"code.duplicate": "Mã này bị trùng lặp.",
	"start_date.invalid": "Chỉ định ngày bắt đầu không hợp lệ.",
	"end_date.after": "Chỉ định ngày bắt đầu không hợp lệ.",
	"product_manual_code.unique": "Mã sản phẩm này đã được đăng ký trong hệ thống.",
	"common.max_rate_limit": "Vượt quá giới hạn gọi API trong 1 phút.",
	"email.not_found": "Đã chọn người phụ trách không có email, vui lòng kiểm tra lại.",
	auth: auth,
	notFound: notFound,
	router: router,
	menu: menu,
	department: department,
	user: user,
	position: position,
	company: company,
	userMaster: userMaster,
	document: document,
	employee: employee,
	gender: gender,
	contract: contract,
	timesheet: timesheet,
	leaveRequest: leaveRequest,
	compliance: compliance,
	dashboard: dashboard,
	transaction: transaction,
	pagination: pagination,
	common: common,
	themeCustomizer: themeCustomizer
};

// @ts-nocheck
const localeCodes =  [
  "en",
  "ja",
  "vi"
];
const localeLoaders = {
  en: [
    {
      key: "locale_en_46json_2045c38c",
      load: () => Promise.resolve(locale_en_46json_2045c38c),
      cache: true
    }
  ],
  ja: [
    {
      key: "locale_ja_46json_1fe0de68",
      load: () => Promise.resolve(locale_ja_46json_1fe0de68),
      cache: true
    }
  ],
  vi: [
    {
      key: "locale_vi_46json_24468de9",
      load: () => Promise.resolve(locale_vi_46json_24468de9),
      cache: true
    }
  ]
};
const vueI18nConfigs = [];
const normalizedLocales = [
  {
    code: "en",
    name: "English",
    language: undefined
  },
  {
    code: "ja",
    name: "Japanese",
    language: undefined
  },
  {
    code: "vi",
    name: "Vietnamese",
    language: undefined
  }
];

const setupVueI18nOptions = async (defaultLocale) => {
  const options = await loadVueI18nOptions(vueI18nConfigs);
  options.locale = defaultLocale || options.locale || "en-US";
  options.defaultLocale = defaultLocale;
  options.fallbackLocale ??= false;
  options.messages ??= {};
  for (const locale of localeCodes) {
    options.messages[locale] ??= {};
  }
  return options;
};

function defineNitroPlugin$1(def) {
  return def;
}

function defineRenderHandler(render) {
  const runtimeConfig = useRuntimeConfig();
  return eventHandler(async (event) => {
    const nitroApp = useNitroApp();
    const ctx = { event, render, response: void 0 };
    await nitroApp.hooks.callHook("render:before", ctx);
    if (!ctx.response) {
      if (event.path === `${runtimeConfig.app.baseURL}favicon.ico`) {
        setResponseHeader(event, "Content-Type", "image/x-icon");
        return send(
          event,
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        );
      }
      ctx.response = await ctx.render(event);
      if (!ctx.response) {
        const _currentStatus = getResponseStatus(event);
        setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
        return send(
          event,
          "No response returned from render handler: " + event.path
        );
      }
    }
    await nitroApp.hooks.callHook("render:response", ctx.response, ctx);
    if (ctx.response.headers) {
      setResponseHeaders(event, ctx.response.headers);
    }
    if (ctx.response.statusCode || ctx.response.statusMessage) {
      setResponseStatus(
        event,
        ctx.response.statusCode,
        ctx.response.statusMessage
      );
    }
    return ctx.response.body;
  });
}

const scheduledTasks = false;

const tasks = {
  
};

const __runningTasks__ = {};
async function runTask(name, {
  payload = {},
  context = {}
} = {}) {
  if (__runningTasks__[name]) {
    return __runningTasks__[name];
  }
  if (!(name in tasks)) {
    throw createError({
      message: `Task \`${name}\` is not available!`,
      statusCode: 404
    });
  }
  if (!tasks[name].resolve) {
    throw createError({
      message: `Task \`${name}\` is not implemented!`,
      statusCode: 501
    });
  }
  const handler = await tasks[name].resolve();
  const taskEvent = { name, payload, context };
  __runningTasks__[name] = handler.run(taskEvent);
  try {
    const res = await __runningTasks__[name];
    return res;
  } finally {
    delete __runningTasks__[name];
  }
}

function buildAssetsDir() {
	// TODO: support passing event to `useRuntimeConfig`
	return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
	return joinRelativeURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
	// TODO: support passing event to `useRuntimeConfig`
	const app = useRuntimeConfig().app;
	const publicBase = app.cdnURL || app.baseURL;
	return path.length ? joinRelativeURL(publicBase, ...path) : publicBase;
}

function parseAcceptLanguage(value) {
  return value.split(",").map((tag) => tag.split(";")[0]).filter(
    (tag) => !(tag === "*" || tag === "")
  );
}
function createPathIndexLanguageParser(index = 0) {
  return (path) => {
    const rawPath = typeof path === "string" ? path : path.pathname;
    const normalizedPath = rawPath.split("?")[0];
    const parts = normalizedPath.split("/");
    if (parts[0] === "") {
      parts.shift();
    }
    return parts.length > index ? parts[index] || "" : "";
  };
}

function useRuntimeI18n(nuxtApp, event) {
  {
    return useRuntimeConfig(event).public.i18n;
  }
}
function useI18nDetection(nuxtApp) {
  const detectBrowserLanguage = useRuntimeI18n().detectBrowserLanguage;
  const detect = detectBrowserLanguage || {};
  return {
    ...detect,
    enabled: !!detectBrowserLanguage,
    cookieKey: detect.cookieKey || "i18n_redirected"
  };
}
function resolveRootRedirect(config) {
  if (!config) {
    return void 0;
  }
  return {
    path: "/" + (isString(config) ? config : config.path).replace(/^\//, ""),
    code: !isString(config) && config.statusCode || 302
  };
}
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}

function createLocaleConfigs(fallbackLocale) {
  const localeConfigs = {};
  for (const locale of localeCodes) {
    const fallbacks = getFallbackLocaleCodes(fallbackLocale, [locale]);
    const cacheable = isLocaleWithFallbacksCacheable(locale, fallbacks);
    localeConfigs[locale] = { fallbacks, cacheable };
  }
  return localeConfigs;
}
function getFallbackLocaleCodes(fallback, locales) {
  if (fallback === false) {
    return [];
  }
  if (isArray(fallback)) {
    return fallback;
  }
  let fallbackLocales = [];
  if (isString(fallback)) {
    if (locales.every((locale) => locale !== fallback)) {
      fallbackLocales.push(fallback);
    }
    return fallbackLocales;
  }
  const targets = [...locales, "default"];
  for (const locale of targets) {
    if (locale in fallback == false) {
      continue;
    }
    fallbackLocales = [...fallbackLocales, ...fallback[locale].filter(Boolean)];
  }
  return fallbackLocales;
}
function isLocaleCacheable(locale) {
  return localeLoaders[locale] != null && localeLoaders[locale].every((loader) => loader.cache !== false);
}
function isLocaleWithFallbacksCacheable(locale, fallbackLocales) {
  return isLocaleCacheable(locale) && fallbackLocales.every((fallbackLocale) => isLocaleCacheable(fallbackLocale));
}
function getDefaultLocaleForDomain(host) {
  return normalizedLocales.find((l) => !!l.defaultForDomains?.includes(host))?.code;
}
const isSupportedLocale = (locale) => localeCodes.includes(locale || "");

function useI18nContext(event) {
  if (event.context.nuxtI18n == null) {
    throw new Error("Nuxt I18n server context has not been set up yet.");
  }
  return event.context.nuxtI18n;
}
function tryUseI18nContext(event) {
  return event.context.nuxtI18n;
}
const getHost = (event) => getRequestURL(event, { xForwardedHost: true }).host;
async function initializeI18nContext(event) {
  const runtimeI18n = useRuntimeI18n(void 0, event);
  const defaultLocale = runtimeI18n.defaultLocale || "";
  const options = await setupVueI18nOptions(getDefaultLocaleForDomain(getHost(event)) || defaultLocale);
  const localeConfigs = createLocaleConfigs(options.fallbackLocale);
  const ctx = createI18nContext();
  ctx.vueI18nOptions = options;
  ctx.localeConfigs = localeConfigs;
  event.context.nuxtI18n = ctx;
  return ctx;
}
function createI18nContext() {
  return {
    messages: {},
    slp: {},
    localeConfigs: {},
    trackMap: {},
    vueI18nOptions: void 0,
    trackKey(key, locale) {
      this.trackMap[locale] ??= /* @__PURE__ */ new Set();
      this.trackMap[locale].add(key);
    }
  };
}

function matchBrowserLocale(locales, browserLocales) {
  const matchedLocales = [];
  for (const [index, browserCode] of browserLocales.entries()) {
    const matchedLocale = locales.find((l) => l.language?.toLowerCase() === browserCode.toLowerCase());
    if (matchedLocale) {
      matchedLocales.push({ code: matchedLocale.code, score: 1 - index / browserLocales.length });
      break;
    }
  }
  for (const [index, browserCode] of browserLocales.entries()) {
    const languageCode = browserCode.split("-")[0].toLowerCase();
    const matchedLocale = locales.find((l) => l.language?.split("-")[0].toLowerCase() === languageCode);
    if (matchedLocale) {
      matchedLocales.push({ code: matchedLocale.code, score: 0.999 - index / browserLocales.length });
      break;
    }
  }
  return matchedLocales;
}
function compareBrowserLocale(a, b) {
  if (a.score === b.score) {
    return b.code.length - a.code.length;
  }
  return b.score - a.score;
}
function findBrowserLocale(locales, browserLocales) {
  const matchedLocales = matchBrowserLocale(
    locales.map((l) => ({ code: l.code, language: l.language || l.code })),
    browserLocales
  );
  return matchedLocales.sort(compareBrowserLocale).at(0)?.code ?? "";
}

const appHead = {"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"Hệ thống Kiểm soát Tuân thủ và Quản lý Hồ sơ Pháp lý Doanh nghiệp (SaaS Multi-company)"},{"name":"format-detection","content":"telephone=no"},{"name":"robots","content":"index, follow"}],"link":[{"rel":"icon","type":"image/png","href":"/favicon.png"},{"rel":"preconnect","href":"https://fonts.googleapis.com"},{"rel":"preconnect","href":"https://fonts.gstatic.com","crossorigin":""},{"rel":"stylesheet","href":"https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap"}],"style":[],"script":[],"noscript":[],"title":"Compliance System - Hệ thống Kiểm soát Tuân thủ","htmlAttrs":{"lang":"ja"}};

const appRootTag = "div";

const appRootAttrs = {"id":"__nuxt"};

const appTeleportTag = "div";

const appTeleportAttrs = {"id":"teleports"};

const appSpaLoaderTag = "div";

const appSpaLoaderAttrs = {"id":"__nuxt-loader"};

const appId = "nuxt-app";

const separator = "___";
const pathLanguageParser = createPathIndexLanguageParser(0);
const getLocaleFromRoutePath = (path) => pathLanguageParser(path);
const getLocaleFromRouteName = (name) => name.split(separator).at(1) ?? "";
function normalizeInput(input) {
  return typeof input !== "object" ? String(input) : String(input?.name || input?.path || "");
}
function getLocaleFromRoute(route) {
  const input = normalizeInput(route);
  return input[0] === "/" ? getLocaleFromRoutePath(input) : getLocaleFromRouteName(input);
}

function matchDomainLocale(locales, host, pathLocale) {
  const normalizeDomain = (domain = "") => domain.replace(/https?:\/\//, "");
  const matches = locales.filter(
    (locale) => normalizeDomain(locale.domain) === host || toArray(locale.domains).includes(host)
  );
  if (matches.length <= 1) {
    return matches[0]?.code;
  }
  return (
    // match by current path locale
    matches.find((l) => l.code === pathLocale)?.code || matches.find((l) => l.defaultForDomains?.includes(host) ?? l.domainDefault)?.code
  );
}

const getCookieLocale = (event, cookieName) => (getCookie(event, cookieName)) || void 0;
const getRouteLocale = (event, route) => getLocaleFromRoute(route);
const getHeaderLocale = (event) => findBrowserLocale(normalizedLocales, parseAcceptLanguage(getRequestHeader(event, "accept-language") || ""));
const getHostLocale = (event, path, domainLocales) => {
  const host = getRequestURL(event, { xForwardedHost: true }).host;
  const locales = normalizedLocales.map((l) => ({
    ...l,
    domain: domainLocales[l.code]?.domain ?? l.domain
  }));
  return matchDomainLocale(locales, host, getLocaleFromRoutePath(path));
};
const useDetectors = (event, config, nuxtApp) => {
  if (!event) {
    throw new Error("H3Event is required for server-side locale detection");
  }
  const runtimeI18n = useRuntimeI18n();
  return {
    cookie: () => getCookieLocale(event, config.cookieKey),
    header: () => getHeaderLocale(event) ,
    navigator: () => void 0,
    host: (path) => getHostLocale(event, path, runtimeI18n.domainLocales),
    route: (path) => getRouteLocale(event, path)
  };
};

// Generated by @nuxtjs/i18n
const pathToI18nConfig = {};
const i18nPathToPath = {};

const matcher = createRouterMatcher([], {});
for (const path of Object.keys(i18nPathToPath)) {
  matcher.addRoute({ path, component: () => "", meta: {} });
}
const getI18nPathToI18nPath = (path, locale) => {
  if (!path || !locale) {
    return;
  }
  const plainPath = i18nPathToPath[path];
  const i18nConfig = pathToI18nConfig[plainPath];
  if (i18nConfig && i18nConfig[locale]) {
    return i18nConfig[locale] === true ? plainPath : i18nConfig[locale];
  }
};
function isExistingNuxtRoute(path) {
  if (path === "") {
    return;
  }
  if (path.endsWith("/__nuxt_error")) {
    return;
  }
  const resolvedMatch = matcher.resolve({ path }, { path: "/", name: "", matched: [], params: {}, meta: {} });
  return resolvedMatch.matched.length > 0 ? resolvedMatch : void 0;
}
function matchLocalized(path, locale, defaultLocale) {
  if (path === "") {
    return;
  }
  const parsed = parsePath(path);
  const resolvedMatch = matcher.resolve(
    { path: parsed.pathname || "/" },
    { path: "/", name: "", matched: [], params: {}, meta: {} }
  );
  if (resolvedMatch.matched.length > 0) {
    const alternate = getI18nPathToI18nPath(resolvedMatch.matched[0].path, locale);
    const match = matcher.resolve(
      { params: resolvedMatch.params },
      { path: alternate || "/", name: "", matched: [], params: {}, meta: {} }
    );
    return withLeadingSlash(joinURL("", match.path));
  }
}

function* detect(detectors, detection, path) {
  if (detection.enabled) {
    yield { locale: detectors.cookie(), source: "cookie" };
    yield { locale: detectors.header(), source: "header" };
  }
  yield { locale: detection.fallbackLocale, source: "fallback" };
}
function createRedirectResponse(event, dest, code) {
  event.node.res.setHeader("location", dest);
  event.node.res.statusCode = sanitizeStatusCode(code, event.node.res.statusCode);
  return {
    headers: event.node.res.getHeaders(),
    statusCode: event.node.res.statusCode,
    body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${dest.replace(/"/g, "%22")}"></head></html>`
  };
}
const _GGaIECDdrhncnGS94R2Szg5vZ47o1W8dfypqFUvSxKU = defineNitroPlugin$1(async (nitro) => {
  const runtimeI18n = useRuntimeI18n();
  const rootRedirect = resolveRootRedirect(runtimeI18n.rootRedirect);
  runtimeI18n.defaultLocale || "";
  try {
    const cacheStorage = useStorage("cache");
    const cachedKeys = await cacheStorage.getKeys("nitro:handlers:i18n");
    await Promise.all(cachedKeys.map((key) => cacheStorage.removeItem(key)));
  } catch {
  }
  const detection = useI18nDetection();
  const cookieOptions = {
    path: "/",
    domain: detection.cookieDomain || void 0,
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
    secure: detection.cookieSecure
  };
  const createBaseUrlGetter = () => {
    isFunction(runtimeI18n.baseUrl) ? "" : runtimeI18n.baseUrl || "";
    if (isFunction(runtimeI18n.baseUrl)) {
      console.warn("[nuxt-i18n] Configuring baseUrl as a function is deprecated and will be removed in v11.");
      return () => "";
    }
    return (event, defaultLocale) => {
      return "";
    };
  };
  function resolveRedirectPath(event, path, pathLocale, defaultLocale, detector) {
    let locale = "";
    for (const detected of detect(detector, detection, event.path)) {
      if (detected.locale && isSupportedLocale(detected.locale)) {
        locale = detected.locale;
        break;
      }
    }
    locale ||= defaultLocale;
    function getLocalizedMatch(locale2) {
      const res = matchLocalized(path || "/", locale2);
      if (res && res !== event.path) {
        return res;
      }
    }
    let resolvedPath = void 0;
    let redirectCode = 302;
    const requestURL = getRequestURL(event);
    if (rootRedirect && requestURL.pathname === "/") {
      locale = detection.enabled && locale || defaultLocale;
      resolvedPath = isSupportedLocale(detector.route(rootRedirect.path)) && rootRedirect.path || matchLocalized(rootRedirect.path, locale);
      redirectCode = rootRedirect.code;
    } else if (runtimeI18n.redirectStatusCode) {
      redirectCode = runtimeI18n.redirectStatusCode;
    }
    switch (detection.redirectOn) {
      case "root":
        if (requestURL.pathname !== "/") {
          break;
        }
      // fallthrough (root has no prefix)
      case "no prefix":
        if (pathLocale) {
          break;
        }
      // fallthrough to resolve
      case "all":
        resolvedPath ??= getLocalizedMatch(locale);
        break;
    }
    if (requestURL.pathname === "/" && "no_prefix" === "prefix") ;
    return { path: resolvedPath, code: redirectCode, locale };
  }
  const baseUrlGetter = createBaseUrlGetter();
  nitro.hooks.hook("request", async (event) => {
    await initializeI18nContext(event);
  });
  nitro.hooks.hook("render:before", async (context) => {
    const { event } = context;
    const ctx = useI18nContext(event);
    const url = getRequestURL(event);
    const detector = useDetectors(event, detection);
    const localeSegment = detector.route(event.path);
    const pathLocale = isSupportedLocale(localeSegment) && localeSegment || void 0;
    const path = (pathLocale && url.pathname.slice(pathLocale.length + 1)) ?? url.pathname;
    if (!url.pathname.includes("/_i18n/xHyIz6rr") && !isExistingNuxtRoute(path)) {
      return;
    }
    const resolved = resolveRedirectPath(event, path, pathLocale, ctx.vueI18nOptions.defaultLocale, detector);
    if (resolved.path && resolved.path !== url.pathname) {
      ctx.detectLocale = resolved.locale;
      detection.useCookie && setCookie(event, detection.cookieKey, resolved.locale, cookieOptions);
      context.response = createRedirectResponse(
        event,
        joinURL(baseUrlGetter(event, ctx.vueI18nOptions.defaultLocale), resolved.path + url.search),
        resolved.code
      );
      return;
    }
  });
  nitro.hooks.hook("render:html", (htmlContext, { event }) => {
    tryUseI18nContext(event);
  });
});

const rootDir = "/home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe";

const devReducers = {
	VNode: (data) => isVNode(data) ? {
		type: data.type,
		props: data.props
	} : undefined,
	URL: (data) => data instanceof URL ? data.toString() : undefined
};
const asyncContext = getContext("nuxt-dev", {
	asyncContext: true,
	AsyncLocalStorage
});
const _UCHc4Y8KR1CEklEytMbyArWR_CXdXTHmISqwcGu04oM = (nitroApp) => {
	const handler = nitroApp.h3App.handler;
	nitroApp.h3App.handler = (event) => {
		return asyncContext.callAsync({
			logs: [],
			event
		}, () => handler(event));
	};
	onConsoleLog((_log) => {
		const ctx = asyncContext.tryUse();
		if (!ctx) {
			return;
		}
		const rawStack = captureRawStackTrace();
		if (!rawStack || rawStack.includes("runtime/vite-node.mjs")) {
			return;
		}
		const trace = [];
		let filename = "";
		for (const entry of parseRawStackTrace(rawStack)) {
			if (entry.source === globalThis._importMeta_.url) {
				continue;
			}
			if (EXCLUDE_TRACE_RE.test(entry.source)) {
				continue;
			}
			filename ||= entry.source.replace(withTrailingSlash(rootDir), "");
			trace.push({
				...entry,
				source: entry.source.startsWith("file://") ? entry.source.replace("file://", "") : entry.source
			});
		}
		const log = {
			..._log,
			filename,
			stack: trace
		};
		// retain log to be include in the next render
		ctx.logs.push(log);
	});
	nitroApp.hooks.hook("afterResponse", () => {
		const ctx = asyncContext.tryUse();
		if (!ctx) {
			return;
		}
		return nitroApp.hooks.callHook("dev:ssr-logs", {
			logs: ctx.logs,
			path: ctx.event.path
		});
	});
	// Pass any logs to the client
	nitroApp.hooks.hook("render:html", (htmlContext) => {
		const ctx = asyncContext.tryUse();
		if (!ctx) {
			return;
		}
		try {
			const reducers = Object.assign(Object.create(null), devReducers, ctx.event.context["~payloadReducers"]);
			htmlContext.bodyAppend.unshift(`<script type="application/json" data-nuxt-logs="${appId}">${stringify(ctx.logs, reducers)}<\/script>`);
		} catch (e) {
			const shortError = e instanceof Error && "toString" in e ? ` Received \`${e.toString()}\`.` : "";
			console.warn(`[nuxt] Failed to stringify dev server logs.${shortError} You can define your own reducer/reviver for rich types following the instructions in https://nuxt.com/docs/4.x/api/composables/use-nuxt-app#payload.`);
		}
	});
};
const EXCLUDE_TRACE_RE = /\/node_modules\/(?:.*\/)?(?:nuxt|nuxt-nightly|nuxt-edge|nuxt3|consola|@vue)\/|core\/runtime\/nitro/;
function onConsoleLog(callback) {
	consola$1.addReporter({ log(logObj) {
		callback(logObj);
	} });
	consola$1.wrapConsole();
}

var inlineStyles$i = {
  root: {
    position: 'relative'
  }
};
var classes$1H = {
  root: function root(_ref) {
    var instance = _ref.instance;
    return ['p-autocomplete p-component p-inputwrapper', {
      'p-invalid': instance.$invalid,
      'p-focus': instance.focused,
      'p-inputwrapper-filled': instance.$filled || isNotEmpty(instance.inputValue),
      'p-inputwrapper-focus': instance.focused,
      'p-autocomplete-open': instance.overlayVisible,
      'p-autocomplete-fluid': instance.$fluid,
      'p-autocomplete-clearable': instance.isClearIconVisible
    }];
  },
  pcInputText: 'p-autocomplete-input',
  inputMultiple: function inputMultiple(_ref2) {
    var instance = _ref2.instance,
      props = _ref2.props;
    return ['p-autocomplete-input-multiple', {
      'p-variant-filled': instance.$variant === 'filled',
      'p-disabled': props.disabled
    }];
  },
  clearIcon: 'p-autocomplete-clear-icon',
  chipItem: function chipItem(_ref3) {
    var instance = _ref3.instance,
      i = _ref3.i;
    return ['p-autocomplete-chip-item', {
      'p-focus': instance.focusedMultipleOptionIndex === i
    }];
  },
  pcChip: 'p-autocomplete-chip',
  chipIcon: 'p-autocomplete-chip-icon',
  inputChip: 'p-autocomplete-input-chip',
  loader: 'p-autocomplete-loader',
  dropdown: 'p-autocomplete-dropdown',
  overlay: 'p-autocomplete-overlay p-component',
  listContainer: 'p-autocomplete-list-container',
  list: 'p-autocomplete-list',
  optionGroup: 'p-autocomplete-option-group',
  option: function option(_ref4) {
    var instance = _ref4.instance,
      _option = _ref4.option,
      i = _ref4.i,
      getItemOptions = _ref4.getItemOptions;
    return ['p-autocomplete-option', {
      'p-autocomplete-option-selected': instance.isSelected(_option),
      'p-focus': instance.focusedOptionIndex === instance.getOptionIndex(i, getItemOptions),
      'p-disabled': instance.isOptionDisabled(_option)
    }];
  },
  emptyMessage: 'p-autocomplete-empty-message'
};
var AutoCompleteStyle = BaseStyle.extend({
  name: 'autocomplete',
  style: style,
  classes: classes$1H,
  inlineStyles: inlineStyles$i
});

var CalendarStyle = BaseStyle.extend({
  name: 'calendar'
});

var inlineStyles$h = {
  root: function root(_ref) {
    var props = _ref.props;
    return {
      position: props.appendTo === 'self' ? 'relative' : undefined
    };
  }
};
var classes$1G = {
  root: function root(_ref2) {
    var instance = _ref2.instance,
      props = _ref2.props;
    return ['p-cascadeselect p-component p-inputwrapper', {
      'p-cascadeselect-mobile': instance.queryMatches,
      'p-disabled': props.disabled,
      'p-invalid': instance.$invalid,
      'p-variant-filled': instance.$variant === 'filled',
      'p-focus': instance.focused,
      'p-inputwrapper-filled': instance.$filled,
      'p-inputwrapper-focus': instance.focused || instance.overlayVisible,
      'p-cascadeselect-open': instance.overlayVisible,
      'p-cascadeselect-fluid': instance.$fluid,
      'p-cascadeselect-sm p-inputfield-sm': props.size === 'small',
      'p-cascadeselect-lg p-inputfield-lg': props.size === 'large'
    }];
  },
  label: function label(_ref3) {
    var _instance$label;
    var instance = _ref3.instance,
      props = _ref3.props;
    return ['p-cascadeselect-label', {
      'p-placeholder': instance.label === props.placeholder,
      'p-cascadeselect-label-empty': !instance.$slots['value'] && (instance.label === 'p-emptylabel' || ((_instance$label = instance.label) === null || _instance$label === void 0 ? void 0 : _instance$label.length) === 0)
    }];
  },
  clearIcon: 'p-cascadeselect-clear-icon',
  dropdown: 'p-cascadeselect-dropdown',
  loadingIcon: 'p-cascadeselect-loading-icon',
  dropdownIcon: 'p-cascadeselect-dropdown-icon',
  overlay: function overlay(_ref4) {
    var instance = _ref4.instance;
    return ['p-cascadeselect-overlay p-component', {
      'p-cascadeselect-mobile-active': instance.queryMatches
    }];
  },
  listContainer: 'p-cascadeselect-list-container',
  list: 'p-cascadeselect-list',
  option: function option(_ref5) {
    var instance = _ref5.instance,
      processedOption = _ref5.processedOption;
    return ['p-cascadeselect-option', {
      'p-cascadeselect-option-active': instance.isOptionActive(processedOption),
      'p-cascadeselect-option-selected': instance.isOptionSelected(processedOption),
      'p-focus': instance.isOptionFocused(processedOption),
      'p-disabled': instance.isOptionDisabled(processedOption)
    }];
  },
  optionContent: 'p-cascadeselect-option-content',
  optionText: 'p-cascadeselect-option-text',
  groupIconContainer: 'p-cascadeselect-group-icon-container',
  groupIcon: 'p-cascadeselect-group-icon',
  optionList: 'p-cascadeselect-overlay p-cascadeselect-option-list'
};
var CascadeSelectStyle = BaseStyle.extend({
  name: 'cascadeselect',
  style: style$1,
  classes: classes$1G,
  inlineStyles: inlineStyles$h
});

var classes$1F = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-checkbox p-component', {
      'p-checkbox-checked': instance.checked,
      'p-disabled': props.disabled,
      'p-invalid': instance.$pcCheckboxGroup ? instance.$pcCheckboxGroup.$invalid : instance.$invalid,
      'p-variant-filled': instance.$variant === 'filled',
      'p-checkbox-sm p-inputfield-sm': props.size === 'small',
      'p-checkbox-lg p-inputfield-lg': props.size === 'large'
    }];
  },
  box: 'p-checkbox-box',
  input: 'p-checkbox-input',
  icon: 'p-checkbox-icon'
};
var CheckboxStyle = BaseStyle.extend({
  name: 'checkbox',
  style: style$2,
  classes: classes$1F
});

var classes$1E = {
  root: 'p-checkbox-group p-component'
};
var CheckboxGroupStyle = BaseStyle.extend({
  name: 'checkboxgroup',
  style: style$3,
  classes: classes$1E
});

var ChipsStyle = BaseStyle.extend({
  name: 'chips'
});

var classes$1D = {
  root: 'p-colorpicker p-component',
  preview: function preview(_ref) {
    var props = _ref.props;
    return ['p-colorpicker-preview', {
      'p-disabled': props.disabled
    }];
  },
  panel: function panel(_ref2) {
    var instance = _ref2.instance,
      props = _ref2.props;
    return ['p-colorpicker-panel', {
      'p-colorpicker-panel-inline': props.inline,
      'p-disabled': props.disabled,
      'p-invalid': instance.$invalid
    }];
  },
  colorSelector: 'p-colorpicker-color-selector',
  colorBackground: 'p-colorpicker-color-background',
  colorHandle: 'p-colorpicker-color-handle',
  hue: 'p-colorpicker-hue',
  hueHandle: 'p-colorpicker-hue-handle'
};
var ColorPickerStyle = BaseStyle.extend({
  name: 'colorpicker',
  style: style$4,
  classes: classes$1D
});

var inlineStyles$g = {
  root: function root(_ref) {
    var props = _ref.props;
    return {
      position: props.appendTo === 'self' || props.showClear ? 'relative' : undefined
    };
  }
};
var classes$1C = {
  root: function root(_ref2) {
    var instance = _ref2.instance,
      state = _ref2.state;
    return ['p-datepicker p-component p-inputwrapper', {
      'p-invalid': instance.$invalid,
      'p-inputwrapper-filled': instance.$filled,
      'p-inputwrapper-focus': state.focused || state.overlayVisible,
      'p-focus': state.focused || state.overlayVisible,
      'p-datepicker-fluid': instance.$fluid
    }];
  },
  pcInputText: 'p-datepicker-input',
  clearIcon: 'p-datepicker-clear-icon',
  dropdown: 'p-datepicker-dropdown',
  inputIconContainer: 'p-datepicker-input-icon-container',
  inputIcon: 'p-datepicker-input-icon',
  panel: function panel(_ref3) {
    var props = _ref3.props;
    return ['p-datepicker-panel p-component', {
      'p-datepicker-panel-inline': props.inline,
      'p-disabled': props.disabled,
      'p-datepicker-timeonly': props.timeOnly
    }];
  },
  calendarContainer: 'p-datepicker-calendar-container',
  calendar: 'p-datepicker-calendar',
  header: 'p-datepicker-header',
  pcPrevButton: 'p-datepicker-prev-button',
  title: 'p-datepicker-title',
  selectMonth: 'p-datepicker-select-month',
  selectYear: 'p-datepicker-select-year',
  decade: 'p-datepicker-decade',
  pcNextButton: 'p-datepicker-next-button',
  dayView: 'p-datepicker-day-view',
  weekHeader: 'p-datepicker-weekheader p-disabled',
  weekNumber: 'p-datepicker-weeknumber',
  weekLabelContainer: 'p-datepicker-weeklabel-container p-disabled',
  weekDayCell: 'p-datepicker-weekday-cell',
  weekDay: 'p-datepicker-weekday',
  dayCell: function dayCell(_ref4) {
    var date = _ref4.date;
    return ['p-datepicker-day-cell', {
      'p-datepicker-other-month': date.otherMonth,
      'p-datepicker-today': date.today
    }];
  },
  day: function day(_ref5) {
    var instance = _ref5.instance,
      props = _ref5.props,
      state = _ref5.state,
      date = _ref5.date;
    var selectedDayClass = '';
    if (instance.isRangeSelection() && instance.isSelected(date) && date.selectable) {
      var start = typeof state.rawValue[0] === 'string' ? instance.parseValue(state.rawValue[0])[0] : state.rawValue[0];
      var end = typeof state.rawValue[1] === 'string' ? instance.parseValue(state.rawValue[1])[0] : state.rawValue[1];
      selectedDayClass = instance.isDateEquals(start, date) || instance.isDateEquals(end, date) ? 'p-datepicker-day-selected' : 'p-datepicker-day-selected-range';
    }
    return ['p-datepicker-day', {
      'p-datepicker-day-selected': !instance.isRangeSelection() && instance.isSelected(date) && date.selectable,
      'p-disabled': props.disabled || !date.selectable
    }, selectedDayClass];
  },
  monthView: 'p-datepicker-month-view',
  month: function month(_ref6) {
    var instance = _ref6.instance,
      props = _ref6.props,
      _month = _ref6.month,
      index = _ref6.index;
    return ['p-datepicker-month', {
      'p-datepicker-month-selected': instance.isMonthSelected(index),
      'p-disabled': props.disabled || !_month.selectable
    }];
  },
  yearView: 'p-datepicker-year-view',
  year: function year(_ref7) {
    var instance = _ref7.instance,
      props = _ref7.props,
      _year = _ref7.year;
    return ['p-datepicker-year', {
      'p-datepicker-year-selected': instance.isYearSelected(_year.value),
      'p-disabled': props.disabled || !_year.selectable
    }];
  },
  timePicker: 'p-datepicker-time-picker',
  hourPicker: 'p-datepicker-hour-picker',
  pcIncrementButton: 'p-datepicker-increment-button',
  pcDecrementButton: 'p-datepicker-decrement-button',
  separator: 'p-datepicker-separator',
  minutePicker: 'p-datepicker-minute-picker',
  secondPicker: 'p-datepicker-second-picker',
  ampmPicker: 'p-datepicker-ampm-picker',
  buttonbar: 'p-datepicker-buttonbar',
  pcTodayButton: 'p-datepicker-today-button',
  pcClearButton: 'p-datepicker-clear-button'
};
var DatePickerStyle = BaseStyle.extend({
  name: 'datepicker',
  style: style$5,
  classes: classes$1C,
  inlineStyles: inlineStyles$g
});

var DropdownStyle = BaseStyle.extend({
  name: 'dropdown'
});

var classes$1B = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-floatlabel', {
      'p-floatlabel-over': props.variant === 'over',
      'p-floatlabel-on': props.variant === 'on',
      'p-floatlabel-in': props.variant === 'in'
    }];
  }
};
var FloatLabelStyle = BaseStyle.extend({
  name: 'floatlabel',
  style: style$6,
  classes: classes$1B
});

var classes$1A = {
  root: 'p-fluid'
};
var FluidStyle = BaseStyle.extend({
  name: 'fluid',
  classes: classes$1A
});

var classes$1z = {
  root: 'p-iconfield'
};
var IconFieldStyle = BaseStyle.extend({
  name: 'iconfield',
  style: style$7,
  classes: classes$1z
});

var classes$1y = {
  root: 'p-iftalabel'
};
var IftaLabelStyle = BaseStyle.extend({
  name: 'iftalabel',
  style: style$8,
  classes: classes$1y
});

var classes$1x = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-inputchips p-component p-inputwrapper', {
      'p-disabled': props.disabled,
      'p-invalid': props.invalid,
      'p-focus': instance.focused,
      'p-inputwrapper-filled': props.modelValue && props.modelValue.length || instance.inputValue && instance.inputValue.length,
      'p-inputwrapper-focus': instance.focused
    }];
  },
  input: function input(_ref2) {
    var props = _ref2.props,
      instance = _ref2.instance;
    return ['p-inputchips-input', {
      'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$primevue.config.inputStyle === 'filled' || instance.$primevue.config.inputVariant === 'filled'
    }];
  },
  chipItem: function chipItem(_ref3) {
    var state = _ref3.state,
      index = _ref3.index;
    return ['p-inputchips-chip-item', {
      'p-focus': state.focusedIndex === index
    }];
  },
  pcChip: 'p-inputchips-chip',
  chipIcon: 'p-inputchips-chip-icon',
  inputItem: 'p-inputchips-input-item'
};
var InputChipsStyle = BaseStyle.extend({
  name: 'inputchips',
  style: style$9,
  classes: classes$1x
});

var classes$1w = {
  root: 'p-inputgroup'
};
var InputGroupStyle = BaseStyle.extend({
  name: 'inputgroup',
  style: style$a,
  classes: classes$1w
});

var classes$1v = {
  root: 'p-inputgroupaddon'
};
var InputGroupAddonStyle = BaseStyle.extend({
  name: 'inputgroupaddon',
  classes: classes$1v
});

var classes$1u = {
  root: 'p-inputicon'
};
var InputIconStyle = BaseStyle.extend({
  name: 'inputicon',
  classes: classes$1u
});

var classes$1t = {
  root: function root(_ref) {
    var instance = _ref.instance;
    return ['p-inputmask', {
      'p-filled': instance.$filled
    }];
  }
};
var InputMaskStyle = BaseStyle.extend({
  name: 'inputmask',
  classes: classes$1t
});

var classes$1s = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-inputnumber p-component p-inputwrapper', {
      'p-invalid': instance.$invalid,
      'p-inputwrapper-filled': instance.$filled || props.allowEmpty === false,
      'p-inputwrapper-focus': instance.focused,
      'p-inputnumber-stacked': props.showButtons && props.buttonLayout === 'stacked',
      'p-inputnumber-horizontal': props.showButtons && props.buttonLayout === 'horizontal',
      'p-inputnumber-vertical': props.showButtons && props.buttonLayout === 'vertical',
      'p-inputnumber-fluid': instance.$fluid
    }];
  },
  pcInputText: 'p-inputnumber-input',
  clearIcon: 'p-inputnumber-clear-icon',
  buttonGroup: 'p-inputnumber-button-group',
  incrementButton: function incrementButton(_ref2) {
    var instance = _ref2.instance,
      props = _ref2.props;
    return ['p-inputnumber-button p-inputnumber-increment-button', {
      'p-disabled': props.showButtons && props.max !== null && instance.maxBoundry()
    }];
  },
  decrementButton: function decrementButton(_ref3) {
    var instance = _ref3.instance,
      props = _ref3.props;
    return ['p-inputnumber-button p-inputnumber-decrement-button', {
      'p-disabled': props.showButtons && props.min !== null && instance.minBoundry()
    }];
  }
};
var InputNumberStyle = BaseStyle.extend({
  name: 'inputnumber',
  style: style$b,
  classes: classes$1s
});

var classes$1r = {
  root: 'p-inputotp p-component',
  pcInputText: 'p-inputotp-input'
};
var InputOtpStyle = BaseStyle.extend({
  name: 'inputotp',
  style: style$c,
  classes: classes$1r
});

var InputSwitchStyle = BaseStyle.extend({
  name: 'inputswitch'
});

var classes$1q = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-inputtext p-component', {
      'p-filled': instance.$filled,
      'p-inputtext-sm p-inputfield-sm': props.size === 'small',
      'p-inputtext-lg p-inputfield-lg': props.size === 'large',
      'p-invalid': instance.$invalid,
      'p-variant-filled': instance.$variant === 'filled',
      'p-inputtext-fluid': instance.$fluid
    }];
  }
};
var InputTextStyle = BaseStyle.extend({
  name: 'inputtext',
  style: style$d,
  classes: classes$1q
});

var classes$1p = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-knob p-component', {
      'p-disabled': props.disabled,
      'p-invalid': instance.$invalid
    }];
  },
  range: 'p-knob-range',
  value: 'p-knob-value',
  text: 'p-knob-text'
};
var KnobStyle = BaseStyle.extend({
  name: 'knob',
  style: style$e,
  classes: classes$1p
});

var classes$1o = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-listbox p-component', {
      'p-listbox-striped': props.striped,
      'p-disabled': props.disabled,
      'p-listbox-fluid': props.fluid,
      'p-invalid': instance.$invalid
    }];
  },
  header: 'p-listbox-header',
  pcFilter: 'p-listbox-filter',
  listContainer: 'p-listbox-list-container',
  list: 'p-listbox-list',
  optionGroup: 'p-listbox-option-group',
  option: function option(_ref2) {
    var instance = _ref2.instance,
      props = _ref2.props,
      _option = _ref2.option,
      index = _ref2.index,
      getItemOptions = _ref2.getItemOptions;
    return ['p-listbox-option', {
      'p-listbox-option-selected': instance.isSelected(_option) && props.highlightOnSelect,
      'p-focus': instance.focusedOptionIndex === instance.getOptionIndex(index, getItemOptions),
      'p-disabled': instance.isOptionDisabled(_option)
    }];
  },
  optionCheckIcon: 'p-listbox-option-check-icon',
  optionBlankIcon: 'p-listbox-option-blank-icon',
  emptyMessage: 'p-listbox-empty-message'
};
var ListboxStyle = BaseStyle.extend({
  name: 'listbox',
  style: style$f,
  classes: classes$1o
});

var inlineStyles$f = {
  root: function root(_ref) {
    var props = _ref.props;
    return {
      position: props.appendTo === 'self' ? 'relative' : undefined
    };
  }
};
var classes$1n = {
  root: function root(_ref2) {
    var instance = _ref2.instance,
      props = _ref2.props;
    return ['p-multiselect p-component p-inputwrapper', {
      'p-multiselect-display-chip': props.display === 'chip',
      'p-disabled': props.disabled,
      'p-invalid': instance.$invalid,
      'p-variant-filled': instance.$variant === 'filled',
      'p-focus': instance.focused,
      'p-inputwrapper-filled': instance.$filled,
      'p-inputwrapper-focus': instance.focused || instance.overlayVisible,
      'p-multiselect-open': instance.overlayVisible,
      'p-multiselect-fluid': instance.$fluid,
      'p-multiselect-sm p-inputfield-sm': props.size === 'small',
      'p-multiselect-lg p-inputfield-lg': props.size === 'large'
    }];
  },
  labelContainer: 'p-multiselect-label-container',
  label: function label(_ref3) {
    var instance = _ref3.instance,
      props = _ref3.props;
    return ['p-multiselect-label', {
      'p-placeholder': instance.label === props.placeholder,
      'p-multiselect-label-empty': !props.placeholder && !instance.$filled
    }];
  },
  clearIcon: 'p-multiselect-clear-icon',
  chipItem: 'p-multiselect-chip-item',
  pcChip: 'p-multiselect-chip',
  chipIcon: 'p-multiselect-chip-icon',
  dropdown: 'p-multiselect-dropdown',
  loadingIcon: 'p-multiselect-loading-icon',
  dropdownIcon: 'p-multiselect-dropdown-icon',
  overlay: 'p-multiselect-overlay p-component',
  header: 'p-multiselect-header',
  pcFilterContainer: 'p-multiselect-filter-container',
  pcFilter: 'p-multiselect-filter',
  listContainer: 'p-multiselect-list-container',
  list: 'p-multiselect-list',
  optionGroup: 'p-multiselect-option-group',
  option: function option(_ref4) {
    var instance = _ref4.instance,
      _option = _ref4.option,
      index = _ref4.index,
      getItemOptions = _ref4.getItemOptions,
      props = _ref4.props;
    return ['p-multiselect-option', {
      'p-multiselect-option-selected': instance.isSelected(_option) && props.highlightOnSelect,
      'p-focus': instance.focusedOptionIndex === instance.getOptionIndex(index, getItemOptions),
      'p-disabled': instance.isOptionDisabled(_option)
    }];
  },
  emptyMessage: 'p-multiselect-empty-message'
};
var MultiSelectStyle = BaseStyle.extend({
  name: 'multiselect',
  style: style$g,
  classes: classes$1n,
  inlineStyles: inlineStyles$f
});

var inlineStyles$e = {
  root: function root(_ref) {
    var props = _ref.props;
    return {
      position: props.appendTo === 'self' ? 'relative' : undefined
    };
  }
};
var classes$1m = {
  root: function root(_ref2) {
    var instance = _ref2.instance;
    return ['p-password p-component p-inputwrapper', {
      'p-inputwrapper-filled': instance.$filled,
      'p-inputwrapper-focus': instance.focused,
      'p-password-fluid': instance.$fluid
    }];
  },
  pcInputText: 'p-password-input',
  maskIcon: 'p-password-toggle-mask-icon p-password-mask-icon',
  unmaskIcon: 'p-password-toggle-mask-icon p-password-unmask-icon',
  clearIcon: 'p-password-clear-icon',
  overlay: 'p-password-overlay p-component',
  content: 'p-password-content',
  meter: 'p-password-meter',
  meterLabel: function meterLabel(_ref3) {
    var instance = _ref3.instance;
    return "p-password-meter-label ".concat(instance.meter ? 'p-password-meter-' + instance.meter.strength : '');
  },
  meterText: 'p-password-meter-text'
};
var PasswordStyle = BaseStyle.extend({
  name: 'password',
  style: style$h,
  classes: classes$1m,
  inlineStyles: inlineStyles$e
});

var classes$1l = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-radiobutton p-component', {
      'p-radiobutton-checked': instance.checked,
      'p-disabled': props.disabled,
      'p-invalid': instance.$pcRadioButtonGroup ? instance.$pcRadioButtonGroup.$invalid : instance.$invalid,
      'p-variant-filled': instance.$variant === 'filled',
      'p-radiobutton-sm p-inputfield-sm': props.size === 'small',
      'p-radiobutton-lg p-inputfield-lg': props.size === 'large'
    }];
  },
  box: 'p-radiobutton-box',
  input: 'p-radiobutton-input',
  icon: 'p-radiobutton-icon'
};
var RadioButtonStyle = BaseStyle.extend({
  name: 'radiobutton',
  style: style$i,
  classes: classes$1l
});

var classes$1k = {
  root: 'p-radiobutton-group p-component'
};
var RadioButtonGroupStyle = BaseStyle.extend({
  name: 'radiobuttongroup',
  style: style$j,
  classes: classes$1k
});

var classes$1j = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-rating', {
      'p-readonly': props.readonly,
      'p-disabled': props.disabled
    }];
  },
  option: function option(_ref2) {
    var instance = _ref2.instance,
      value = _ref2.value;
    return ['p-rating-option', {
      'p-rating-option-active': value <= instance.d_value,
      'p-focus-visible': value === instance.focusedOptionIndex && instance.isFocusVisibleItem
    }];
  },
  onIcon: function onIcon(_ref3) {
    var instance = _ref3.instance;
    return ['p-rating-icon p-rating-on-icon', {
      'p-invalid': instance.$invalid
    }];
  },
  offIcon: function offIcon(_ref4) {
    var instance = _ref4.instance;
    return ['p-rating-icon p-rating-off-icon', {
      'p-invalid': instance.$invalid
    }];
  }
};
var RatingStyle = BaseStyle.extend({
  name: 'rating',
  style: style$k,
  classes: classes$1j
});

var classes$1i = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props,
      state = _ref.state;
    return ['p-select p-component p-inputwrapper', {
      'p-disabled': props.disabled,
      'p-invalid': instance.$invalid,
      'p-variant-filled': instance.$variant === 'filled',
      'p-focus': state.focused,
      'p-inputwrapper-filled': instance.$filled,
      'p-inputwrapper-focus': state.focused || state.overlayVisible,
      'p-select-open': state.overlayVisible,
      'p-select-fluid': instance.$fluid,
      'p-select-sm p-inputfield-sm': props.size === 'small',
      'p-select-lg p-inputfield-lg': props.size === 'large'
    }];
  },
  label: function label(_ref2) {
    var _instance$label;
    var instance = _ref2.instance,
      props = _ref2.props;
    return ['p-select-label', {
      'p-placeholder': !props.editable && instance.label === props.placeholder,
      'p-select-label-empty': !props.editable && !instance.$slots['value'] && (instance.label === 'p-emptylabel' || ((_instance$label = instance.label) === null || _instance$label === void 0 ? void 0 : _instance$label.length) === 0)
    }];
  },
  clearIcon: 'p-select-clear-icon',
  dropdown: 'p-select-dropdown',
  loadingicon: 'p-select-loading-icon',
  dropdownIcon: 'p-select-dropdown-icon',
  overlay: 'p-select-overlay p-component',
  header: 'p-select-header',
  pcFilter: 'p-select-filter',
  listContainer: 'p-select-list-container',
  list: 'p-select-list',
  optionGroup: 'p-select-option-group',
  optionGroupLabel: 'p-select-option-group-label',
  option: function option(_ref3) {
    var instance = _ref3.instance,
      props = _ref3.props,
      state = _ref3.state,
      _option = _ref3.option,
      focusedOption = _ref3.focusedOption;
    return ['p-select-option', {
      'p-select-option-selected': instance.isSelected(_option) && props.highlightOnSelect,
      'p-focus': state.focusedOptionIndex === focusedOption,
      'p-disabled': instance.isOptionDisabled(_option)
    }];
  },
  optionLabel: 'p-select-option-label',
  optionCheckIcon: 'p-select-option-check-icon',
  optionBlankIcon: 'p-select-option-blank-icon',
  emptyMessage: 'p-select-empty-message'
};
var SelectStyle = BaseStyle.extend({
  name: 'select',
  style: style$l,
  classes: classes$1i
});

var classes$1h = {
  root: function root(_ref) {
    var props = _ref.props,
      instance = _ref.instance;
    return ['p-selectbutton p-component', {
      'p-invalid': instance.$invalid,
      // @todo: check
      'p-selectbutton-fluid': props.fluid
    }];
  }
};
var SelectButtonStyle = BaseStyle.extend({
  name: 'selectbutton',
  style: style$m,
  classes: classes$1h
});

var inlineStyles$d = {
  handle: {
    position: 'absolute'
  },
  range: {
    position: 'absolute'
  }
};
var classes$1g = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-slider p-component', {
      'p-disabled': props.disabled,
      'p-invalid': instance.$invalid,
      'p-slider-horizontal': props.orientation === 'horizontal',
      'p-slider-vertical': props.orientation === 'vertical'
    }];
  },
  range: 'p-slider-range',
  handle: 'p-slider-handle'
};
var SliderStyle = BaseStyle.extend({
  name: 'slider',
  style: style$n,
  classes: classes$1g,
  inlineStyles: inlineStyles$d
});

var classes$1f = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-textarea p-component', {
      'p-filled': instance.$filled,
      'p-textarea-resizable ': props.autoResize,
      'p-textarea-sm p-inputfield-sm': props.size === 'small',
      'p-textarea-lg p-inputfield-lg': props.size === 'large',
      'p-invalid': instance.$invalid,
      'p-variant-filled': instance.$variant === 'filled',
      'p-textarea-fluid': instance.$fluid
    }];
  }
};
var TextareaStyle = BaseStyle.extend({
  name: 'textarea',
  style: style$o,
  classes: classes$1f
});

var classes$1e = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-togglebutton p-component', {
      'p-togglebutton-checked': instance.active,
      'p-invalid': instance.$invalid,
      'p-togglebutton-fluid': props.fluid,
      'p-togglebutton-sm p-inputfield-sm': props.size === 'small',
      'p-togglebutton-lg p-inputfield-lg': props.size === 'large'
    }];
  },
  content: 'p-togglebutton-content',
  icon: 'p-togglebutton-icon',
  label: 'p-togglebutton-label'
};
var ToggleButtonStyle = BaseStyle.extend({
  name: 'togglebutton',
  style: style$p,
  classes: classes$1e
});

var inlineStyles$c = {
  root: {
    position: 'relative'
  }
};
var classes$1d = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-toggleswitch p-component', {
      'p-toggleswitch-checked': instance.checked,
      'p-disabled': props.disabled,
      'p-invalid': instance.$invalid
    }];
  },
  input: 'p-toggleswitch-input',
  slider: 'p-toggleswitch-slider',
  handle: 'p-toggleswitch-handle'
};
var ToggleSwitchStyle = BaseStyle.extend({
  name: 'toggleswitch',
  style: style$q,
  classes: classes$1d,
  inlineStyles: inlineStyles$c
});

var inlineStyles$b = {
  root: function root(_ref) {
    var props = _ref.props;
    return {
      position: props.appendTo === 'self' ? 'relative' : undefined
    };
  }
};
var classes$1c = {
  root: function root(_ref2) {
    var instance = _ref2.instance,
      props = _ref2.props;
    return ['p-treeselect p-component p-inputwrapper', {
      'p-treeselect-display-chip': props.display === 'chip',
      'p-disabled': props.disabled,
      'p-invalid': instance.$invalid,
      'p-focus': instance.focused,
      'p-variant-filled': instance.$variant === 'filled',
      'p-inputwrapper-filled': instance.$filled,
      'p-inputwrapper-focus': instance.focused || instance.overlayVisible,
      'p-treeselect-open': instance.overlayVisible,
      'p-treeselect-fluid': instance.$fluid,
      'p-treeselect-sm p-inputfield-sm': props.size === 'small',
      'p-treeselect-lg p-inputfield-lg': props.size === 'large'
    }];
  },
  labelContainer: 'p-treeselect-label-container',
  label: function label(_ref3) {
    var instance = _ref3.instance,
      props = _ref3.props;
    return ['p-treeselect-label', {
      'p-placeholder': instance.label === props.placeholder,
      'p-treeselect-label-empty': !props.placeholder && instance.emptyValue
    }];
  },
  clearIcon: 'p-treeselect-clear-icon',
  chip: 'p-treeselect-chip-item',
  pcChip: 'p-treeselect-chip',
  dropdown: 'p-treeselect-dropdown',
  dropdownIcon: 'p-treeselect-dropdown-icon',
  panel: 'p-treeselect-overlay p-component',
  treeContainer: 'p-treeselect-tree-container',
  emptyMessage: 'p-treeselect-empty-message'
};
var TreeSelectStyle = BaseStyle.extend({
  name: 'treeselect',
  style: style$r,
  classes: classes$1c,
  inlineStyles: inlineStyles$b
});

function _typeof$3(o) { "@babel/helpers - typeof"; return _typeof$3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$3(o); }
function _defineProperty$3(e, r, t) { return (r = _toPropertyKey$3(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e; }
function _toPropertyKey$3(t) { var i = _toPrimitive$3(t, "string"); return "symbol" == _typeof$3(i) ? i : i + ""; }
function _toPrimitive$3(t, r) { if ("object" != _typeof$3(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r); if ("object" != _typeof$3(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var classes$1b = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-button p-component', _defineProperty$3(_defineProperty$3(_defineProperty$3(_defineProperty$3(_defineProperty$3(_defineProperty$3(_defineProperty$3(_defineProperty$3(_defineProperty$3({
      'p-button-icon-only': instance.hasIcon && !props.label && !props.badge,
      'p-button-vertical': (props.iconPos === 'top' || props.iconPos === 'bottom') && props.label,
      'p-button-loading': props.loading,
      'p-button-link': props.link || props.variant === 'link'
    }, "p-button-".concat(props.severity), props.severity), 'p-button-raised', props.raised), 'p-button-rounded', props.rounded), 'p-button-text', props.text || props.variant === 'text'), 'p-button-outlined', props.outlined || props.variant === 'outlined'), 'p-button-sm', props.size === 'small'), 'p-button-lg', props.size === 'large'), 'p-button-plain', props.plain), 'p-button-fluid', instance.hasFluid)];
  },
  loadingIcon: 'p-button-loading-icon',
  icon: function icon(_ref3) {
    var props = _ref3.props;
    return ['p-button-icon', _defineProperty$3({}, "p-button-icon-".concat(props.iconPos), props.label)];
  },
  label: 'p-button-label'
};
var ButtonStyle = BaseStyle.extend({
  name: 'button',
  style: style$s,
  classes: classes$1b
});

var classes$1a = {
  root: 'p-buttongroup p-component'
};
var ButtonGroupStyle = BaseStyle.extend({
  name: 'buttongroup',
  style: style$t,
  classes: classes$1a
});

function _typeof$2(o) { "@babel/helpers - typeof"; return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$2(o); }
function _defineProperty$2(e, r, t) { return (r = _toPropertyKey$2(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e; }
function _toPropertyKey$2(t) { var i = _toPrimitive$2(t, "string"); return "symbol" == _typeof$2(i) ? i : i + ""; }
function _toPrimitive$2(t, r) { if ("object" != _typeof$2(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r); if ("object" != _typeof$2(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

/* Direction */
var inlineStyles$a = {
  root: function root(_ref) {
    var props = _ref.props;
    return {
      alignItems: (props.direction === 'up' || props.direction === 'down') && 'center',
      justifyContent: (props.direction === 'left' || props.direction === 'right') && 'center',
      flexDirection: props.direction === 'up' ? 'column-reverse' : props.direction === 'down' ? 'column' : props.direction === 'left' ? 'row-reverse' : props.direction === 'right' ? 'row' : null
    };
  },
  list: function list(_ref2) {
    var props = _ref2.props;
    return {
      flexDirection: props.direction === 'up' ? 'column-reverse' : props.direction === 'down' ? 'column' : props.direction === 'left' ? 'row-reverse' : props.direction === 'right' ? 'row' : null
    };
  }
};
var classes$19 = {
  root: function root(_ref3) {
    var instance = _ref3.instance,
      props = _ref3.props;
    return ["p-speeddial p-component p-speeddial-".concat(props.type), _defineProperty$2(_defineProperty$2(_defineProperty$2({}, "p-speeddial-direction-".concat(props.direction), props.type !== 'circle'), 'p-speeddial-open', instance.d_visible), 'p-disabled', props.disabled)];
  },
  pcButton: function pcButton(_ref5) {
    var props = _ref5.props;
    return ['p-speeddial-button', {
      'p-speeddial-rotate': props.rotateAnimation && !props.hideIcon
    }];
  },
  list: 'p-speeddial-list',
  item: 'p-speeddial-item',
  action: 'p-speeddial-action',
  actionIcon: 'p-speeddial-action-icon',
  mask: 'p-speeddial-mask p-overlay-mask'
};
var SpeedDialStyle = BaseStyle.extend({
  name: 'speeddial',
  style: style$u,
  classes: classes$19,
  inlineStyles: inlineStyles$a
});

var classes$18 = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-splitbutton p-component', {
      'p-splitbutton-raised': props.raised,
      'p-splitbutton-rounded': props.rounded,
      'p-splitbutton-fluid': instance.hasFluid
    }];
  },
  pcButton: 'p-splitbutton-button',
  pcDropdown: 'p-splitbutton-dropdown'
};
var SplitButtonStyle = BaseStyle.extend({
  name: 'splitbutton',
  style: style$v,
  classes: classes$18
});

var ColumnStyle = BaseStyle.extend({
  name: 'column'
});

var RowStyle = BaseStyle.extend({
  name: 'row'
});

var ColumnGroupStyle = BaseStyle.extend({
  name: 'columngroup'
});

var classes$17 = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-datatable p-component', {
      'p-datatable-hoverable': props.rowHover || props.selectionMode,
      'p-datatable-resizable': props.resizableColumns,
      'p-datatable-resizable-fit': props.resizableColumns && props.columnResizeMode === 'fit',
      'p-datatable-scrollable': props.scrollable,
      'p-datatable-flex-scrollable': props.scrollable && props.scrollHeight === 'flex',
      'p-datatable-striped': props.stripedRows,
      'p-datatable-gridlines': props.showGridlines,
      'p-datatable-sm': props.size === 'small',
      'p-datatable-lg': props.size === 'large'
    }];
  },
  mask: 'p-datatable-mask p-overlay-mask',
  loadingIcon: 'p-datatable-loading-icon',
  header: 'p-datatable-header',
  pcPaginator: function pcPaginator(_ref2) {
    var position = _ref2.position;
    return 'p-datatable-paginator-' + position;
  },
  tableContainer: 'p-datatable-table-container',
  table: function table(_ref3) {
    var props = _ref3.props;
    return ['p-datatable-table', {
      'p-datatable-scrollable-table': props.scrollable,
      'p-datatable-resizable-table': props.resizableColumns,
      'p-datatable-resizable-table-fit': props.resizableColumns && props.columnResizeMode === 'fit'
    }];
  },
  thead: 'p-datatable-thead',
  headerCell: function headerCell(_ref4) {
    var instance = _ref4.instance,
      props = _ref4.props,
      column = _ref4.column;
    return column && !instance.columnProp('hidden') && (props.rowGroupMode !== 'subheader' || props.groupRowsBy !== instance.columnProp(column, 'field')) ? ['p-datatable-header-cell', {
      'p-datatable-frozen-column': instance.columnProp('frozen')
    }] : ['p-datatable-header-cell', {
      'p-datatable-sortable-column': instance.columnProp('sortable'),
      'p-datatable-resizable-column': instance.resizableColumns,
      'p-datatable-column-sorted': instance.isColumnSorted(),
      'p-datatable-frozen-column': instance.columnProp('frozen'),
      'p-datatable-reorderable-column': props.reorderableColumns
    }];
  },
  columnResizer: 'p-datatable-column-resizer',
  columnHeaderContent: 'p-datatable-column-header-content',
  columnTitle: 'p-datatable-column-title',
  columnFooter: 'p-datatable-column-footer',
  sortIcon: 'p-datatable-sort-icon',
  pcSortBadge: 'p-datatable-sort-badge',
  filter: function filter(_ref5) {
    var props = _ref5.props;
    return ['p-datatable-filter', {
      'p-datatable-inline-filter': props.display === 'row',
      'p-datatable-popover-filter': props.display === 'menu'
    }];
  },
  filterElementContainer: 'p-datatable-filter-element-container',
  pcColumnFilterButton: 'p-datatable-column-filter-button',
  pcColumnFilterClearButton: 'p-datatable-column-filter-clear-button',
  filterOverlay: function filterOverlay(_ref6) {
    var props = _ref6.props;
    return ['p-datatable-filter-overlay p-component', {
      'p-datatable-filter-overlay-popover': props.display === 'menu'
    }];
  },
  filterConstraintList: 'p-datatable-filter-constraint-list',
  filterConstraint: function filterConstraint(_ref7) {
    var instance = _ref7.instance,
      matchMode = _ref7.matchMode;
    return ['p-datatable-filter-constraint', {
      'p-datatable-filter-constraint-selected': matchMode && instance.isRowMatchModeSelected(matchMode.value)
    }];
  },
  filterConstraintSeparator: 'p-datatable-filter-constraint-separator',
  filterOperator: 'p-datatable-filter-operator',
  pcFilterOperatorDropdown: 'p-datatable-filter-operator-dropdown',
  filterRuleList: 'p-datatable-filter-rule-list',
  filterRule: 'p-datatable-filter-rule',
  pcFilterConstraintDropdown: 'p-datatable-filter-constraint-dropdown',
  pcFilterRemoveRuleButton: 'p-datatable-filter-remove-rule-button',
  pcFilterAddRuleButton: 'p-datatable-filter-add-rule-button',
  filterButtonbar: 'p-datatable-filter-buttonbar',
  pcFilterClearButton: 'p-datatable-filter-clear-button',
  pcFilterApplyButton: 'p-datatable-filter-apply-button',
  tbody: function tbody(_ref8) {
    var props = _ref8.props;
    return props.frozenRow ? 'p-datatable-tbody p-datatable-frozen-tbody' : 'p-datatable-tbody';
  },
  rowGroupHeader: 'p-datatable-row-group-header',
  rowToggleButton: 'p-datatable-row-toggle-button',
  rowToggleIcon: 'p-datatable-row-toggle-icon',
  row: function row(_ref9) {
    var instance = _ref9.instance,
      props = _ref9.props,
      index = _ref9.index,
      columnSelectionMode = _ref9.columnSelectionMode;
    var rowStyleClass = [];
    if (props.selectionMode) {
      rowStyleClass.push('p-datatable-selectable-row');
    }
    if (props.selection) {
      rowStyleClass.push({
        'p-datatable-row-selected': columnSelectionMode ? instance.isSelected && instance.$parentInstance.$parentInstance.highlightOnSelect : instance.isSelected
      });
    }
    if (props.contextMenuSelection) {
      rowStyleClass.push({
        'p-datatable-contextmenu-row-selected': instance.isSelectedWithContextMenu
      });
    }
    rowStyleClass.push(index % 2 === 0 ? 'p-row-even' : 'p-row-odd');
    return rowStyleClass;
  },
  rowExpansion: 'p-datatable-row-expansion',
  rowGroupFooter: 'p-datatable-row-group-footer',
  emptyMessage: 'p-datatable-empty-message',
  bodyCell: function bodyCell(_ref0) {
    var instance = _ref0.instance;
    return [{
      'p-datatable-frozen-column': instance.columnProp('frozen')
    }];
  },
  reorderableRowHandle: 'p-datatable-reorderable-row-handle',
  pcRowEditorInit: 'p-datatable-row-editor-init',
  pcRowEditorSave: 'p-datatable-row-editor-save',
  pcRowEditorCancel: 'p-datatable-row-editor-cancel',
  tfoot: 'p-datatable-tfoot',
  footerCell: function footerCell(_ref1) {
    var instance = _ref1.instance;
    return [{
      'p-datatable-frozen-column': instance.columnProp('frozen')
    }];
  },
  virtualScrollerSpacer: 'p-datatable-virtualscroller-spacer',
  footer: 'p-datatable-footer',
  columnResizeIndicator: 'p-datatable-column-resize-indicator',
  rowReorderIndicatorUp: 'p-datatable-row-reorder-indicator-up',
  rowReorderIndicatorDown: 'p-datatable-row-reorder-indicator-down'
};
var inlineStyles$9 = {
  tableContainer: {
    overflow: 'auto'
  },
  thead: {
    position: 'sticky'
  },
  tfoot: {
    position: 'sticky'
  }
};
var DataTableStyle = BaseStyle.extend({
  name: 'datatable',
  style: style$w,
  classes: classes$17,
  inlineStyles: inlineStyles$9
});

var classes$16 = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-dataview p-component', {
      'p-dataview-list': props.layout === 'list',
      'p-dataview-grid': props.layout === 'grid'
    }];
  },
  header: 'p-dataview-header',
  pcPaginator: function pcPaginator(_ref2) {
    var position = _ref2.position;
    return 'p-dataview-paginator-' + position;
  },
  content: 'p-dataview-content',
  emptyMessage: 'p-dataview-empty-message',
  // TODO: remove?
  footer: 'p-dataview-footer'
};
var DataViewStyle = BaseStyle.extend({
  name: 'dataview',
  style: style$x,
  classes: classes$16
});

var classes$15 = {
  root: 'p-orderlist p-component',
  controls: 'p-orderlist-controls'
};
var OrderListStyle = BaseStyle.extend({
  name: 'orderlist',
  style: style$y,
  classes: classes$15
});

var classes$14 = {
  root: 'p-organizationchart p-component',
  table: 'p-organizationchart-table',
  node: function node(_ref) {
    var instance = _ref.instance;
    return ['p-organizationchart-node', {
      'p-organizationchart-node-selectable': instance.selectable,
      'p-organizationchart-node-selected': instance.selected
    }];
  },
  nodeToggleButton: function nodeToggleButton(_ref2) {
    var instance = _ref2.instance;
    return ['p-organizationchart-node-toggle-button', {
      'p-disabled': !instance.selectable
    }];
  },
  nodeToggleButtonIcon: 'p-organizationchart-node-toggle-button-icon',
  connectors: 'p-organizationchart-connectors',
  connectorDown: 'p-organizationchart-connector-down',
  connectorLeft: function connectorLeft(_ref3) {
    var index = _ref3.index;
    return ['p-organizationchart-connector-left', {
      'p-organizationchart-connector-top': !(index === 0)
    }];
  },
  connectorRight: function connectorRight(_ref4) {
    var props = _ref4.props,
      index = _ref4.index;
    return ['p-organizationchart-connector-right', {
      'p-organizationchart-connector-top': !(index === props.node.children.length - 1)
    }];
  },
  nodeChildren: 'p-organizationchart-node-children'
};
var OrganizationChartStyle = BaseStyle.extend({
  name: 'organizationchart',
  style: style$z,
  classes: classes$14
});

function _typeof$1(o) { "@babel/helpers - typeof"; return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$1(o); }
function _defineProperty$1(e, r, t) { return (r = _toPropertyKey$1(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e; }
function _toPropertyKey$1(t) { var i = _toPrimitive$1(t, "string"); return "symbol" == _typeof$1(i) ? i : i + ""; }
function _toPrimitive$1(t, r) { if ("object" != _typeof$1(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r); if ("object" != _typeof$1(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var classes$13 = {
  paginator: function paginator(_ref) {
    var instance = _ref.instance,
      key = _ref.key;
    return ['p-paginator p-component', _defineProperty$1({
      'p-paginator-default': !instance.hasBreakpoints()
    }, "p-paginator-".concat(key), instance.hasBreakpoints())];
  },
  content: 'p-paginator-content',
  contentStart: 'p-paginator-content-start',
  contentEnd: 'p-paginator-content-end',
  first: function first(_ref3) {
    var instance = _ref3.instance;
    return ['p-paginator-first', {
      'p-disabled': instance.$attrs.disabled
    }];
  },
  firstIcon: 'p-paginator-first-icon',
  prev: function prev(_ref4) {
    var instance = _ref4.instance;
    return ['p-paginator-prev', {
      'p-disabled': instance.$attrs.disabled
    }];
  },
  prevIcon: 'p-paginator-prev-icon',
  next: function next(_ref5) {
    var instance = _ref5.instance;
    return ['p-paginator-next', {
      'p-disabled': instance.$attrs.disabled
    }];
  },
  nextIcon: 'p-paginator-next-icon',
  last: function last(_ref6) {
    var instance = _ref6.instance;
    return ['p-paginator-last', {
      'p-disabled': instance.$attrs.disabled
    }];
  },
  lastIcon: 'p-paginator-last-icon',
  pages: 'p-paginator-pages',
  page: function page(_ref7) {
    var props = _ref7.props,
      pageLink = _ref7.pageLink;
    return ['p-paginator-page', {
      'p-paginator-page-selected': pageLink - 1 === props.page
    }];
  },
  current: 'p-paginator-current',
  pcRowPerPageDropdown: 'p-paginator-rpp-dropdown',
  pcJumpToPageDropdown: 'p-paginator-jtp-dropdown',
  pcJumpToPageInputText: 'p-paginator-jtp-input'
};
var PaginatorStyle = BaseStyle.extend({
  name: 'paginator',
  style: style$A,
  classes: classes$13
});

var classes$12 = {
  root: 'p-picklist p-component',
  sourceControls: 'p-picklist-controls p-picklist-source-controls',
  sourceListContainer: 'p-picklist-list-container p-picklist-source-list-container',
  transferControls: 'p-picklist-controls p-picklist-transfer-controls',
  targetListContainer: 'p-picklist-list-container p-picklist-target-list-container',
  targetControls: 'p-picklist-controls p-picklist-target-controls'
};
var PickListStyle = BaseStyle.extend({
  name: 'picklist',
  style: style$B,
  classes: classes$12
});

var classes$11 = {
  root: function root(_ref) {
    var props = _ref.props,
      state = _ref.state;
    return ['p-tree p-component', {
      'p-tree-selectable': props.selectionMode != null,
      'p-tree-loading': props.loading,
      'p-tree-flex-scrollable': props.scrollHeight === 'flex',
      'p-tree-node-dragover': state.dragHover
    }];
  },
  mask: 'p-tree-mask p-overlay-mask',
  loadingIcon: 'p-tree-loading-icon',
  pcFilterContainer: 'p-tree-filter',
  pcFilterInput: 'p-tree-filter-input',
  wrapper: 'p-tree-root',
  //TODO: discuss
  rootChildren: 'p-tree-root-children',
  node: function node(_ref2) {
    var instance = _ref2.instance;
    return ['p-tree-node', {
      'p-tree-node-leaf': instance.leaf
    }];
  },
  nodeContent: function nodeContent(_ref3) {
    var instance = _ref3.instance;
    return ['p-tree-node-content', instance.node.styleClass, {
      'p-tree-node-selectable': instance.selectable,
      'p-tree-node-selected': instance.checkboxMode && instance.$parentInstance.highlightOnSelect ? instance.checked : instance.selected,
      'p-tree-node-dragover': instance.isNodeDropActive
    }];
  },
  nodeToggleButton: 'p-tree-node-toggle-button',
  nodeToggleIcon: 'p-tree-node-toggle-icon',
  nodeCheckbox: 'p-tree-node-checkbox',
  nodeIcon: 'p-tree-node-icon',
  nodeLabel: 'p-tree-node-label',
  nodeChildren: 'p-tree-node-children',
  emptyMessage: 'p-tree-empty-message',
  dropPoint: 'p-tree-node-drop-point'
};
var TreeStyle = BaseStyle.extend({
  name: 'tree',
  style: style$C,
  classes: classes$11
});

var classes$10 = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-treetable p-component', {
      'p-treetable-hoverable': props.rowHover || instance.rowSelectionMode,
      'p-treetable-resizable': props.resizableColumns,
      'p-treetable-resizable-fit': props.resizableColumns && props.columnResizeMode === 'fit',
      'p-treetable-scrollable': props.scrollable,
      'p-treetable-flex-scrollable': props.scrollable && props.scrollHeight === 'flex',
      'p-treetable-gridlines': props.showGridlines,
      'p-treetable-sm': props.size === 'small',
      'p-treetable-lg': props.size === 'large'
    }];
  },
  loading: 'p-treetable-loading',
  //TODO: required?
  mask: 'p-treetable-mask p-overlay-mask',
  loadingIcon: 'p-treetable-loading-icon',
  header: 'p-treetable-header',
  paginator: function paginator(_ref2) {
    var position = _ref2.position;
    return 'p-treetable-paginator-' + position;
  },
  tableContainer: 'p-treetable-table-container',
  table: function table(_ref3) {
    var props = _ref3.props;
    return ['p-treetable-table', {
      'p-treetable-scrollable-table': props.scrollable,
      'p-treetable-resizable-table': props.resizableColumns,
      'p-treetable-resizable-table-fit': props.resizableColumns && props.columnResizeMode === 'fit'
    }];
  },
  thead: 'p-treetable-thead',
  headerCell: function headerCell(_ref4) {
    var instance = _ref4.instance,
      props = _ref4.props;
    return ['p-treetable-header-cell', {
      'p-treetable-sortable-column': instance.columnProp('sortable'),
      'p-treetable-resizable-column': props.resizableColumns,
      'p-treetable-column-sorted': instance.columnProp('sortable') ? instance.isColumnSorted() : false,
      'p-treetable-frozen-column': instance.columnProp('frozen')
    }];
  },
  columnResizer: 'p-treetable-column-resizer',
  columnHeaderContent: 'p-treetable-column-header-content',
  columnTitle: 'p-treetable-column-title',
  sortIcon: 'p-treetable-sort-icon',
  pcSortBadge: 'p-treetable-sort-badge',
  tbody: 'p-treetable-tbody',
  row: function row(_ref5) {
    var props = _ref5.props,
      instance = _ref5.instance;
    return [{
      'p-treetable-selectable-row': instance.$parentInstance.rowSelectionMode,
      'p-treetable-row-selected': instance.selected,
      'p-treetable-contextmenu-row-selected': props.contextMenuSelection && instance.isSelectedWithContextMenu
    }];
  },
  bodyCell: function bodyCell(_ref6) {
    var instance = _ref6.instance;
    return [{
      'p-treetable-frozen-column': instance.columnProp('frozen')
    }];
  },
  bodyCellContent: function bodyCellContent(_ref7) {
    var instance = _ref7.instance;
    return ['p-treetable-body-cell-content', {
      'p-treetable-body-cell-content-expander': instance.columnProp('expander')
    }];
  },
  nodeToggleButton: 'p-treetable-node-toggle-button',
  nodeToggleIcon: 'p-treetable-node-toggle-icon',
  pcNodeCheckbox: 'p-treetable-node-checkbox',
  emptyMessage: 'p-treetable-empty-message',
  tfoot: 'p-treetable-tfoot',
  footerCell: function footerCell(_ref8) {
    var instance = _ref8.instance;
    return [{
      'p-treetable-frozen-column': instance.columnProp('frozen')
    }];
  },
  footer: 'p-treetable-footer',
  columnResizeIndicator: 'p-treetable-column-resize-indicator'
};
var inlineStyles$8 = {
  tableContainer: {
    overflow: 'auto'
  },
  thead: {
    position: 'sticky'
  },
  tfoot: {
    position: 'sticky'
  }
};
var TreeTableStyle = BaseStyle.extend({
  name: 'treetable',
  style: style$D,
  classes: classes$10,
  inlineStyles: inlineStyles$8
});

var classes$$ = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-timeline p-component', 'p-timeline-' + props.align, 'p-timeline-' + props.layout];
  },
  event: 'p-timeline-event',
  eventOpposite: 'p-timeline-event-opposite',
  eventSeparator: 'p-timeline-event-separator',
  eventMarker: 'p-timeline-event-marker',
  eventConnector: 'p-timeline-event-connector',
  eventContent: 'p-timeline-event-content'
};
var TimelineStyle = BaseStyle.extend({
  name: 'timeline',
  style: style$E,
  classes: classes$$
});

var css = "\n.p-virtualscroller {\n    position: relative;\n    overflow: auto;\n    contain: strict;\n    transform: translateZ(0);\n    will-change: scroll-position;\n    outline: 0 none;\n}\n\n.p-virtualscroller-content {\n    position: absolute;\n    top: 0;\n    left: 0;\n    min-height: 100%;\n    min-width: 100%;\n    will-change: transform;\n}\n\n.p-virtualscroller-spacer {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 1px;\n    width: 1px;\n    transform-origin: 0 0;\n    pointer-events: none;\n}\n\n.p-virtualscroller-loader {\n    position: sticky;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n\n.p-virtualscroller-loader-mask {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.p-virtualscroller-horizontal > .p-virtualscroller-content {\n    display: flex;\n}\n\n.p-virtualscroller-inline .p-virtualscroller-content {\n    position: static;\n}\n\n.p-virtualscroller .p-virtualscroller-loading {\n    transform: none !important;\n    min-height: 0;\n    position: sticky;\n    inset-block-start: 0;\n    inset-inline-start: 0;\n}\n";
var VirtualScrollerStyle = BaseStyle.extend({
  name: 'virtualscroller',
  css: css,
  style: style$F
});

var classes$_ = {
  root: 'p-accordion p-component'
};
var AccordionStyle = BaseStyle.extend({
  name: 'accordion',
  style: style$G,
  classes: classes$_
});

var classes$Z = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-accordionpanel', {
      'p-accordionpanel-active': instance.active,
      'p-disabled': props.disabled
    }];
  }
};
var AccordionPanelStyle = BaseStyle.extend({
  name: 'accordionpanel',
  classes: classes$Z
});

var classes$Y = {
  root: 'p-accordionheader',
  toggleicon: 'p-accordionheader-toggle-icon'
};
var AccordionHeaderStyle = BaseStyle.extend({
  name: 'accordionheader',
  classes: classes$Y
});

var classes$X = {
  root: 'p-accordioncontent',
  contentWrapper: 'p-accordioncontent-wrapper',
  content: 'p-accordioncontent-content'
};
var AccordionContentStyle = BaseStyle.extend({
  name: 'accordioncontent',
  classes: classes$X
});

var AccordionTabStyle = BaseStyle.extend({
  name: 'accordiontab'
});

var classes$W = {
  root: 'p-card p-component',
  header: 'p-card-header',
  body: 'p-card-body',
  caption: 'p-card-caption',
  title: 'p-card-title',
  subtitle: 'p-card-subtitle',
  content: 'p-card-content',
  footer: 'p-card-footer'
};
var CardStyle = BaseStyle.extend({
  name: 'card',
  style: style$H,
  classes: classes$W
});

var DeferredContentStyle = BaseStyle.extend({
  name: 'deferredcontent'
});

/* Position */
var inlineStyles$7 = {
  root: function root(_ref) {
    var props = _ref.props;
    return {
      justifyContent: props.layout === 'horizontal' ? props.align === 'center' || props.align === null ? 'center' : props.align === 'left' ? 'flex-start' : props.align === 'right' ? 'flex-end' : null : null,
      alignItems: props.layout === 'vertical' ? props.align === 'center' || props.align === null ? 'center' : props.align === 'top' ? 'flex-start' : props.align === 'bottom' ? 'flex-end' : null : null
    };
  }
};
var classes$V = {
  root: function root(_ref2) {
    var props = _ref2.props;
    return ['p-divider p-component', 'p-divider-' + props.layout, 'p-divider-' + props.type, {
      'p-divider-left': props.layout === 'horizontal' && (!props.align || props.align === 'left')
    }, {
      'p-divider-center': props.layout === 'horizontal' && props.align === 'center'
    }, {
      'p-divider-right': props.layout === 'horizontal' && props.align === 'right'
    }, {
      'p-divider-top': props.layout === 'vertical' && props.align === 'top'
    }, {
      'p-divider-center': props.layout === 'vertical' && (!props.align || props.align === 'center')
    }, {
      'p-divider-bottom': props.layout === 'vertical' && props.align === 'bottom'
    }];
  },
  content: 'p-divider-content'
};
var DividerStyle = BaseStyle.extend({
  name: 'divider',
  style: style$I,
  classes: classes$V,
  inlineStyles: inlineStyles$7
});

var classes$U = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-fieldset p-component', {
      'p-fieldset-toggleable': props.toggleable
    }];
  },
  legend: 'p-fieldset-legend',
  legendLabel: 'p-fieldset-legend-label',
  toggleButton: 'p-fieldset-toggle-button',
  toggleIcon: 'p-fieldset-toggle-icon',
  contentContainer: 'p-fieldset-content-container',
  contentWrapper: 'p-fieldset-content-wrapper',
  content: 'p-fieldset-content'
};
var FieldsetStyle = BaseStyle.extend({
  name: 'fieldset',
  style: style$J,
  classes: classes$U
});

var classes$T = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-panel p-component', {
      'p-panel-toggleable': props.toggleable
    }];
  },
  header: 'p-panel-header',
  title: 'p-panel-title',
  headerActions: 'p-panel-header-actions',
  pcToggleButton: 'p-panel-toggle-button',
  contentContainer: 'p-panel-content-container',
  contentWrapper: 'p-panel-content-wrapper',
  content: 'p-panel-content',
  footer: 'p-panel-footer'
};
var PanelStyle = BaseStyle.extend({
  name: 'panel',
  style: style$K,
  classes: classes$T
});

var classes$S = {
  root: 'p-scrollpanel p-component',
  contentContainer: 'p-scrollpanel-content-container',
  content: 'p-scrollpanel-content',
  barX: 'p-scrollpanel-bar p-scrollpanel-bar-x',
  barY: 'p-scrollpanel-bar p-scrollpanel-bar-y'
};
var ScrollPanelStyle = BaseStyle.extend({
  name: 'scrollpanel',
  style: style$L,
  classes: classes$S
});

var classes$R = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-splitter p-component', 'p-splitter-' + props.layout];
  },
  gutter: 'p-splitter-gutter',
  gutterHandle: 'p-splitter-gutter-handle'
};
var SplitterStyle = BaseStyle.extend({
  name: 'splitter',
  style: style$M,
  classes: classes$R
});

var classes$Q = {
  root: function root(_ref) {
    var instance = _ref.instance;
    return ['p-splitterpanel', {
      'p-splitterpanel-nested': instance.isNested
    }];
  }
};
var SplitterPanelStyle = BaseStyle.extend({
  name: 'splitterpanel',
  classes: classes$Q
});

var classes$P = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-stepper p-component', {
      'p-readonly': props.linear
    }];
  },
  separator: 'p-stepper-separator'
};
var StepperStyle = BaseStyle.extend({
  name: 'stepper',
  style: style$N,
  classes: classes$P
});

var classes$O = {
  root: 'p-steplist'
};
var StepListStyle = BaseStyle.extend({
  name: 'steplist',
  classes: classes$O
});

var classes$N = {
  root: function root(_ref) {
    var instance = _ref.instance;
    return ['p-step', {
      'p-step-active': instance.active,
      'p-disabled': instance.isStepDisabled
    }];
  },
  header: 'p-step-header',
  number: 'p-step-number',
  title: 'p-step-title'
};
var StepStyle = BaseStyle.extend({
  name: 'step',
  classes: classes$N
});

var classes$M = {
  root: function root(_ref) {
    var instance = _ref.instance;
    return ['p-stepitem', {
      'p-stepitem-active': instance.isActive
    }];
  }
};
var StepItemStyle = BaseStyle.extend({
  name: 'stepitem',
  classes: classes$M
});

var classes$L = {
  root: 'p-steppanels'
};
var StepPanelsStyle = BaseStyle.extend({
  name: 'steppanels',
  classes: classes$L
});

var classes$K = {
  root: function root(_ref) {
    var instance = _ref.instance;
    return ['p-steppanel', {
      'p-steppanel-active': instance.isVertical && instance.active
    }];
  },
  contentWrapper: 'p-steppanel-content-wrapper',
  content: 'p-steppanel-content'
};
var StepPanelStyle = BaseStyle.extend({
  name: 'steppanel',
  classes: classes$K
});

var classes$J = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-tabview p-component', {
      'p-tabview-scrollable': props.scrollable
    }];
  },
  navContainer: 'p-tabview-tablist-container',
  prevButton: 'p-tabview-prev-button',
  navContent: 'p-tabview-tablist-scroll-container',
  nav: 'p-tabview-tablist',
  tab: {
    header: function header(_ref2) {
      var instance = _ref2.instance,
        tab = _ref2.tab,
        index = _ref2.index;
      return ['p-tabview-tablist-item', instance.getTabProp(tab, 'headerClass'), {
        'p-tabview-tablist-item-active': instance.d_activeIndex === index,
        'p-disabled': instance.getTabProp(tab, 'disabled')
      }];
    },
    headerAction: 'p-tabview-tab-header',
    headerTitle: 'p-tabview-tab-title',
    content: function content(_ref3) {
      var instance = _ref3.instance,
        tab = _ref3.tab;
      return ['p-tabview-panel', instance.getTabProp(tab, 'contentClass')];
    }
  },
  inkbar: 'p-tabview-ink-bar',
  nextButton: 'p-tabview-next-button',
  panelContainer: 'p-tabview-panels'
};
var TabViewStyle = BaseStyle.extend({
  name: 'tabview',
  style: style$O,
  classes: classes$J
});

var classes$I = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-tabs p-component', {
      'p-tabs-scrollable': props.scrollable
    }];
  }
};
var TabsStyle = BaseStyle.extend({
  name: 'tabs',
  style: style$P,
  classes: classes$I
});

var classes$H = {
  root: 'p-tablist',
  content: 'p-tablist-content p-tablist-viewport',
  tabList: 'p-tablist-tab-list',
  activeBar: 'p-tablist-active-bar',
  prevButton: 'p-tablist-prev-button p-tablist-nav-button',
  nextButton: 'p-tablist-next-button p-tablist-nav-button'
};
var TabListStyle = BaseStyle.extend({
  name: 'tablist',
  classes: classes$H
});

var classes$G = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-tab', {
      'p-tab-active': instance.active,
      'p-disabled': props.disabled
    }];
  }
};
var TabStyle = BaseStyle.extend({
  name: 'tab',
  classes: classes$G
});

var classes$F = {
  root: 'p-tabpanels'
};
var TabPanelsStyle = BaseStyle.extend({
  name: 'tabpanels',
  classes: classes$F
});

var classes$E = {
  root: function root(_ref) {
    var instance = _ref.instance;
    return ['p-tabpanel', {
      'p-tabpanel-active': instance.active
    }];
  }
};
var TabPanelStyle = BaseStyle.extend({
  name: 'tabpanel',
  classes: classes$E
});

var classes$D = {
  root: 'p-toolbar p-component',
  start: 'p-toolbar-start',
  center: 'p-toolbar-center',
  end: 'p-toolbar-end'
};
var ToolbarStyle = BaseStyle.extend({
  name: 'toolbar',
  style: style$Q,
  classes: classes$D
});

var classes$C = {
  root: 'p-confirmdialog',
  icon: 'p-confirmdialog-icon',
  message: 'p-confirmdialog-message',
  pcRejectButton: 'p-confirmdialog-reject-button',
  pcAcceptButton: 'p-confirmdialog-accept-button'
};
var ConfirmDialogStyle = BaseStyle.extend({
  name: 'confirmdialog',
  style: style$R,
  classes: classes$C
});

var classes$B = {
  root: 'p-confirmpopup p-component',
  content: 'p-confirmpopup-content',
  icon: 'p-confirmpopup-icon',
  message: 'p-confirmpopup-message',
  footer: 'p-confirmpopup-footer',
  pcRejectButton: 'p-confirmpopup-reject-button',
  pcAcceptButton: 'p-confirmpopup-accept-button'
};
var ConfirmPopupStyle = BaseStyle.extend({
  name: 'confirmpopup',
  style: style$S,
  classes: classes$B
});

/* Position */
var inlineStyles$6 = {
  mask: function mask(_ref) {
    var position = _ref.position,
      modal = _ref.modal;
    return {
      position: 'fixed',
      height: '100%',
      width: '100%',
      left: 0,
      top: 0,
      display: 'flex',
      justifyContent: position === 'left' || position === 'topleft' || position === 'bottomleft' ? 'flex-start' : position === 'right' || position === 'topright' || position === 'bottomright' ? 'flex-end' : 'center',
      alignItems: position === 'top' || position === 'topleft' || position === 'topright' ? 'flex-start' : position === 'bottom' || position === 'bottomleft' || position === 'bottomright' ? 'flex-end' : 'center',
      pointerEvents: modal ? 'auto' : 'none'
    };
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    pointerEvents: 'auto'
  }
};
var classes$A = {
  mask: function mask(_ref2) {
    var props = _ref2.props;
    var positions = ['left', 'right', 'top', 'topleft', 'topright', 'bottom', 'bottomleft', 'bottomright'];
    var pos = positions.find(function (item) {
      return item === props.position;
    });
    return ['p-dialog-mask', {
      'p-overlay-mask p-overlay-mask-enter-active': props.modal
    }, pos ? "p-dialog-".concat(pos) : ''];
  },
  root: function root(_ref3) {
    var props = _ref3.props,
      instance = _ref3.instance;
    return ['p-dialog p-component', {
      'p-dialog-maximized': props.maximizable && instance.maximized
    }];
  },
  header: 'p-dialog-header',
  title: 'p-dialog-title',
  headerActions: 'p-dialog-header-actions',
  pcMaximizeButton: 'p-dialog-maximize-button',
  pcCloseButton: 'p-dialog-close-button',
  content: 'p-dialog-content',
  footer: 'p-dialog-footer'
};
var DialogStyle = BaseStyle.extend({
  name: 'dialog',
  style: style$T,
  classes: classes$A,
  inlineStyles: inlineStyles$6
});

var inlineStyles$5 = {
  mask: function mask(_ref) {
    var position = _ref.position,
      modal = _ref.modal;
    return {
      position: 'fixed',
      height: '100%',
      width: '100%',
      left: 0,
      top: 0,
      display: 'flex',
      justifyContent: position === 'left' ? 'flex-start' : position === 'right' ? 'flex-end' : 'center',
      alignItems: position === 'top' ? 'flex-start' : position === 'bottom' ? 'flex-end' : 'center',
      pointerEvents: modal ? 'auto' : 'none'
    };
  },
  root: {
    pointerEvents: 'auto'
  }
};
var classes$z = {
  mask: function mask(_ref2) {
    var instance = _ref2.instance,
      props = _ref2.props;
    var positions = ['left', 'right', 'top', 'bottom'];
    var pos = positions.find(function (item) {
      return item === props.position;
    });
    return ['p-drawer-mask', {
      'p-overlay-mask p-overlay-mask-enter-active': props.modal,
      'p-drawer-open': instance.containerVisible,
      'p-drawer-full': instance.fullScreen
    }, pos ? "p-drawer-".concat(pos) : ''];
  },
  root: function root(_ref3) {
    var instance = _ref3.instance;
    return ['p-drawer p-component', {
      'p-drawer-full': instance.fullScreen
    }];
  },
  header: 'p-drawer-header',
  title: 'p-drawer-title',
  pcCloseButton: 'p-drawer-close-button',
  content: 'p-drawer-content',
  footer: 'p-drawer-footer'
};
var DrawerStyle = BaseStyle.extend({
  name: 'drawer',
  style: style$U,
  classes: classes$z,
  inlineStyles: inlineStyles$5
});

var DynamicDialogStyle = BaseStyle.extend({
  name: 'dynamicdialog'
});

var OverlayPanelStyle = BaseStyle.extend({
  name: 'overlaypanel'
});

var classes$y = {
  root: 'p-popover p-component',
  content: 'p-popover-content'
};
var PopoverStyle = BaseStyle.extend({
  name: 'popover',
  style: style$V,
  classes: classes$y
});

var SidebarStyle = BaseStyle.extend({
  name: 'sidebar'
});

var classes$x = {
  root: function root(_ref) {
    var props = _ref.props;
    return ["p-fileupload p-fileupload-".concat(props.mode, " p-component")];
  },
  header: 'p-fileupload-header',
  pcChooseButton: 'p-fileupload-choose-button',
  pcUploadButton: 'p-fileupload-upload-button',
  pcCancelButton: 'p-fileupload-cancel-button',
  content: 'p-fileupload-content',
  fileList: 'p-fileupload-file-list',
  file: 'p-fileupload-file',
  fileThumbnail: 'p-fileupload-file-thumbnail',
  fileInfo: 'p-fileupload-file-info',
  fileName: 'p-fileupload-file-name',
  fileSize: 'p-fileupload-file-size',
  pcFileBadge: 'p-fileupload-file-badge',
  fileActions: 'p-fileupload-file-actions',
  pcFileRemoveButton: 'p-fileupload-file-remove-button',
  basicContent: 'p-fileupload-basic-content'
};
var FileUploadStyle = BaseStyle.extend({
  name: 'fileupload',
  style: style$W,
  classes: classes$x
});

var classes$w = {
  root: 'p-breadcrumb p-component',
  list: 'p-breadcrumb-list',
  homeItem: 'p-breadcrumb-home-item',
  separator: 'p-breadcrumb-separator',
  separatorIcon: 'p-breadcrumb-separator-icon',
  item: function item(_ref) {
    var instance = _ref.instance;
    return ['p-breadcrumb-item', {
      'p-disabled': instance.disabled()
    }];
  },
  itemLink: 'p-breadcrumb-item-link',
  itemIcon: 'p-breadcrumb-item-icon',
  itemLabel: 'p-breadcrumb-item-label'
};
var BreadcrumbStyle = BaseStyle.extend({
  name: 'breadcrumb',
  style: style$X,
  classes: classes$w
});

var classes$v = {
  root: function root(_ref) {
    var instance = _ref.instance;
    return ['p-contextmenu p-component', {
      'p-contextmenu-mobile': instance.queryMatches
    }];
  },
  rootList: 'p-contextmenu-root-list',
  item: function item(_ref2) {
    var instance = _ref2.instance,
      processedItem = _ref2.processedItem;
    return ['p-contextmenu-item', {
      'p-contextmenu-item-active': instance.isItemActive(processedItem),
      'p-focus': instance.isItemFocused(processedItem),
      'p-disabled': instance.isItemDisabled(processedItem)
    }];
  },
  itemContent: 'p-contextmenu-item-content',
  itemLink: 'p-contextmenu-item-link',
  itemIcon: 'p-contextmenu-item-icon',
  itemLabel: 'p-contextmenu-item-label',
  submenuIcon: 'p-contextmenu-submenu-icon',
  submenu: 'p-contextmenu-submenu',
  separator: 'p-contextmenu-separator'
};
var ContextMenuStyle = BaseStyle.extend({
  name: 'contextmenu',
  style: style$Y,
  classes: classes$v
});

var classes$u = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-dock p-component', "p-dock-".concat(props.position), {
      'p-dock-mobile': instance.queryMatches
    }];
  },
  listContainer: 'p-dock-list-container',
  list: 'p-dock-list',
  item: function item(_ref2) {
    var instance = _ref2.instance,
      processedItem = _ref2.processedItem,
      id = _ref2.id;
    return ['p-dock-item', {
      'p-focus': instance.isItemActive(id),
      'p-disabled': instance.disabled(processedItem)
    }];
  },
  itemContent: 'p-dock-item-content',
  itemLink: 'p-dock-item-link',
  itemIcon: 'p-dock-item-icon'
};
var DockStyle = BaseStyle.extend({
  name: 'dock',
  style: style$Z,
  classes: classes$u
});

var classes$t = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-menu p-component', {
      'p-menu-overlay': props.popup
    }];
  },
  start: 'p-menu-start',
  list: 'p-menu-list',
  submenuLabel: 'p-menu-submenu-label',
  separator: 'p-menu-separator',
  end: 'p-menu-end',
  item: function item(_ref2) {
    var instance = _ref2.instance;
    return ['p-menu-item', {
      'p-focus': instance.id === instance.focusedOptionId,
      'p-disabled': instance.disabled()
    }];
  },
  itemContent: 'p-menu-item-content',
  itemLink: 'p-menu-item-link',
  itemIcon: 'p-menu-item-icon',
  itemLabel: 'p-menu-item-label'
};
var MenuStyle = BaseStyle.extend({
  name: 'menu',
  style: style$_,
  classes: classes$t
});

var inlineStyles$4 = {
  submenu: function submenu(_ref) {
    var instance = _ref.instance,
      processedItem = _ref.processedItem;
    return {
      display: instance.isItemActive(processedItem) ? 'flex' : 'none'
    };
  }
};
var classes$s = {
  root: function root(_ref2) {
    var instance = _ref2.instance;
    return ['p-menubar p-component', {
      'p-menubar-mobile': instance.queryMatches,
      'p-menubar-mobile-active': instance.mobileActive
    }];
  },
  start: 'p-menubar-start',
  button: 'p-menubar-button',
  rootList: 'p-menubar-root-list',
  item: function item(_ref3) {
    var instance = _ref3.instance,
      processedItem = _ref3.processedItem;
    return ['p-menubar-item', {
      'p-menubar-item-active': instance.isItemActive(processedItem),
      'p-focus': instance.isItemFocused(processedItem),
      'p-disabled': instance.isItemDisabled(processedItem)
    }];
  },
  itemContent: 'p-menubar-item-content',
  itemLink: 'p-menubar-item-link',
  itemIcon: 'p-menubar-item-icon',
  itemLabel: 'p-menubar-item-label',
  submenuIcon: 'p-menubar-submenu-icon',
  submenu: 'p-menubar-submenu',
  separator: 'p-menubar-separator',
  end: 'p-menubar-end'
};
var MenubarStyle = BaseStyle.extend({
  name: 'menubar',
  style: style$$,
  classes: classes$s,
  inlineStyles: inlineStyles$4
});

var inlineStyles$3 = {
  rootList: function rootList(_ref) {
    var props = _ref.props;
    return {
      'max-height': props.scrollHeight,
      overflow: 'auto'
    };
  }
};
var classes$r = {
  root: function root(_ref2) {
    var instance = _ref2.instance;
    return ['p-megamenu p-component', {
      'p-megamenu-mobile': instance.queryMatches,
      'p-megamenu-mobile-active': instance.mobileActive,
      'p-megamenu-horizontal': instance.horizontal,
      'p-megamenu-vertical': instance.vertical
    }];
  },
  start: 'p-megamenu-start',
  button: 'p-megamenu-button',
  rootList: 'p-megamenu-root-list',
  submenuLabel: function submenuLabel(_ref3) {
    var instance = _ref3.instance,
      processedItem = _ref3.processedItem;
    return ['p-megamenu-submenu-label', {
      'p-disabled': instance.isItemDisabled(processedItem)
    }];
  },
  item: function item(_ref4) {
    var instance = _ref4.instance,
      processedItem = _ref4.processedItem;
    return ['p-megamenu-item', {
      'p-megamenu-item-active': instance.isItemActive(processedItem),
      'p-focus': instance.isItemFocused(processedItem),
      'p-disabled': instance.isItemDisabled(processedItem)
    }];
  },
  itemContent: 'p-megamenu-item-content',
  itemLink: 'p-megamenu-item-link',
  itemIcon: 'p-megamenu-item-icon',
  itemLabel: 'p-megamenu-item-label',
  submenuIcon: 'p-megamenu-submenu-icon',
  overlay: 'p-megamenu-overlay',
  grid: 'p-megamenu-grid',
  column: function column(_ref5) {
    var instance = _ref5.instance,
      processedItem = _ref5.processedItem;
    var length = instance.isItemGroup(processedItem) ? processedItem.items.length : 0;
    var columnClass;
    if (instance.$parentInstance.queryMatches) columnClass = 'p-megamenu-col-12';else {
      switch (length) {
        case 2:
          columnClass = 'p-megamenu-col-6';
          break;
        case 3:
          columnClass = 'p-megamenu-col-4';
          break;
        case 4:
          columnClass = 'p-megamenu-col-3';
          break;
        case 6:
          columnClass = 'p-megamenu-col-2';
          break;
        default:
          columnClass = 'p-megamenu-col-12';
          break;
      }
    }
    return columnClass;
  },
  submenu: 'p-megamenu-submenu',
  separator: 'p-megamenu-separator',
  end: 'p-megamenu-end'
};
var MegaMenuStyle = BaseStyle.extend({
  name: 'megamenu',
  style: style$10,
  classes: classes$r,
  inlineStyles: inlineStyles$3
});

var classes$q = {
  root: 'p-panelmenu p-component',
  panel: 'p-panelmenu-panel',
  header: function header(_ref) {
    var instance = _ref.instance,
      item = _ref.item;
    return ['p-panelmenu-header', {
      'p-panelmenu-header-active': instance.isItemActive(item) && !!item.items,
      'p-disabled': instance.isItemDisabled(item)
    }];
  },
  headerContent: 'p-panelmenu-header-content',
  headerLink: 'p-panelmenu-header-link',
  headerIcon: 'p-panelmenu-header-icon',
  headerLabel: 'p-panelmenu-header-label',
  contentContainer: 'p-panelmenu-content-container',
  contentWrapper: 'p-panelmenu-content-wrapper',
  content: 'p-panelmenu-content',
  rootList: 'p-panelmenu-root-list',
  item: function item(_ref2) {
    var instance = _ref2.instance,
      processedItem = _ref2.processedItem;
    return ['p-panelmenu-item', {
      'p-focus': instance.isItemFocused(processedItem),
      'p-disabled': instance.isItemDisabled(processedItem)
    }];
  },
  itemContent: 'p-panelmenu-item-content',
  itemLink: 'p-panelmenu-item-link',
  itemIcon: 'p-panelmenu-item-icon',
  itemLabel: 'p-panelmenu-item-label',
  submenuIcon: 'p-panelmenu-submenu-icon',
  submenu: 'p-panelmenu-submenu',
  separator: 'p-menuitem-separator'
};
var PanelMenuStyle = BaseStyle.extend({
  name: 'panelmenu',
  style: style$11,
  classes: classes$q
});

var classes$p = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-steps p-component', {
      'p-readonly': props.readonly
    }];
  },
  list: 'p-steps-list',
  item: function item(_ref2) {
    var instance = _ref2.instance,
      _item = _ref2.item,
      index = _ref2.index;
    return ['p-steps-item', {
      'p-steps-item-active': instance.isActive(index),
      'p-disabled': instance.isItemDisabled(_item, index)
    }];
  },
  itemLink: 'p-steps-item-link',
  itemNumber: 'p-steps-item-number',
  itemLabel: 'p-steps-item-label'
};
var StepsStyle = BaseStyle.extend({
  name: 'steps',
  style: style$12,
  classes: classes$p
});

var classes$o = {
  root: 'p-tabmenu p-component',
  tablist: 'p-tabmenu-tablist',
  item: function item(_ref) {
    var instance = _ref.instance,
      index = _ref.index,
      _item = _ref.item;
    return ['p-tabmenu-item', {
      'p-tabmenu-item-active': instance.d_activeIndex === index,
      'p-disabled': instance.disabled(_item)
    }];
  },
  itemLink: 'p-tabmenu-item-link',
  itemIcon: 'p-tabmenu-item-icon',
  itemLabel: 'p-tabmenu-item-label',
  activeBar: 'p-tabmenu-active-bar'
};
var TabMenuStyle = BaseStyle.extend({
  name: 'tabmenu',
  style: style$13,
  classes: classes$o
});

var inlineStyles$2 = {
  submenu: function submenu(_ref) {
    var instance = _ref.instance,
      processedItem = _ref.processedItem;
    return {
      display: instance.isItemActive(processedItem) ? 'flex' : 'none'
    };
  }
};
var classes$n = {
  root: function root(_ref2) {
    var props = _ref2.props,
      instance = _ref2.instance;
    return ['p-tieredmenu p-component', {
      'p-tieredmenu-overlay': props.popup,
      'p-tieredmenu-mobile': instance.queryMatches
    }];
  },
  start: 'p-tieredmenu-start',
  rootList: 'p-tieredmenu-root-list',
  item: function item(_ref3) {
    var instance = _ref3.instance,
      processedItem = _ref3.processedItem;
    return ['p-tieredmenu-item', {
      'p-tieredmenu-item-active': instance.isItemActive(processedItem),
      'p-focus': instance.isItemFocused(processedItem),
      'p-disabled': instance.isItemDisabled(processedItem)
    }];
  },
  itemContent: 'p-tieredmenu-item-content',
  itemLink: 'p-tieredmenu-item-link',
  itemIcon: 'p-tieredmenu-item-icon',
  itemLabel: 'p-tieredmenu-item-label',
  submenuIcon: 'p-tieredmenu-submenu-icon',
  submenu: 'p-tieredmenu-submenu',
  separator: 'p-tieredmenu-separator',
  end: 'p-tieredmenu-end'
};
var TieredMenuStyle = BaseStyle.extend({
  name: 'tieredmenu',
  style: style$14,
  classes: classes$n,
  inlineStyles: inlineStyles$2
});

var classes$m = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-message p-component p-message-' + props.severity, {
      'p-message-outlined': props.variant === 'outlined',
      'p-message-simple': props.variant === 'simple',
      'p-message-sm': props.size === 'small',
      'p-message-lg': props.size === 'large'
    }];
  },
  contentWrapper: 'p-message-content-wrapper',
  content: 'p-message-content',
  icon: 'p-message-icon',
  text: 'p-message-text',
  closeButton: 'p-message-close-button',
  closeIcon: 'p-message-close-icon'
};
var MessageStyle = BaseStyle.extend({
  name: 'message',
  style: style$15,
  classes: classes$m
});

var classes$l = {
  root: function root(_ref) {
    var props = _ref.props,
      instance = _ref.instance;
    return ['p-inlinemessage p-component p-inlinemessage-' + props.severity, {
      'p-inlinemessage-icon-only': !instance.$slots["default"]
    }];
  },
  icon: function icon(_ref2) {
    var props = _ref2.props;
    return ['p-inlinemessage-icon', props.icon];
  },
  text: 'p-inlinemessage-text'
};
var InlineMessageStyle = BaseStyle.extend({
  name: 'inlinemessage',
  style: style$16,
  classes: classes$l
});

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

// Position
var inlineStyles$1 = {
  root: function root(_ref) {
    var position = _ref.position;
    return {
      position: 'fixed',
      top: position === 'top-right' || position === 'top-left' || position === 'top-center' ? '20px' : position === 'center' ? '50%' : null,
      right: (position === 'top-right' || position === 'bottom-right') && '20px',
      bottom: (position === 'bottom-left' || position === 'bottom-right' || position === 'bottom-center') && '20px',
      left: position === 'top-left' || position === 'bottom-left' ? '20px' : position === 'center' || position === 'top-center' || position === 'bottom-center' ? '50%' : null
    };
  }
};
var classes$k = {
  root: function root(_ref2) {
    var props = _ref2.props;
    return ['p-toast p-component p-toast-' + props.position];
  },
  message: function message(_ref3) {
    var props = _ref3.props;
    return ['p-toast-message', {
      'p-toast-message-info': props.message.severity === 'info' || props.message.severity === undefined,
      'p-toast-message-warn': props.message.severity === 'warn',
      'p-toast-message-error': props.message.severity === 'error',
      'p-toast-message-success': props.message.severity === 'success',
      'p-toast-message-secondary': props.message.severity === 'secondary',
      'p-toast-message-contrast': props.message.severity === 'contrast'
    }];
  },
  messageContent: 'p-toast-message-content',
  messageIcon: function messageIcon(_ref4) {
    var props = _ref4.props;
    return ['p-toast-message-icon', _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, props.infoIcon, props.message.severity === 'info'), props.warnIcon, props.message.severity === 'warn'), props.errorIcon, props.message.severity === 'error'), props.successIcon, props.message.severity === 'success')];
  },
  messageText: 'p-toast-message-text',
  summary: 'p-toast-summary',
  detail: 'p-toast-detail',
  closeButton: 'p-toast-close-button',
  closeIcon: 'p-toast-close-icon'
};
var ToastStyle = BaseStyle.extend({
  name: 'toast',
  style: style$17,
  classes: classes$k,
  inlineStyles: inlineStyles$1
});

var classes$j = {
  root: function root(_ref) {
    var instance = _ref.instance;
    return ['p-carousel p-component', {
      'p-carousel-vertical': instance.isVertical(),
      'p-carousel-horizontal': !instance.isVertical()
    }];
  },
  header: 'p-carousel-header',
  contentContainer: 'p-carousel-content-container',
  content: 'p-carousel-content',
  pcPrevButton: function pcPrevButton(_ref2) {
    var instance = _ref2.instance;
    return ['p-carousel-prev-button', {
      'p-disabled': instance.backwardIsDisabled
    }];
  },
  viewport: 'p-carousel-viewport',
  itemList: 'p-carousel-item-list',
  itemClone: function itemClone(_ref3) {
    var index = _ref3.index,
      value = _ref3.value,
      totalShiftedItems = _ref3.totalShiftedItems,
      d_numVisible = _ref3.d_numVisible;
    return ['p-carousel-item p-carousel-item-clone', {
      'p-carousel-item-active': totalShiftedItems * -1 === value.length + d_numVisible,
      'p-carousel-item-start': index === 0,
      'p-carousel-item-end': value.slice(-1 * d_numVisible).length - 1 === index
    }];
  },
  item: function item(_ref4) {
    var instance = _ref4.instance,
      index = _ref4.index;
    return ['p-carousel-item', {
      'p-carousel-item-active': instance.firstIndex() <= index && instance.lastIndex() >= index,
      'p-carousel-item-start': instance.firstIndex() === index,
      'p-carousel-item-end': instance.lastIndex() === index
    }];
  },
  pcNextButton: function pcNextButton(_ref5) {
    var instance = _ref5.instance;
    return ['p-carousel-next-button', {
      'p-disabled': instance.forwardIsDisabled
    }];
  },
  indicatorList: 'p-carousel-indicator-list',
  indicator: function indicator(_ref6) {
    var instance = _ref6.instance,
      index = _ref6.index;
    return ['p-carousel-indicator', {
      'p-carousel-indicator-active': instance.d_page === index
    }];
  },
  indicatorButton: 'p-carousel-indicator-button',
  footer: 'p-carousel-footer'
};
var CarouselStyle = BaseStyle.extend({
  name: 'carousel',
  style: style$18,
  classes: classes$j
});

var classes$i = {
  mask: 'p-galleria-mask p-overlay-mask p-overlay-mask-enter-active',
  root: function root(_ref) {
    var instance = _ref.instance;
    var thumbnailsPosClass = instance.$attrs.showThumbnails && instance.getPositionClass('p-galleria-thumbnails', instance.$attrs.thumbnailsPosition);
    var indicatorPosClass = instance.$attrs.showIndicators && instance.getPositionClass('p-galleria-indicators', instance.$attrs.indicatorsPosition);
    return ['p-galleria p-component', {
      'p-galleria-fullscreen': instance.$attrs.fullScreen,
      'p-galleria-inset-indicators': instance.$attrs.showIndicatorsOnItem,
      'p-galleria-hover-navigators': instance.$attrs.showItemNavigatorsOnHover && !instance.$attrs.fullScreen
    }, thumbnailsPosClass, indicatorPosClass];
  },
  closeButton: 'p-galleria-close-button',
  closeIcon: 'p-galleria-close-icon',
  header: 'p-galleria-header',
  content: 'p-galleria-content',
  footer: 'p-galleria-footer',
  itemsContainer: 'p-galleria-items-container',
  items: 'p-galleria-items',
  prevButton: function prevButton(_ref2) {
    var instance = _ref2.instance;
    return ['p-galleria-prev-button p-galleria-nav-button', {
      'p-disabled': instance.isNavBackwardDisabled
    }];
  },
  prevIcon: 'p-galleria-prev-icon',
  item: 'p-galleria-item',
  nextButton: function nextButton(_ref3) {
    var instance = _ref3.instance;
    return ['p-galleria-next-button p-galleria-nav-button', {
      'p-disabled': instance.isNavForwardDisabled
    }];
  },
  nextIcon: 'p-galleria-next-icon',
  caption: 'p-galleria-caption',
  indicatorList: 'p-galleria-indicator-list',
  indicator: function indicator(_ref4) {
    var instance = _ref4.instance,
      index = _ref4.index;
    return ['p-galleria-indicator', {
      'p-galleria-indicator-active': instance.isIndicatorItemActive(index)
    }];
  },
  indicatorButton: 'p-galleria-indicator-button',
  thumbnails: 'p-galleria-thumbnails',
  thumbnailContent: 'p-galleria-thumbnails-content',
  thumbnailPrevButton: function thumbnailPrevButton(_ref5) {
    var instance = _ref5.instance;
    return ['p-galleria-thumbnail-prev-button p-galleria-thumbnail-nav-button', {
      'p-disabled': instance.isNavBackwardDisabled
    }];
  },
  thumbnailPrevIcon: 'p-galleria-thumbnail-prev-icon',
  thumbnailsViewport: 'p-galleria-thumbnails-viewport',
  thumbnailItems: 'p-galleria-thumbnail-items',
  thumbnailItem: function thumbnailItem(_ref6) {
    var instance = _ref6.instance,
      index = _ref6.index,
      activeIndex = _ref6.activeIndex;
    return ['p-galleria-thumbnail-item', {
      'p-galleria-thumbnail-item-current': activeIndex === index,
      'p-galleria-thumbnail-item-active': instance.isItemActive(index),
      'p-galleria-thumbnail-item-start': instance.firstItemAciveIndex() === index,
      'p-galleria-thumbnail-item-end': instance.lastItemActiveIndex() === index
    }];
  },
  thumbnail: 'p-galleria-thumbnail',
  thumbnailNextButton: function thumbnailNextButton(_ref7) {
    var instance = _ref7.instance;
    return ['p-galleria-thumbnail-next-button p-galleria-thumbnail-nav-button', {
      'p-disabled': instance.isNavForwardDisabled
    }];
  },
  thumbnailNextIcon: 'p-galleria-thumbnail-next-icon'
};
var GalleriaStyle = BaseStyle.extend({
  name: 'galleria',
  style: style$19,
  classes: classes$i
});

var classes$h = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-image p-component', {
      'p-image-preview': props.preview
    }];
  },
  previewMask: 'p-image-preview-mask',
  previewIcon: 'p-image-preview-icon',
  mask: 'p-image-mask p-overlay-mask p-overlay-mask-enter-active',
  toolbar: 'p-image-toolbar',
  rotateRightButton: 'p-image-action p-image-rotate-right-button',
  rotateLeftButton: 'p-image-action p-image-rotate-left-button',
  zoomOutButton: function zoomOutButton(_ref2) {
    var instance = _ref2.instance;
    return ['p-image-action p-image-zoom-out-button', {
      'p-disabled': instance.isZoomOutDisabled
    }];
  },
  zoomInButton: function zoomInButton(_ref3) {
    var instance = _ref3.instance;
    return ['p-image-action p-image-zoom-in-button', {
      'p-disabled': instance.isZoomInDisabled
    }];
  },
  closeButton: 'p-image-action p-image-close-button',
  original: 'p-image-original'
};
var ImageStyle = BaseStyle.extend({
  name: 'image',
  style: style$1a,
  classes: classes$h
});

var classes$g = {
  root: 'p-imagecompare',
  slider: 'p-imagecompare-slider'
};
var ImageCompareStyle = BaseStyle.extend({
  name: 'imagecompare',
  style: style$1b,
  classes: classes$g
});

var classes$f = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-avatar p-component', {
      'p-avatar-image': props.image != null,
      'p-avatar-circle': props.shape === 'circle',
      'p-avatar-lg': props.size === 'large',
      'p-avatar-xl': props.size === 'xlarge'
    }];
  },
  label: 'p-avatar-label',
  icon: 'p-avatar-icon'
};
var AvatarStyle = BaseStyle.extend({
  name: 'avatar',
  style: style$1c,
  classes: classes$f
});

var classes$e = {
  root: 'p-avatar-group p-component'
};
var AvatarGroupStyle = BaseStyle.extend({
  name: 'avatargroup',
  classes: classes$e
});

var classes$d = {
  root: function root(_ref) {
    var props = _ref.props,
      instance = _ref.instance;
    return ['p-badge p-component', {
      'p-badge-circle': isNotEmpty(props.value) && String(props.value).length === 1,
      'p-badge-dot': isEmpty(props.value) && !instance.$slots["default"],
      'p-badge-sm': props.size === 'small',
      'p-badge-lg': props.size === 'large',
      'p-badge-xl': props.size === 'xlarge',
      'p-badge-info': props.severity === 'info',
      'p-badge-success': props.severity === 'success',
      'p-badge-warn': props.severity === 'warn',
      'p-badge-danger': props.severity === 'danger',
      'p-badge-secondary': props.severity === 'secondary',
      'p-badge-contrast': props.severity === 'contrast'
    }];
  }
};
var BadgeStyle = BaseStyle.extend({
  name: 'badge',
  style: style$1d,
  classes: classes$d
});

var classes$c = {
  root: 'p-blockui'
};
var BlockUIStyle = BaseStyle.extend({
  name: 'blockui',
  style: style$1e,
  classes: classes$c
});

var classes$b = {
  root: 'p-chip p-component',
  image: 'p-chip-image',
  icon: 'p-chip-icon',
  label: 'p-chip-label',
  removeIcon: 'p-chip-remove-icon'
};
var ChipStyle = BaseStyle.extend({
  name: 'chip',
  style: style$1f,
  classes: classes$b
});

var classes$a = {
  root: 'p-inplace p-component',
  display: function display(_ref) {
    var props = _ref.props;
    return ['p-inplace-display', {
      'p-disabled': props.disabled
    }];
  },
  content: 'p-inplace-content'
};
var InplaceStyle = BaseStyle.extend({
  name: 'inplace',
  style: style$1g,
  classes: classes$a
});

var classes$9 = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-metergroup p-component', {
      'p-metergroup-horizontal': props.orientation === 'horizontal',
      'p-metergroup-vertical': props.orientation === 'vertical'
    }];
  },
  meters: 'p-metergroup-meters',
  meter: 'p-metergroup-meter',
  labelList: function labelList(_ref2) {
    var props = _ref2.props;
    return ['p-metergroup-label-list', {
      'p-metergroup-label-list-vertical': props.labelOrientation === 'vertical',
      'p-metergroup-label-list-horizontal': props.labelOrientation === 'horizontal'
    }];
  },
  label: 'p-metergroup-label',
  labelIcon: 'p-metergroup-label-icon',
  labelMarker: 'p-metergroup-label-marker',
  labelText: 'p-metergroup-label-text'
};
var MeterGroupStyle = BaseStyle.extend({
  name: 'metergroup',
  style: style$1h,
  classes: classes$9
});

var classes$8 = {
  root: 'p-overlaybadge'
};
var OverlayBadgeStyle = BaseStyle.extend({
  name: 'overlaybadge',
  style: style$1i,
  classes: classes$8
});

var classes$7 = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-scrolltop', {
      'p-scrolltop-sticky': props.target !== 'window'
    }];
  },
  icon: 'p-scrolltop-icon'
};
var ScrollTopStyle = BaseStyle.extend({
  name: 'scrolltop',
  style: style$1j,
  classes: classes$7
});

var inlineStyles = {
  root: {
    position: 'relative'
  }
};
var classes$6 = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-skeleton p-component', {
      'p-skeleton-circle': props.shape === 'circle',
      'p-skeleton-animation-none': props.animation === 'none'
    }];
  }
};
var SkeletonStyle = BaseStyle.extend({
  name: 'skeleton',
  style: style$1k,
  classes: classes$6,
  inlineStyles: inlineStyles
});

var classes$5 = {
  root: function root(_ref) {
    var instance = _ref.instance;
    return ['p-progressbar p-component', {
      'p-progressbar-determinate': instance.determinate,
      'p-progressbar-indeterminate': instance.indeterminate
    }];
  },
  value: 'p-progressbar-value',
  label: 'p-progressbar-label'
};
var ProgressBarStyle = BaseStyle.extend({
  name: 'progressbar',
  style: style$1l,
  classes: classes$5
});

var classes$4 = {
  root: 'p-progressspinner',
  spin: 'p-progressspinner-spin',
  circle: 'p-progressspinner-circle'
};
var ProgressSpinnerStyle = BaseStyle.extend({
  name: 'progressspinner',
  style: style$1m,
  classes: classes$4
});

var classes$3 = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-tag p-component', {
      'p-tag-info': props.severity === 'info',
      'p-tag-success': props.severity === 'success',
      'p-tag-warn': props.severity === 'warn',
      'p-tag-danger': props.severity === 'danger',
      'p-tag-secondary': props.severity === 'secondary',
      'p-tag-contrast': props.severity === 'contrast',
      'p-tag-rounded': props.rounded
    }];
  },
  icon: 'p-tag-icon',
  label: 'p-tag-label'
};
var TagStyle = BaseStyle.extend({
  name: 'tag',
  style: style$1n,
  classes: classes$3
});

var classes$2 = {
  root: 'p-terminal p-component',
  welcomeMessage: 'p-terminal-welcome-message',
  commandList: 'p-terminal-command-list',
  command: 'p-terminal-command',
  commandValue: 'p-terminal-command-value',
  commandResponse: 'p-terminal-command-response',
  prompt: 'p-terminal-prompt',
  promptLabel: 'p-terminal-prompt-label',
  promptValue: 'p-terminal-prompt-value'
};
var TerminalStyle = BaseStyle.extend({
  name: 'terminal',
  style: style$1o,
  classes: classes$2
});

var classes$1 = {
  root: 'p-tooltip p-component',
  arrow: 'p-tooltip-arrow',
  text: 'p-tooltip-text'
};
var TooltipStyle = BaseStyle.extend({
  name: 'tooltip-directive',
  style: style$1p,
  classes: classes$1
});

var classes = {
  root: 'p-ink'
};
var RippleStyle = BaseStyle.extend({
  name: 'ripple-directive',
  style: style$1q,
  classes: classes
});

var StyleClassStyle = BaseStyle.extend({
  name: 'styleclass-directive'
});

var FocusTrapStyle = BaseStyle.extend({
  name: 'focustrap-directive'
});

var AnimateOnScrollStyle = BaseStyle.extend({
  name: 'animateonscroll-directive'
});

var KeyFilterStyle = BaseStyle.extend({
  name: 'keyfilter-directive'
});

const runtimeConfig = useRuntimeConfig();
const config = runtimeConfig?.public?.primevue ?? {};
const { options = {} } = config;

const stylesToTop = [].join('');
const styleProps = {
    
};
const styles$2 = [
    ,
    BaseStyle && BaseStyle.getStyleSheet ? BaseStyle.getStyleSheet(undefined, styleProps) : '',BaseComponentStyle && BaseComponentStyle.getStyleSheet ? BaseComponentStyle.getStyleSheet(undefined, styleProps) : '',AutoCompleteStyle && AutoCompleteStyle.getStyleSheet ? AutoCompleteStyle.getStyleSheet(undefined, styleProps) : '',CalendarStyle && CalendarStyle.getStyleSheet ? CalendarStyle.getStyleSheet(undefined, styleProps) : '',CascadeSelectStyle && CascadeSelectStyle.getStyleSheet ? CascadeSelectStyle.getStyleSheet(undefined, styleProps) : '',CheckboxStyle && CheckboxStyle.getStyleSheet ? CheckboxStyle.getStyleSheet(undefined, styleProps) : '',CheckboxGroupStyle && CheckboxGroupStyle.getStyleSheet ? CheckboxGroupStyle.getStyleSheet(undefined, styleProps) : '',ChipsStyle && ChipsStyle.getStyleSheet ? ChipsStyle.getStyleSheet(undefined, styleProps) : '',ColorPickerStyle && ColorPickerStyle.getStyleSheet ? ColorPickerStyle.getStyleSheet(undefined, styleProps) : '',DatePickerStyle && DatePickerStyle.getStyleSheet ? DatePickerStyle.getStyleSheet(undefined, styleProps) : '',DropdownStyle && DropdownStyle.getStyleSheet ? DropdownStyle.getStyleSheet(undefined, styleProps) : '',FloatLabelStyle && FloatLabelStyle.getStyleSheet ? FloatLabelStyle.getStyleSheet(undefined, styleProps) : '',FluidStyle && FluidStyle.getStyleSheet ? FluidStyle.getStyleSheet(undefined, styleProps) : '',IconFieldStyle && IconFieldStyle.getStyleSheet ? IconFieldStyle.getStyleSheet(undefined, styleProps) : '',IftaLabelStyle && IftaLabelStyle.getStyleSheet ? IftaLabelStyle.getStyleSheet(undefined, styleProps) : '',InputChipsStyle && InputChipsStyle.getStyleSheet ? InputChipsStyle.getStyleSheet(undefined, styleProps) : '',InputGroupStyle && InputGroupStyle.getStyleSheet ? InputGroupStyle.getStyleSheet(undefined, styleProps) : '',InputGroupAddonStyle && InputGroupAddonStyle.getStyleSheet ? InputGroupAddonStyle.getStyleSheet(undefined, styleProps) : '',InputIconStyle && InputIconStyle.getStyleSheet ? InputIconStyle.getStyleSheet(undefined, styleProps) : '',InputMaskStyle && InputMaskStyle.getStyleSheet ? InputMaskStyle.getStyleSheet(undefined, styleProps) : '',InputNumberStyle && InputNumberStyle.getStyleSheet ? InputNumberStyle.getStyleSheet(undefined, styleProps) : '',InputOtpStyle && InputOtpStyle.getStyleSheet ? InputOtpStyle.getStyleSheet(undefined, styleProps) : '',InputSwitchStyle && InputSwitchStyle.getStyleSheet ? InputSwitchStyle.getStyleSheet(undefined, styleProps) : '',InputTextStyle && InputTextStyle.getStyleSheet ? InputTextStyle.getStyleSheet(undefined, styleProps) : '',KnobStyle && KnobStyle.getStyleSheet ? KnobStyle.getStyleSheet(undefined, styleProps) : '',ListboxStyle && ListboxStyle.getStyleSheet ? ListboxStyle.getStyleSheet(undefined, styleProps) : '',MultiSelectStyle && MultiSelectStyle.getStyleSheet ? MultiSelectStyle.getStyleSheet(undefined, styleProps) : '',PasswordStyle && PasswordStyle.getStyleSheet ? PasswordStyle.getStyleSheet(undefined, styleProps) : '',RadioButtonStyle && RadioButtonStyle.getStyleSheet ? RadioButtonStyle.getStyleSheet(undefined, styleProps) : '',RadioButtonGroupStyle && RadioButtonGroupStyle.getStyleSheet ? RadioButtonGroupStyle.getStyleSheet(undefined, styleProps) : '',RatingStyle && RatingStyle.getStyleSheet ? RatingStyle.getStyleSheet(undefined, styleProps) : '',SelectStyle && SelectStyle.getStyleSheet ? SelectStyle.getStyleSheet(undefined, styleProps) : '',SelectButtonStyle && SelectButtonStyle.getStyleSheet ? SelectButtonStyle.getStyleSheet(undefined, styleProps) : '',SliderStyle && SliderStyle.getStyleSheet ? SliderStyle.getStyleSheet(undefined, styleProps) : '',TextareaStyle && TextareaStyle.getStyleSheet ? TextareaStyle.getStyleSheet(undefined, styleProps) : '',ToggleButtonStyle && ToggleButtonStyle.getStyleSheet ? ToggleButtonStyle.getStyleSheet(undefined, styleProps) : '',ToggleSwitchStyle && ToggleSwitchStyle.getStyleSheet ? ToggleSwitchStyle.getStyleSheet(undefined, styleProps) : '',TreeSelectStyle && TreeSelectStyle.getStyleSheet ? TreeSelectStyle.getStyleSheet(undefined, styleProps) : '',ButtonStyle && ButtonStyle.getStyleSheet ? ButtonStyle.getStyleSheet(undefined, styleProps) : '',ButtonGroupStyle && ButtonGroupStyle.getStyleSheet ? ButtonGroupStyle.getStyleSheet(undefined, styleProps) : '',SpeedDialStyle && SpeedDialStyle.getStyleSheet ? SpeedDialStyle.getStyleSheet(undefined, styleProps) : '',SplitButtonStyle && SplitButtonStyle.getStyleSheet ? SplitButtonStyle.getStyleSheet(undefined, styleProps) : '',ColumnStyle && ColumnStyle.getStyleSheet ? ColumnStyle.getStyleSheet(undefined, styleProps) : '',RowStyle && RowStyle.getStyleSheet ? RowStyle.getStyleSheet(undefined, styleProps) : '',ColumnGroupStyle && ColumnGroupStyle.getStyleSheet ? ColumnGroupStyle.getStyleSheet(undefined, styleProps) : '',DataTableStyle && DataTableStyle.getStyleSheet ? DataTableStyle.getStyleSheet(undefined, styleProps) : '',DataViewStyle && DataViewStyle.getStyleSheet ? DataViewStyle.getStyleSheet(undefined, styleProps) : '',OrderListStyle && OrderListStyle.getStyleSheet ? OrderListStyle.getStyleSheet(undefined, styleProps) : '',OrganizationChartStyle && OrganizationChartStyle.getStyleSheet ? OrganizationChartStyle.getStyleSheet(undefined, styleProps) : '',PaginatorStyle && PaginatorStyle.getStyleSheet ? PaginatorStyle.getStyleSheet(undefined, styleProps) : '',PickListStyle && PickListStyle.getStyleSheet ? PickListStyle.getStyleSheet(undefined, styleProps) : '',TreeStyle && TreeStyle.getStyleSheet ? TreeStyle.getStyleSheet(undefined, styleProps) : '',TreeTableStyle && TreeTableStyle.getStyleSheet ? TreeTableStyle.getStyleSheet(undefined, styleProps) : '',TimelineStyle && TimelineStyle.getStyleSheet ? TimelineStyle.getStyleSheet(undefined, styleProps) : '',VirtualScrollerStyle && VirtualScrollerStyle.getStyleSheet ? VirtualScrollerStyle.getStyleSheet(undefined, styleProps) : '',AccordionStyle && AccordionStyle.getStyleSheet ? AccordionStyle.getStyleSheet(undefined, styleProps) : '',AccordionPanelStyle && AccordionPanelStyle.getStyleSheet ? AccordionPanelStyle.getStyleSheet(undefined, styleProps) : '',AccordionHeaderStyle && AccordionHeaderStyle.getStyleSheet ? AccordionHeaderStyle.getStyleSheet(undefined, styleProps) : '',AccordionContentStyle && AccordionContentStyle.getStyleSheet ? AccordionContentStyle.getStyleSheet(undefined, styleProps) : '',AccordionTabStyle && AccordionTabStyle.getStyleSheet ? AccordionTabStyle.getStyleSheet(undefined, styleProps) : '',CardStyle && CardStyle.getStyleSheet ? CardStyle.getStyleSheet(undefined, styleProps) : '',DeferredContentStyle && DeferredContentStyle.getStyleSheet ? DeferredContentStyle.getStyleSheet(undefined, styleProps) : '',DividerStyle && DividerStyle.getStyleSheet ? DividerStyle.getStyleSheet(undefined, styleProps) : '',FieldsetStyle && FieldsetStyle.getStyleSheet ? FieldsetStyle.getStyleSheet(undefined, styleProps) : '',PanelStyle && PanelStyle.getStyleSheet ? PanelStyle.getStyleSheet(undefined, styleProps) : '',ScrollPanelStyle && ScrollPanelStyle.getStyleSheet ? ScrollPanelStyle.getStyleSheet(undefined, styleProps) : '',SplitterStyle && SplitterStyle.getStyleSheet ? SplitterStyle.getStyleSheet(undefined, styleProps) : '',SplitterPanelStyle && SplitterPanelStyle.getStyleSheet ? SplitterPanelStyle.getStyleSheet(undefined, styleProps) : '',StepperStyle && StepperStyle.getStyleSheet ? StepperStyle.getStyleSheet(undefined, styleProps) : '',StepListStyle && StepListStyle.getStyleSheet ? StepListStyle.getStyleSheet(undefined, styleProps) : '',StepStyle && StepStyle.getStyleSheet ? StepStyle.getStyleSheet(undefined, styleProps) : '',StepItemStyle && StepItemStyle.getStyleSheet ? StepItemStyle.getStyleSheet(undefined, styleProps) : '',StepPanelsStyle && StepPanelsStyle.getStyleSheet ? StepPanelsStyle.getStyleSheet(undefined, styleProps) : '',StepPanelStyle && StepPanelStyle.getStyleSheet ? StepPanelStyle.getStyleSheet(undefined, styleProps) : '',TabViewStyle && TabViewStyle.getStyleSheet ? TabViewStyle.getStyleSheet(undefined, styleProps) : '',TabsStyle && TabsStyle.getStyleSheet ? TabsStyle.getStyleSheet(undefined, styleProps) : '',TabListStyle && TabListStyle.getStyleSheet ? TabListStyle.getStyleSheet(undefined, styleProps) : '',TabStyle && TabStyle.getStyleSheet ? TabStyle.getStyleSheet(undefined, styleProps) : '',TabPanelsStyle && TabPanelsStyle.getStyleSheet ? TabPanelsStyle.getStyleSheet(undefined, styleProps) : '',TabPanelStyle && TabPanelStyle.getStyleSheet ? TabPanelStyle.getStyleSheet(undefined, styleProps) : '',ToolbarStyle && ToolbarStyle.getStyleSheet ? ToolbarStyle.getStyleSheet(undefined, styleProps) : '',ConfirmDialogStyle && ConfirmDialogStyle.getStyleSheet ? ConfirmDialogStyle.getStyleSheet(undefined, styleProps) : '',ConfirmPopupStyle && ConfirmPopupStyle.getStyleSheet ? ConfirmPopupStyle.getStyleSheet(undefined, styleProps) : '',DialogStyle && DialogStyle.getStyleSheet ? DialogStyle.getStyleSheet(undefined, styleProps) : '',DrawerStyle && DrawerStyle.getStyleSheet ? DrawerStyle.getStyleSheet(undefined, styleProps) : '',DynamicDialogStyle && DynamicDialogStyle.getStyleSheet ? DynamicDialogStyle.getStyleSheet(undefined, styleProps) : '',OverlayPanelStyle && OverlayPanelStyle.getStyleSheet ? OverlayPanelStyle.getStyleSheet(undefined, styleProps) : '',PopoverStyle && PopoverStyle.getStyleSheet ? PopoverStyle.getStyleSheet(undefined, styleProps) : '',SidebarStyle && SidebarStyle.getStyleSheet ? SidebarStyle.getStyleSheet(undefined, styleProps) : '',FileUploadStyle && FileUploadStyle.getStyleSheet ? FileUploadStyle.getStyleSheet(undefined, styleProps) : '',BreadcrumbStyle && BreadcrumbStyle.getStyleSheet ? BreadcrumbStyle.getStyleSheet(undefined, styleProps) : '',ContextMenuStyle && ContextMenuStyle.getStyleSheet ? ContextMenuStyle.getStyleSheet(undefined, styleProps) : '',DockStyle && DockStyle.getStyleSheet ? DockStyle.getStyleSheet(undefined, styleProps) : '',MenuStyle && MenuStyle.getStyleSheet ? MenuStyle.getStyleSheet(undefined, styleProps) : '',MenubarStyle && MenubarStyle.getStyleSheet ? MenubarStyle.getStyleSheet(undefined, styleProps) : '',MegaMenuStyle && MegaMenuStyle.getStyleSheet ? MegaMenuStyle.getStyleSheet(undefined, styleProps) : '',PanelMenuStyle && PanelMenuStyle.getStyleSheet ? PanelMenuStyle.getStyleSheet(undefined, styleProps) : '',StepsStyle && StepsStyle.getStyleSheet ? StepsStyle.getStyleSheet(undefined, styleProps) : '',TabMenuStyle && TabMenuStyle.getStyleSheet ? TabMenuStyle.getStyleSheet(undefined, styleProps) : '',TieredMenuStyle && TieredMenuStyle.getStyleSheet ? TieredMenuStyle.getStyleSheet(undefined, styleProps) : '',MessageStyle && MessageStyle.getStyleSheet ? MessageStyle.getStyleSheet(undefined, styleProps) : '',InlineMessageStyle && InlineMessageStyle.getStyleSheet ? InlineMessageStyle.getStyleSheet(undefined, styleProps) : '',ToastStyle && ToastStyle.getStyleSheet ? ToastStyle.getStyleSheet(undefined, styleProps) : '',CarouselStyle && CarouselStyle.getStyleSheet ? CarouselStyle.getStyleSheet(undefined, styleProps) : '',GalleriaStyle && GalleriaStyle.getStyleSheet ? GalleriaStyle.getStyleSheet(undefined, styleProps) : '',ImageStyle && ImageStyle.getStyleSheet ? ImageStyle.getStyleSheet(undefined, styleProps) : '',ImageCompareStyle && ImageCompareStyle.getStyleSheet ? ImageCompareStyle.getStyleSheet(undefined, styleProps) : '',AvatarStyle && AvatarStyle.getStyleSheet ? AvatarStyle.getStyleSheet(undefined, styleProps) : '',AvatarGroupStyle && AvatarGroupStyle.getStyleSheet ? AvatarGroupStyle.getStyleSheet(undefined, styleProps) : '',BadgeStyle && BadgeStyle.getStyleSheet ? BadgeStyle.getStyleSheet(undefined, styleProps) : '',BlockUIStyle && BlockUIStyle.getStyleSheet ? BlockUIStyle.getStyleSheet(undefined, styleProps) : '',ChipStyle && ChipStyle.getStyleSheet ? ChipStyle.getStyleSheet(undefined, styleProps) : '',InplaceStyle && InplaceStyle.getStyleSheet ? InplaceStyle.getStyleSheet(undefined, styleProps) : '',MeterGroupStyle && MeterGroupStyle.getStyleSheet ? MeterGroupStyle.getStyleSheet(undefined, styleProps) : '',OverlayBadgeStyle && OverlayBadgeStyle.getStyleSheet ? OverlayBadgeStyle.getStyleSheet(undefined, styleProps) : '',ScrollTopStyle && ScrollTopStyle.getStyleSheet ? ScrollTopStyle.getStyleSheet(undefined, styleProps) : '',SkeletonStyle && SkeletonStyle.getStyleSheet ? SkeletonStyle.getStyleSheet(undefined, styleProps) : '',ProgressBarStyle && ProgressBarStyle.getStyleSheet ? ProgressBarStyle.getStyleSheet(undefined, styleProps) : '',ProgressSpinnerStyle && ProgressSpinnerStyle.getStyleSheet ? ProgressSpinnerStyle.getStyleSheet(undefined, styleProps) : '',TagStyle && TagStyle.getStyleSheet ? TagStyle.getStyleSheet(undefined, styleProps) : '',TerminalStyle && TerminalStyle.getStyleSheet ? TerminalStyle.getStyleSheet(undefined, styleProps) : '',FormStyle && FormStyle.getStyleSheet ? FormStyle.getStyleSheet(undefined, styleProps) : '',FormFieldStyle && FormFieldStyle.getStyleSheet ? FormFieldStyle.getStyleSheet(undefined, styleProps) : '',TooltipStyle && TooltipStyle.getStyleSheet ? TooltipStyle.getStyleSheet(undefined, styleProps) : '',RippleStyle && RippleStyle.getStyleSheet ? RippleStyle.getStyleSheet(undefined, styleProps) : '',StyleClassStyle && StyleClassStyle.getStyleSheet ? StyleClassStyle.getStyleSheet(undefined, styleProps) : '',FocusTrapStyle && FocusTrapStyle.getStyleSheet ? FocusTrapStyle.getStyleSheet(undefined, styleProps) : '',AnimateOnScrollStyle && AnimateOnScrollStyle.getStyleSheet ? AnimateOnScrollStyle.getStyleSheet(undefined, styleProps) : '',KeyFilterStyle && KeyFilterStyle.getStyleSheet ? KeyFilterStyle.getStyleSheet(undefined, styleProps) : ''
].join('');

Theme.setTheme(options?.theme);

const themes = 
[
    BaseStyle && BaseStyle.getCommonThemeStyleSheet ? BaseStyle.getCommonThemeStyleSheet(undefined, styleProps) : '',
    BaseStyle && BaseStyle.getThemeStyleSheet ? BaseStyle.getThemeStyleSheet(undefined, styleProps) : '',BaseComponentStyle && BaseComponentStyle.getThemeStyleSheet ? BaseComponentStyle.getThemeStyleSheet(undefined, styleProps) : '',AutoCompleteStyle && AutoCompleteStyle.getThemeStyleSheet ? AutoCompleteStyle.getThemeStyleSheet(undefined, styleProps) : '',CalendarStyle && CalendarStyle.getThemeStyleSheet ? CalendarStyle.getThemeStyleSheet(undefined, styleProps) : '',CascadeSelectStyle && CascadeSelectStyle.getThemeStyleSheet ? CascadeSelectStyle.getThemeStyleSheet(undefined, styleProps) : '',CheckboxStyle && CheckboxStyle.getThemeStyleSheet ? CheckboxStyle.getThemeStyleSheet(undefined, styleProps) : '',CheckboxGroupStyle && CheckboxGroupStyle.getThemeStyleSheet ? CheckboxGroupStyle.getThemeStyleSheet(undefined, styleProps) : '',ChipsStyle && ChipsStyle.getThemeStyleSheet ? ChipsStyle.getThemeStyleSheet(undefined, styleProps) : '',ColorPickerStyle && ColorPickerStyle.getThemeStyleSheet ? ColorPickerStyle.getThemeStyleSheet(undefined, styleProps) : '',DatePickerStyle && DatePickerStyle.getThemeStyleSheet ? DatePickerStyle.getThemeStyleSheet(undefined, styleProps) : '',DropdownStyle && DropdownStyle.getThemeStyleSheet ? DropdownStyle.getThemeStyleSheet(undefined, styleProps) : '',FloatLabelStyle && FloatLabelStyle.getThemeStyleSheet ? FloatLabelStyle.getThemeStyleSheet(undefined, styleProps) : '',FluidStyle && FluidStyle.getThemeStyleSheet ? FluidStyle.getThemeStyleSheet(undefined, styleProps) : '',IconFieldStyle && IconFieldStyle.getThemeStyleSheet ? IconFieldStyle.getThemeStyleSheet(undefined, styleProps) : '',IftaLabelStyle && IftaLabelStyle.getThemeStyleSheet ? IftaLabelStyle.getThemeStyleSheet(undefined, styleProps) : '',InputChipsStyle && InputChipsStyle.getThemeStyleSheet ? InputChipsStyle.getThemeStyleSheet(undefined, styleProps) : '',InputGroupStyle && InputGroupStyle.getThemeStyleSheet ? InputGroupStyle.getThemeStyleSheet(undefined, styleProps) : '',InputGroupAddonStyle && InputGroupAddonStyle.getThemeStyleSheet ? InputGroupAddonStyle.getThemeStyleSheet(undefined, styleProps) : '',InputIconStyle && InputIconStyle.getThemeStyleSheet ? InputIconStyle.getThemeStyleSheet(undefined, styleProps) : '',InputMaskStyle && InputMaskStyle.getThemeStyleSheet ? InputMaskStyle.getThemeStyleSheet(undefined, styleProps) : '',InputNumberStyle && InputNumberStyle.getThemeStyleSheet ? InputNumberStyle.getThemeStyleSheet(undefined, styleProps) : '',InputOtpStyle && InputOtpStyle.getThemeStyleSheet ? InputOtpStyle.getThemeStyleSheet(undefined, styleProps) : '',InputSwitchStyle && InputSwitchStyle.getThemeStyleSheet ? InputSwitchStyle.getThemeStyleSheet(undefined, styleProps) : '',InputTextStyle && InputTextStyle.getThemeStyleSheet ? InputTextStyle.getThemeStyleSheet(undefined, styleProps) : '',KnobStyle && KnobStyle.getThemeStyleSheet ? KnobStyle.getThemeStyleSheet(undefined, styleProps) : '',ListboxStyle && ListboxStyle.getThemeStyleSheet ? ListboxStyle.getThemeStyleSheet(undefined, styleProps) : '',MultiSelectStyle && MultiSelectStyle.getThemeStyleSheet ? MultiSelectStyle.getThemeStyleSheet(undefined, styleProps) : '',PasswordStyle && PasswordStyle.getThemeStyleSheet ? PasswordStyle.getThemeStyleSheet(undefined, styleProps) : '',RadioButtonStyle && RadioButtonStyle.getThemeStyleSheet ? RadioButtonStyle.getThemeStyleSheet(undefined, styleProps) : '',RadioButtonGroupStyle && RadioButtonGroupStyle.getThemeStyleSheet ? RadioButtonGroupStyle.getThemeStyleSheet(undefined, styleProps) : '',RatingStyle && RatingStyle.getThemeStyleSheet ? RatingStyle.getThemeStyleSheet(undefined, styleProps) : '',SelectStyle && SelectStyle.getThemeStyleSheet ? SelectStyle.getThemeStyleSheet(undefined, styleProps) : '',SelectButtonStyle && SelectButtonStyle.getThemeStyleSheet ? SelectButtonStyle.getThemeStyleSheet(undefined, styleProps) : '',SliderStyle && SliderStyle.getThemeStyleSheet ? SliderStyle.getThemeStyleSheet(undefined, styleProps) : '',TextareaStyle && TextareaStyle.getThemeStyleSheet ? TextareaStyle.getThemeStyleSheet(undefined, styleProps) : '',ToggleButtonStyle && ToggleButtonStyle.getThemeStyleSheet ? ToggleButtonStyle.getThemeStyleSheet(undefined, styleProps) : '',ToggleSwitchStyle && ToggleSwitchStyle.getThemeStyleSheet ? ToggleSwitchStyle.getThemeStyleSheet(undefined, styleProps) : '',TreeSelectStyle && TreeSelectStyle.getThemeStyleSheet ? TreeSelectStyle.getThemeStyleSheet(undefined, styleProps) : '',ButtonStyle && ButtonStyle.getThemeStyleSheet ? ButtonStyle.getThemeStyleSheet(undefined, styleProps) : '',ButtonGroupStyle && ButtonGroupStyle.getThemeStyleSheet ? ButtonGroupStyle.getThemeStyleSheet(undefined, styleProps) : '',SpeedDialStyle && SpeedDialStyle.getThemeStyleSheet ? SpeedDialStyle.getThemeStyleSheet(undefined, styleProps) : '',SplitButtonStyle && SplitButtonStyle.getThemeStyleSheet ? SplitButtonStyle.getThemeStyleSheet(undefined, styleProps) : '',ColumnStyle && ColumnStyle.getThemeStyleSheet ? ColumnStyle.getThemeStyleSheet(undefined, styleProps) : '',RowStyle && RowStyle.getThemeStyleSheet ? RowStyle.getThemeStyleSheet(undefined, styleProps) : '',ColumnGroupStyle && ColumnGroupStyle.getThemeStyleSheet ? ColumnGroupStyle.getThemeStyleSheet(undefined, styleProps) : '',DataTableStyle && DataTableStyle.getThemeStyleSheet ? DataTableStyle.getThemeStyleSheet(undefined, styleProps) : '',DataViewStyle && DataViewStyle.getThemeStyleSheet ? DataViewStyle.getThemeStyleSheet(undefined, styleProps) : '',OrderListStyle && OrderListStyle.getThemeStyleSheet ? OrderListStyle.getThemeStyleSheet(undefined, styleProps) : '',OrganizationChartStyle && OrganizationChartStyle.getThemeStyleSheet ? OrganizationChartStyle.getThemeStyleSheet(undefined, styleProps) : '',PaginatorStyle && PaginatorStyle.getThemeStyleSheet ? PaginatorStyle.getThemeStyleSheet(undefined, styleProps) : '',PickListStyle && PickListStyle.getThemeStyleSheet ? PickListStyle.getThemeStyleSheet(undefined, styleProps) : '',TreeStyle && TreeStyle.getThemeStyleSheet ? TreeStyle.getThemeStyleSheet(undefined, styleProps) : '',TreeTableStyle && TreeTableStyle.getThemeStyleSheet ? TreeTableStyle.getThemeStyleSheet(undefined, styleProps) : '',TimelineStyle && TimelineStyle.getThemeStyleSheet ? TimelineStyle.getThemeStyleSheet(undefined, styleProps) : '',VirtualScrollerStyle && VirtualScrollerStyle.getThemeStyleSheet ? VirtualScrollerStyle.getThemeStyleSheet(undefined, styleProps) : '',AccordionStyle && AccordionStyle.getThemeStyleSheet ? AccordionStyle.getThemeStyleSheet(undefined, styleProps) : '',AccordionPanelStyle && AccordionPanelStyle.getThemeStyleSheet ? AccordionPanelStyle.getThemeStyleSheet(undefined, styleProps) : '',AccordionHeaderStyle && AccordionHeaderStyle.getThemeStyleSheet ? AccordionHeaderStyle.getThemeStyleSheet(undefined, styleProps) : '',AccordionContentStyle && AccordionContentStyle.getThemeStyleSheet ? AccordionContentStyle.getThemeStyleSheet(undefined, styleProps) : '',AccordionTabStyle && AccordionTabStyle.getThemeStyleSheet ? AccordionTabStyle.getThemeStyleSheet(undefined, styleProps) : '',CardStyle && CardStyle.getThemeStyleSheet ? CardStyle.getThemeStyleSheet(undefined, styleProps) : '',DeferredContentStyle && DeferredContentStyle.getThemeStyleSheet ? DeferredContentStyle.getThemeStyleSheet(undefined, styleProps) : '',DividerStyle && DividerStyle.getThemeStyleSheet ? DividerStyle.getThemeStyleSheet(undefined, styleProps) : '',FieldsetStyle && FieldsetStyle.getThemeStyleSheet ? FieldsetStyle.getThemeStyleSheet(undefined, styleProps) : '',PanelStyle && PanelStyle.getThemeStyleSheet ? PanelStyle.getThemeStyleSheet(undefined, styleProps) : '',ScrollPanelStyle && ScrollPanelStyle.getThemeStyleSheet ? ScrollPanelStyle.getThemeStyleSheet(undefined, styleProps) : '',SplitterStyle && SplitterStyle.getThemeStyleSheet ? SplitterStyle.getThemeStyleSheet(undefined, styleProps) : '',SplitterPanelStyle && SplitterPanelStyle.getThemeStyleSheet ? SplitterPanelStyle.getThemeStyleSheet(undefined, styleProps) : '',StepperStyle && StepperStyle.getThemeStyleSheet ? StepperStyle.getThemeStyleSheet(undefined, styleProps) : '',StepListStyle && StepListStyle.getThemeStyleSheet ? StepListStyle.getThemeStyleSheet(undefined, styleProps) : '',StepStyle && StepStyle.getThemeStyleSheet ? StepStyle.getThemeStyleSheet(undefined, styleProps) : '',StepItemStyle && StepItemStyle.getThemeStyleSheet ? StepItemStyle.getThemeStyleSheet(undefined, styleProps) : '',StepPanelsStyle && StepPanelsStyle.getThemeStyleSheet ? StepPanelsStyle.getThemeStyleSheet(undefined, styleProps) : '',StepPanelStyle && StepPanelStyle.getThemeStyleSheet ? StepPanelStyle.getThemeStyleSheet(undefined, styleProps) : '',TabViewStyle && TabViewStyle.getThemeStyleSheet ? TabViewStyle.getThemeStyleSheet(undefined, styleProps) : '',TabsStyle && TabsStyle.getThemeStyleSheet ? TabsStyle.getThemeStyleSheet(undefined, styleProps) : '',TabListStyle && TabListStyle.getThemeStyleSheet ? TabListStyle.getThemeStyleSheet(undefined, styleProps) : '',TabStyle && TabStyle.getThemeStyleSheet ? TabStyle.getThemeStyleSheet(undefined, styleProps) : '',TabPanelsStyle && TabPanelsStyle.getThemeStyleSheet ? TabPanelsStyle.getThemeStyleSheet(undefined, styleProps) : '',TabPanelStyle && TabPanelStyle.getThemeStyleSheet ? TabPanelStyle.getThemeStyleSheet(undefined, styleProps) : '',ToolbarStyle && ToolbarStyle.getThemeStyleSheet ? ToolbarStyle.getThemeStyleSheet(undefined, styleProps) : '',ConfirmDialogStyle && ConfirmDialogStyle.getThemeStyleSheet ? ConfirmDialogStyle.getThemeStyleSheet(undefined, styleProps) : '',ConfirmPopupStyle && ConfirmPopupStyle.getThemeStyleSheet ? ConfirmPopupStyle.getThemeStyleSheet(undefined, styleProps) : '',DialogStyle && DialogStyle.getThemeStyleSheet ? DialogStyle.getThemeStyleSheet(undefined, styleProps) : '',DrawerStyle && DrawerStyle.getThemeStyleSheet ? DrawerStyle.getThemeStyleSheet(undefined, styleProps) : '',DynamicDialogStyle && DynamicDialogStyle.getThemeStyleSheet ? DynamicDialogStyle.getThemeStyleSheet(undefined, styleProps) : '',OverlayPanelStyle && OverlayPanelStyle.getThemeStyleSheet ? OverlayPanelStyle.getThemeStyleSheet(undefined, styleProps) : '',PopoverStyle && PopoverStyle.getThemeStyleSheet ? PopoverStyle.getThemeStyleSheet(undefined, styleProps) : '',SidebarStyle && SidebarStyle.getThemeStyleSheet ? SidebarStyle.getThemeStyleSheet(undefined, styleProps) : '',FileUploadStyle && FileUploadStyle.getThemeStyleSheet ? FileUploadStyle.getThemeStyleSheet(undefined, styleProps) : '',BreadcrumbStyle && BreadcrumbStyle.getThemeStyleSheet ? BreadcrumbStyle.getThemeStyleSheet(undefined, styleProps) : '',ContextMenuStyle && ContextMenuStyle.getThemeStyleSheet ? ContextMenuStyle.getThemeStyleSheet(undefined, styleProps) : '',DockStyle && DockStyle.getThemeStyleSheet ? DockStyle.getThemeStyleSheet(undefined, styleProps) : '',MenuStyle && MenuStyle.getThemeStyleSheet ? MenuStyle.getThemeStyleSheet(undefined, styleProps) : '',MenubarStyle && MenubarStyle.getThemeStyleSheet ? MenubarStyle.getThemeStyleSheet(undefined, styleProps) : '',MegaMenuStyle && MegaMenuStyle.getThemeStyleSheet ? MegaMenuStyle.getThemeStyleSheet(undefined, styleProps) : '',PanelMenuStyle && PanelMenuStyle.getThemeStyleSheet ? PanelMenuStyle.getThemeStyleSheet(undefined, styleProps) : '',StepsStyle && StepsStyle.getThemeStyleSheet ? StepsStyle.getThemeStyleSheet(undefined, styleProps) : '',TabMenuStyle && TabMenuStyle.getThemeStyleSheet ? TabMenuStyle.getThemeStyleSheet(undefined, styleProps) : '',TieredMenuStyle && TieredMenuStyle.getThemeStyleSheet ? TieredMenuStyle.getThemeStyleSheet(undefined, styleProps) : '',MessageStyle && MessageStyle.getThemeStyleSheet ? MessageStyle.getThemeStyleSheet(undefined, styleProps) : '',InlineMessageStyle && InlineMessageStyle.getThemeStyleSheet ? InlineMessageStyle.getThemeStyleSheet(undefined, styleProps) : '',ToastStyle && ToastStyle.getThemeStyleSheet ? ToastStyle.getThemeStyleSheet(undefined, styleProps) : '',CarouselStyle && CarouselStyle.getThemeStyleSheet ? CarouselStyle.getThemeStyleSheet(undefined, styleProps) : '',GalleriaStyle && GalleriaStyle.getThemeStyleSheet ? GalleriaStyle.getThemeStyleSheet(undefined, styleProps) : '',ImageStyle && ImageStyle.getThemeStyleSheet ? ImageStyle.getThemeStyleSheet(undefined, styleProps) : '',ImageCompareStyle && ImageCompareStyle.getThemeStyleSheet ? ImageCompareStyle.getThemeStyleSheet(undefined, styleProps) : '',AvatarStyle && AvatarStyle.getThemeStyleSheet ? AvatarStyle.getThemeStyleSheet(undefined, styleProps) : '',AvatarGroupStyle && AvatarGroupStyle.getThemeStyleSheet ? AvatarGroupStyle.getThemeStyleSheet(undefined, styleProps) : '',BadgeStyle && BadgeStyle.getThemeStyleSheet ? BadgeStyle.getThemeStyleSheet(undefined, styleProps) : '',BlockUIStyle && BlockUIStyle.getThemeStyleSheet ? BlockUIStyle.getThemeStyleSheet(undefined, styleProps) : '',ChipStyle && ChipStyle.getThemeStyleSheet ? ChipStyle.getThemeStyleSheet(undefined, styleProps) : '',InplaceStyle && InplaceStyle.getThemeStyleSheet ? InplaceStyle.getThemeStyleSheet(undefined, styleProps) : '',MeterGroupStyle && MeterGroupStyle.getThemeStyleSheet ? MeterGroupStyle.getThemeStyleSheet(undefined, styleProps) : '',OverlayBadgeStyle && OverlayBadgeStyle.getThemeStyleSheet ? OverlayBadgeStyle.getThemeStyleSheet(undefined, styleProps) : '',ScrollTopStyle && ScrollTopStyle.getThemeStyleSheet ? ScrollTopStyle.getThemeStyleSheet(undefined, styleProps) : '',SkeletonStyle && SkeletonStyle.getThemeStyleSheet ? SkeletonStyle.getThemeStyleSheet(undefined, styleProps) : '',ProgressBarStyle && ProgressBarStyle.getThemeStyleSheet ? ProgressBarStyle.getThemeStyleSheet(undefined, styleProps) : '',ProgressSpinnerStyle && ProgressSpinnerStyle.getThemeStyleSheet ? ProgressSpinnerStyle.getThemeStyleSheet(undefined, styleProps) : '',TagStyle && TagStyle.getThemeStyleSheet ? TagStyle.getThemeStyleSheet(undefined, styleProps) : '',TerminalStyle && TerminalStyle.getThemeStyleSheet ? TerminalStyle.getThemeStyleSheet(undefined, styleProps) : '',FormStyle && FormStyle.getThemeStyleSheet ? FormStyle.getThemeStyleSheet(undefined, styleProps) : '',FormFieldStyle && FormFieldStyle.getThemeStyleSheet ? FormFieldStyle.getThemeStyleSheet(undefined, styleProps) : '',TooltipStyle && TooltipStyle.getThemeStyleSheet ? TooltipStyle.getThemeStyleSheet(undefined, styleProps) : '',RippleStyle && RippleStyle.getThemeStyleSheet ? RippleStyle.getThemeStyleSheet(undefined, styleProps) : '',StyleClassStyle && StyleClassStyle.getThemeStyleSheet ? StyleClassStyle.getThemeStyleSheet(undefined, styleProps) : '',FocusTrapStyle && FocusTrapStyle.getThemeStyleSheet ? FocusTrapStyle.getThemeStyleSheet(undefined, styleProps) : '',AnimateOnScrollStyle && AnimateOnScrollStyle.getThemeStyleSheet ? AnimateOnScrollStyle.getThemeStyleSheet(undefined, styleProps) : '',KeyFilterStyle && KeyFilterStyle.getThemeStyleSheet ? KeyFilterStyle.getThemeStyleSheet(undefined, styleProps) : ''
].join('');

const defineNitroPlugin = (def) => def;
const _AFYiMTNpS4iJVotjL5ihJeYOeIMmPOFr1fWZ8Us = defineNitroPlugin(async (nitroApp) => {
  nitroApp.hooks.hook("render:html", (html) => {
    html.head.unshift(stylesToTop);
    html.head.push(styles$2);
    html.head.push(themes);
  });
});

const script = "\"use strict\";(()=>{const t=window,e=document.documentElement,c=[\"dark\",\"light\"],n=getStorageValue(\"localStorage\",\"nuxt-color-mode\")||\"system\";let i=n===\"system\"?u():n;const r=e.getAttribute(\"data-color-mode-forced\");r&&(i=r),l(i),t[\"__NUXT_COLOR_MODE__\"]={preference:n,value:i,getColorScheme:u,addColorScheme:l,removeColorScheme:d};function l(o){const s=\"\"+o+\"\",a=\"\";e.classList?e.classList.add(s):e.className+=\" \"+s,a&&e.setAttribute(\"data-\"+a,o)}function d(o){const s=\"\"+o+\"\",a=\"\";e.classList?e.classList.remove(s):e.className=e.className.replace(new RegExp(s,\"g\"),\"\"),a&&e.removeAttribute(\"data-\"+a)}function f(o){return t.matchMedia(\"(prefers-color-scheme\"+o+\")\")}function u(){if(t.matchMedia&&f(\"\").media!==\"not all\"){for(const o of c)if(f(\":\"+o).matches)return o}return\"light\"}})();function getStorageValue(t,e){switch(t){case\"localStorage\":return window.localStorage.getItem(e);case\"sessionStorage\":return window.sessionStorage.getItem(e);case\"cookie\":return getCookie(e);default:return null}}function getCookie(t){const c=(\"; \"+window.document.cookie).split(\"; \"+t+\"=\");if(c.length===2)return c.pop()?.split(\";\").shift()}";

const _V_Dvlz5qWZ9ubHtCafG6Oqnf_7Kvw6ma5X8_JDeJC0o = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

const plugins = [
  _c3Oy_WZCrIk7PWk7hu0bN6fEe2nFE3hy9jfdG3_07Jo,
_GGaIECDdrhncnGS94R2Szg5vZ47o1W8dfypqFUvSxKU,
_UCHc4Y8KR1CEklEytMbyArWR_CXdXTHmISqwcGu04oM,
_AFYiMTNpS4iJVotjL5ihJeYOeIMmPOFr1fWZ8Us,
_V_Dvlz5qWZ9ubHtCafG6Oqnf_7Kvw6ma5X8_JDeJC0o
];

const assets = {
  "/index.mjs": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b2f31-C4WPqrNcLLAiKbSDB0V8T3Vwm9U\"",
    "mtime": "2026-06-04T03:21:05.403Z",
    "size": 732977,
    "path": "index.mjs"
  },
  "/index.mjs.map": {
    "type": "application/json",
    "etag": "\"217ebb-Vkx28GFOUSszmWxNBHpUkYhM63Q\"",
    "mtime": "2026-06-04T03:21:05.405Z",
    "size": 2195131,
    "path": "index.mjs.map"
  }
};

function readAsset (id) {
  const serverDir = dirname$1(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve$1(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt/builds/meta/":{"maxAge":31536000},"/_nuxt/builds/":{"maxAge":1}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _jVG54h = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError({ statusCode: 404 });
    }
    return;
  }
  if (asset.encoding !== void 0) {
    appendResponseHeader(event, "Vary", "Accept-Encoding");
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

const VueResolver = (_, value) => {
  return isRef(value) ? toValue(value) : value;
};

const headSymbol = "usehead";
// @__NO_SIDE_EFFECTS__
function vueInstall(head) {
  const plugin = {
    install(app) {
      app.config.globalProperties.$unhead = head;
      app.config.globalProperties.$head = head;
      app.provide(headSymbol, head);
    }
  };
  return plugin.install;
}

// @__NO_SIDE_EFFECTS__
function resolveUnrefHeadInput(input) {
  return walkResolver(input, VueResolver);
}

const NUXT_RUNTIME_PAYLOAD_EXTRACTION = false;

// @__NO_SIDE_EFFECTS__
function createHead(options = {}) {
  const head = createHead$1({
    ...options,
    propResolvers: [VueResolver]
  });
  head.install = vueInstall(head);
  return head;
}

const unheadOptions = {
  disableDefaults: true,
};

function createSSRContext(event) {
	const ssrContext = {
		url: event.path,
		event,
		runtimeConfig: useRuntimeConfig(event),
		noSSR: true,
		head: createHead(unheadOptions),
		error: false,
		nuxt: undefined,
		payload: {},
		["~payloadReducers"]: Object.create(null),
		modules: new Set()
	};
	return ssrContext;
}
function setSSRError(ssrContext, error) {
	ssrContext.error = true;
	ssrContext.payload = { error };
	ssrContext.url = error.url;
}

const APP_ROOT_OPEN_TAG = `<${appRootTag}${propsToString(appRootAttrs)}>`;
const APP_ROOT_CLOSE_TAG = `</${appRootTag}>`;
// @ts-expect-error file will be produced after app build
const getServerEntry = () => Promise.resolve().then(function () { return server$1; }).then((r) => r.default || r);
// @ts-expect-error file will be produced after app build
const getClientManifest = () => import('file:///home/dungdao/Documents/phan_tich_he_thong/compliance-system-fe/.nuxt//dist/server/client.manifest.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
// -- SSR Renderer --
const getSSRRenderer = lazyCachedFunction(async () => {
	// Load server bundle
	const createSSRApp = await getServerEntry();
	if (!createSSRApp) {
		throw new Error("Server bundle is not available");
	}
	// Load precomputed dependencies
	const precomputed = undefined ;
	// Create renderer
	const renderer = createRenderer(createSSRApp, {
		precomputed,
		manifest: await getClientManifest() ,
		renderToString: renderToString$1,
		buildAssetsURL
	});
	async function renderToString$1(input, context) {
		const html = await renderToString(input, context);
		// In development with vite-node, the manifest is on-demand and will be available after rendering
		// eslint-disable-next-line no-restricted-globals
		if (process.env.NUXT_VITE_NODE_OPTIONS) {
			renderer.rendererContext.updateManifest(await getClientManifest());
		}
		return APP_ROOT_OPEN_TAG + html + APP_ROOT_CLOSE_TAG;
	}
	return renderer;
});
// -- SPA Renderer --
const getSPARenderer = lazyCachedFunction(async () => {
	const precomputed = undefined ;
	// @ts-expect-error virtual file
	const spaTemplate = await Promise.resolve().then(function () { return _virtual__spaTemplate; }).then((r) => r.template).catch(() => "").then((r) => {
		{
			const APP_SPA_LOADER_OPEN_TAG = `<${appSpaLoaderTag}${propsToString(appSpaLoaderAttrs)}>`;
			const APP_SPA_LOADER_CLOSE_TAG = `</${appSpaLoaderTag}>`;
			const appTemplate = APP_ROOT_OPEN_TAG + APP_ROOT_CLOSE_TAG;
			const loaderTemplate = r ? APP_SPA_LOADER_OPEN_TAG + r + APP_SPA_LOADER_CLOSE_TAG : "";
			return appTemplate + loaderTemplate;
		}
	});
	// Create SPA renderer and cache the result for all requests
	const renderer = createRenderer(() => () => {}, {
		precomputed,
		manifest: await getClientManifest() ,
		renderToString: () => spaTemplate,
		buildAssetsURL
	});
	const result = await renderer.renderToString({});
	const renderToString = (ssrContext) => {
		const config = useRuntimeConfig(ssrContext.event);
		ssrContext.modules ||= new Set();
		ssrContext.payload.serverRendered = false;
		ssrContext.config = {
			public: config.public,
			app: config.app
		};
		return Promise.resolve(result);
	};
	return {
		rendererContext: renderer.rendererContext,
		renderToString
	};
});
function lazyCachedFunction(fn) {
	let res = null;
	return () => {
		if (res === null) {
			res = fn().catch((err) => {
				res = null;
				throw err;
			});
		}
		return res;
	};
}
function getRenderer(ssrContext) {
	return getSPARenderer() ;
}
// @ts-expect-error file will be produced after app build
const getSSRStyles = lazyCachedFunction(() => Promise.resolve().then(function () { return styles$1; }).then((r) => r.default || r));

async function renderInlineStyles(usedModules) {
	const styleMap = await getSSRStyles();
	const inlinedStyles = new Set();
	for (const mod of usedModules) {
		if (mod in styleMap && styleMap[mod]) {
			for (const style of await styleMap[mod]()) {
				inlinedStyles.add(style);
			}
		}
	}
	return Array.from(inlinedStyles).map((style) => ({ innerHTML: style }));
}

// @ts-expect-error virtual file
const ROOT_NODE_REGEX = new RegExp(`^<${appRootTag}[^>]*>([\\s\\S]*)<\\/${appRootTag}>$`);
/**
* remove the root node from the html body
*/
function getServerComponentHTML(body) {
	const match = body.match(ROOT_NODE_REGEX);
	return match?.[1] || body;
}
const SSR_SLOT_TELEPORT_MARKER = /^uid=([^;]*);slot=(.*)$/;
const SSR_CLIENT_TELEPORT_MARKER = /^uid=([^;]*);client=(.*)$/;
const SSR_CLIENT_SLOT_MARKER = /^island-slot=([^;]*);(.*)$/;
function getSlotIslandResponse(ssrContext) {
	if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.slots).length) {
		return undefined;
	}
	const response = {};
	for (const [name, slot] of Object.entries(ssrContext.islandContext.slots)) {
		response[name] = {
			...slot,
			fallback: ssrContext.teleports?.[`island-fallback=${name}`]
		};
	}
	return response;
}
function getClientIslandResponse(ssrContext) {
	if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.components).length) {
		return undefined;
	}
	const response = {};
	for (const [clientUid, component] of Object.entries(ssrContext.islandContext.components)) {
		// remove teleport anchor to avoid hydration issues
		const html = ssrContext.teleports?.[clientUid]?.replaceAll("<!--teleport start anchor-->", "") || "";
		response[clientUid] = {
			...component,
			html,
			slots: getComponentSlotTeleport(clientUid, ssrContext.teleports ?? {})
		};
	}
	return response;
}
function getComponentSlotTeleport(clientUid, teleports) {
	const entries = Object.entries(teleports);
	const slots = {};
	for (const [key, value] of entries) {
		const match = key.match(SSR_CLIENT_SLOT_MARKER);
		if (match) {
			const [, id, slot] = match;
			if (!slot || clientUid !== id) {
				continue;
			}
			slots[slot] = value;
		}
	}
	return slots;
}
function replaceIslandTeleports(ssrContext, html) {
	const { teleports, islandContext } = ssrContext;
	if (islandContext || !teleports) {
		return html;
	}
	for (const key in teleports) {
		const matchClientComp = key.match(SSR_CLIENT_TELEPORT_MARKER);
		if (matchClientComp) {
			const [, uid, clientId] = matchClientComp;
			if (!uid || !clientId) {
				continue;
			}
			html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-component="${clientId}"[^>]*>`), (full) => {
				return full + teleports[key];
			});
			continue;
		}
		const matchSlot = key.match(SSR_SLOT_TELEPORT_MARKER);
		if (matchSlot) {
			const [, uid, slot] = matchSlot;
			if (!uid || !slot) {
				continue;
			}
			html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-slot="${slot}"[^>]*>`), (full) => {
				return full + teleports[key];
			});
		}
	}
	return html;
}

const ISLAND_SUFFIX_RE = /\.json(?:\?.*)?$/;
const _SxA8c9 = defineEventHandler(async (event) => {
	const nitroApp = useNitroApp();
	setResponseHeaders(event, {
		"content-type": "application/json;charset=utf-8",
		"x-powered-by": "Nuxt"
	});
	const islandContext = await getIslandContext(event);
	const ssrContext = {
		...createSSRContext(event),
		islandContext,
		noSSR: false,
		url: islandContext.url
	};
	// Render app
	const renderer = await getSSRRenderer();
	const renderResult = await renderer.renderToString(ssrContext).catch(async (err) => {
		await ssrContext.nuxt?.hooks.callHook("app:error", err);
		throw err;
	});
	// Handle errors
	if (ssrContext.payload?.error) {
		throw ssrContext.payload.error;
	}
	const inlinedStyles = await renderInlineStyles(ssrContext.modules ?? []);
	await ssrContext.nuxt?.hooks.callHook("app:rendered", {
		ssrContext,
		renderResult
	});
	if (inlinedStyles.length) {
		ssrContext.head.push({ style: inlinedStyles });
	}
	{
		const { styles } = getRequestDependencies(ssrContext, renderer.rendererContext);
		const link = [];
		for (const resource of Object.values(styles)) {
			// Do not add links to resources that are inlined (vite v5+)
			if ("inline" in getQuery(resource.file)) {
				continue;
			}
			// Add CSS links in <head> for CSS files
			// - in dev mode when rendering an island and the file has scoped styles and is not a page
			if (resource.file.includes("scoped") && !resource.file.includes("pages/")) {
				link.push({
					rel: "stylesheet",
					href: renderer.rendererContext.buildAssetsURL(resource.file),
					crossorigin: ""
				});
			}
		}
		if (link.length) {
			ssrContext.head.push({ link }, { mode: "server" });
		}
	}
	const islandHead = {};
	for (const entry of ssrContext.head.entries.values()) {
		// eslint-disable-next-line @typescript-eslint/no-deprecated
		for (const [key, value] of Object.entries(resolveUnrefHeadInput(entry.input))) {
			const currentValue = islandHead[key];
			if (Array.isArray(currentValue)) {
				currentValue.push(...value);
			} else {
				islandHead[key] = value;
			}
		}
	}
	const islandResponse = {
		id: islandContext.id,
		head: islandHead,
		html: getServerComponentHTML(renderResult.html),
		components: getClientIslandResponse(ssrContext),
		slots: getSlotIslandResponse(ssrContext)
	};
	await nitroApp.hooks.callHook("render:island", islandResponse, {
		event,
		islandContext
	});
	return islandResponse;
});
async function getIslandContext(event) {
	// TODO: Strict validation for url
	let url = event.path || "";
	const componentParts = url.substring("/__nuxt_island".length + 1).replace(ISLAND_SUFFIX_RE, "").split("_");
	const hashId = componentParts.length > 1 ? componentParts.pop() : undefined;
	const componentName = componentParts.join("_");
	// TODO: Validate context
	const context = event.method === "GET" ? getQuery$1(event) : await readBody(event);
	const ctx = {
		url: "/",
		...context,
		id: hashId,
		name: componentName,
		props: destr$1(context.props) || {},
		slots: {},
		components: {}
	};
	return ctx;
}

const storage = prefixStorage(useStorage(), "i18n");
function cachedFunctionI18n(fn, opts) {
  opts = { maxAge: 1, ...opts };
  const pending = {};
  async function get(key, resolver) {
    const isPending = pending[key];
    if (!isPending) {
      pending[key] = Promise.resolve(resolver());
    }
    try {
      return await pending[key];
    } finally {
      delete pending[key];
    }
  }
  return async (...args) => {
    const key = [opts.name, opts.getKey(...args)].join(":").replace(/:\/$/, ":index");
    const maxAge = opts.maxAge ?? 1;
    const isCacheable = !opts.shouldBypassCache(...args) && maxAge >= 0;
    const cache = isCacheable && await storage.getItemRaw(key);
    if (!cache || cache.ttl < Date.now()) {
      pending[key] = Promise.resolve(fn(...args));
      const value = await get(key, () => fn(...args));
      if (isCacheable) {
        await storage.setItemRaw(key, { ttl: Date.now() + maxAge * 1e3, value, mtime: Date.now() });
      }
      return value;
    }
    return cache.value;
  };
}

const _getMessages = async (locale) => {
  return { [locale]: await getLocaleMessagesMerged(locale, localeLoaders[locale]) };
};
cachedFunctionI18n(_getMessages, {
  name: "messages",
  maxAge: -1 ,
  getKey: (locale) => locale,
  shouldBypassCache: (locale) => !isLocaleCacheable(locale)
});
const getMessages = _getMessages ;
const _getMergedMessages = async (locale, fallbackLocales) => {
  const merged = {};
  try {
    if (fallbackLocales.length > 0) {
      const messages = await Promise.all(fallbackLocales.map(getMessages));
      for (const message2 of messages) {
        deepCopy(message2, merged);
      }
    }
    const message = await getMessages(locale);
    deepCopy(message, merged);
    return merged;
  } catch (e) {
    throw new Error("Failed to merge messages: " + e.message);
  }
};
const getMergedMessages = cachedFunctionI18n(_getMergedMessages, {
  name: "merged-single",
  maxAge: -1 ,
  getKey: (locale, fallbackLocales) => `${locale}-[${[...new Set(fallbackLocales)].sort().join("-")}]`,
  shouldBypassCache: (locale, fallbackLocales) => !isLocaleWithFallbacksCacheable(locale, fallbackLocales)
});
const _getAllMergedMessages = async (locales) => {
  const merged = {};
  try {
    const messages = await Promise.all(locales.map(getMessages));
    for (const message of messages) {
      deepCopy(message, merged);
    }
    return merged;
  } catch (e) {
    throw new Error("Failed to merge messages: " + e.message);
  }
};
cachedFunctionI18n(_getAllMergedMessages, {
  name: "merged-all",
  maxAge: -1 ,
  getKey: (locales) => locales.join("-"),
  shouldBypassCache: (locales) => !locales.every((locale) => isLocaleCacheable(locale))
});

const _messagesHandler = defineEventHandler(async (event) => {
  const locale = getRouterParam(event, "locale");
  if (!locale) {
    throw createError({ status: 400, message: "Locale not specified." });
  }
  const ctx = useI18nContext(event);
  if (ctx.localeConfigs && locale in ctx.localeConfigs === false) {
    throw createError({ status: 404, message: `Locale '${locale}' not found.` });
  }
  const messages = await getMergedMessages(locale, ctx.localeConfigs?.[locale]?.fallbacks ?? []);
  deepCopy(messages, ctx.messages);
  return ctx.messages;
});
const _cachedMessageLoader = defineCachedFunction(_messagesHandler, {
  name: "i18n:messages-internal",
  maxAge: -1 ,
  getKey: (event) => [getRouterParam(event, "locale") ?? "null", getRouterParam(event, "hash") ?? "null"].join("-"),
  async shouldBypassCache(event) {
    const locale = getRouterParam(event, "locale");
    if (locale == null) {
      return false;
    }
    const ctx = tryUseI18nContext(event) || await initializeI18nContext(event);
    return !ctx.localeConfigs?.[locale]?.cacheable;
  }
});
defineCachedEventHandler(_cachedMessageLoader, {
  name: "i18n:messages",
  maxAge: -1 ,
  swr: false,
  getKey: (event) => [getRouterParam(event, "locale") ?? "null", getRouterParam(event, "hash") ?? "null"].join("-")
});
const _qKqORN = _messagesHandler ;

const _lazy_sqnVpx = () => Promise.resolve().then(function () { return renderer$1; });

const handlers = [
  { route: '', handler: _jVG54h, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_sqnVpx, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_island/**', handler: _SxA8c9, lazy: false, middleware: false, method: undefined },
  { route: '/_i18n/:hash/:locale/messages.json', handler: _qKqORN, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_sqnVpx, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(true),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const fetchContext = event.node.req?.__unenv__;
      if (fetchContext?._platform) {
        event.context = {
          _platform: fetchContext?._platform,
          // #3335
          ...fetchContext._platform,
          ...event.context
        };
      }
      if (!event.context.waitUntil && fetchContext?.waitUntil) {
        event.context.waitUntil = fetchContext.waitUntil;
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (event.context.waitUntil) {
          event.context.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
      await nitroApp$1.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const nodeHandler = toNodeListener(h3App);
  const localCall = (aRequest) => callNodeRequestHandler(
    nodeHandler,
    aRequest
  );
  const localFetch = (input, init) => {
    if (!input.toString().startsWith("/")) {
      return globalThis.fetch(input, init);
    }
    return fetchNodeRequestHandler(
      nodeHandler,
      input,
      init
    ).then((response) => normalizeFetchResponse(response));
  };
  const $fetch = createFetch({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp$1 = createNitroApp();
function useNitroApp() {
  return nitroApp$1;
}
runNitroPlugins(nitroApp$1);

if (!globalThis.crypto) {
  globalThis.crypto = nodeCrypto.webcrypto;
}
const { NITRO_NO_UNIX_SOCKET, NITRO_DEV_WORKER_ID } = process.env;
trapUnhandledNodeErrors();
parentPort?.on("message", (msg) => {
  if (msg && msg.event === "shutdown") {
    shutdown();
  }
});
const nitroApp = useNitroApp();
const server$2 = new Server(toNodeListener(nitroApp.h3App));
let listener;
listen().catch(() => listen(
  true
  /* use random port */
)).catch((error) => {
  console.error("Dev worker failed to listen:", error);
  return shutdown();
});
nitroApp.router.get(
  "/_nitro/tasks",
  defineEventHandler(async (event) => {
    const _tasks = await Promise.all(
      Object.entries(tasks).map(async ([name, task]) => {
        const _task = await task.resolve?.();
        return [name, { description: _task?.meta?.description }];
      })
    );
    return {
      tasks: Object.fromEntries(_tasks),
      scheduledTasks
    };
  })
);
nitroApp.router.use(
  "/_nitro/tasks/:name",
  defineEventHandler(async (event) => {
    const name = getRouterParam(event, "name");
    const payload = {
      ...getQuery$1(event),
      ...await readBody(event).then((r) => r?.payload).catch(() => ({}))
    };
    return await runTask(name, { payload });
  })
);
function listen(useRandomPort = Boolean(
  NITRO_NO_UNIX_SOCKET || process.versions.webcontainer || "Bun" in globalThis && process.platform === "win32"
)) {
  return new Promise((resolve, reject) => {
    try {
      listener = server$2.listen(useRandomPort ? 0 : getSocketAddress(), () => {
        const address = server$2.address();
        parentPort?.postMessage({
          event: "listen",
          address: typeof address === "string" ? { socketPath: address } : { host: "localhost", port: address?.port }
        });
        resolve();
      });
    } catch (error) {
      reject(error);
    }
  });
}
function getSocketAddress() {
  const socketName = `nitro-worker-${process.pid}-${threadId}-${NITRO_DEV_WORKER_ID}-${Math.round(Math.random() * 1e4)}.sock`;
  if (process.platform === "win32") {
    return join(String.raw`\\.\pipe`, socketName);
  }
  if (process.platform === "linux") {
    const nodeMajor = Number.parseInt(process.versions.node.split(".")[0], 10);
    if (nodeMajor >= 20) {
      return `\0${socketName}`;
    }
  }
  return join(tmpdir(), socketName);
}
async function shutdown() {
  server$2.closeAllConnections?.();
  await Promise.all([
    new Promise((resolve) => listener?.close(resolve)),
    nitroApp.hooks.callHook("close").catch(console.error)
  ]);
  parentPort?.postMessage({ event: "exit" });
}

const _messages = {
	"appName": "Nuxt",
	"status": 500,
	"statusText": "Internal server error",
	"description": "This page is temporarily unavailable.",
	"refresh": "Refresh this page"
};
const template$1 = (messages) => {
	messages = {
		..._messages,
		...messages
	};
	return "<!DOCTYPE html><html lang=\"en\"><head><title>" + escapeHtml(messages.status) + " - " + escapeHtml(messages.statusText) + " | " + escapeHtml(messages.appName) + "</title><meta charset=\"utf-8\"><meta content=\"width=device-width,initial-scale=1.0,minimum-scale=1.0\" name=\"viewport\"><script>!function(){const e=document.createElement(\"link\").relList;if(!(e&&e.supports&&e.supports(\"modulepreload\"))){for(const e of document.querySelectorAll('link[rel=\"modulepreload\"]'))r(e);new MutationObserver(e=>{for(const o of e)if(\"childList\"===o.type)for(const e of o.addedNodes)\"LINK\"===e.tagName&&\"modulepreload\"===e.rel&&r(e)}).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),\"use-credentials\"===e.crossOrigin?r.credentials=\"include\":\"anonymous\"===e.crossOrigin?r.credentials=\"omit\":r.credentials=\"same-origin\",r}(e);fetch(e.href,r)}}();<\/script><style>*,:after,:before{border-color:var(--un-default-border-color,#e5e7eb);border-style:solid;border-width:0;box-sizing:border-box}:after,:before{--un-content:\"\"}html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}h1,h2{font-size:inherit;font-weight:inherit}h1,h2,p{margin:0}*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 transparent;--un-ring-shadow:0 0 transparent;--un-shadow-inset: ;--un-shadow:0 0 transparent;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.grid{display:grid}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.max-w-520px{max-width:520px}.min-h-screen{min-height:100vh}.place-content-center{place-content:center}.overflow-hidden{overflow:hidden}.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.px-2{padding-left:.5rem;padding-right:.5rem}.text-center{text-align:center}.text-\\[80px\\]{font-size:80px}.text-2xl{font-size:1.5rem;line-height:2rem}.text-\\[\\#020420\\]{--un-text-opacity:1;color:rgb(2 4 32/var(--un-text-opacity))}.text-\\[\\#64748B\\]{--un-text-opacity:1;color:rgb(100 116 139/var(--un-text-opacity))}.font-semibold{font-weight:600}.leading-none{line-height:1}.tracking-wide{letter-spacing:.025em}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.tabular-nums{--un-numeric-spacing:tabular-nums;font-variant-numeric:var(--un-ordinal) var(--un-slashed-zero) var(--un-numeric-figure) var(--un-numeric-spacing) var(--un-numeric-fraction)}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media(prefers-color-scheme:dark){.dark\\:bg-\\[\\#020420\\]{--un-bg-opacity:1;background-color:rgb(2 4 32/var(--un-bg-opacity))}.dark\\:text-white{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media(min-width:640px){.sm\\:text-\\[110px\\]{font-size:110px}.sm\\:text-3xl{font-size:1.875rem;line-height:2.25rem}}</style></head><body class=\"antialiased bg-white dark:bg-[#020420] dark:text-white font-sans grid min-h-screen overflow-hidden place-content-center text-[#020420] tracking-wide\"><div class=\"max-w-520px text-center\"><h1 class=\"font-semibold leading-none mb-4 sm:text-[110px] tabular-nums text-[80px]\">" + escapeHtml(messages.status) + "</h1><h2 class=\"font-semibold mb-2 sm:text-3xl text-2xl\">" + escapeHtml(messages.statusText) + "</h2><p class=\"mb-4 px-2 text-[#64748B] text-md\">" + escapeHtml(messages.description) + "</p></div></body></html>";
};

const error500 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  template: template$1
}, Symbol.toStringTag, { value: 'Module' }));

const server = () => {};

const server$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: server
}, Symbol.toStringTag, { value: 'Module' }));

const template = "";

const _virtual__spaTemplate = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  template: template
}, Symbol.toStringTag, { value: 'Module' }));

const styles = {};

const styles$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: styles
}, Symbol.toStringTag, { value: 'Module' }));

function renderPayloadResponse(ssrContext) {
	return {
		body: stringify(splitPayload(ssrContext).payload, ssrContext["~payloadReducers"]) ,
		statusCode: getResponseStatus(ssrContext.event),
		statusMessage: getResponseStatusText(ssrContext.event),
		headers: {
			"content-type": "application/json;charset=utf-8" ,
			"x-powered-by": "Nuxt"
		}
	};
}
function renderPayloadJsonScript(opts) {
	const contents = opts.data ? stringify(opts.data, opts.ssrContext["~payloadReducers"]) : "";
	const payload = {
		"type": "application/json",
		"innerHTML": contents,
		"data-nuxt-data": appId,
		"data-ssr": false
	};
	{
		payload.id = "__NUXT_DATA__";
	}
	if (opts.src) {
		payload["data-src"] = opts.src;
	}
	const config = uneval(opts.ssrContext.config);
	return [payload, { innerHTML: `window.__NUXT__={};window.__NUXT__.config=${config}` }];
}
function splitPayload(ssrContext) {
	const { data, prerenderedAt, ...initial } = ssrContext.payload;
	return {
		initial: {
			...initial,
			prerenderedAt
		},
		payload: {
			data,
			prerenderedAt
		}
	};
}

const renderSSRHeadOptions = {"omitLineBreaks":true};

// @ts-expect-error private property consumed by vite-generated url helpers
globalThis.__buildAssetsURL = buildAssetsURL;
// @ts-expect-error private property consumed by vite-generated url helpers
globalThis.__publicAssetsURL = publicAssetsURL;
const HAS_APP_TELEPORTS = !!(appTeleportAttrs.id);
const APP_TELEPORT_OPEN_TAG = HAS_APP_TELEPORTS ? `<${appTeleportTag}${propsToString(appTeleportAttrs)}>` : "";
const APP_TELEPORT_CLOSE_TAG = HAS_APP_TELEPORTS ? `</${appTeleportTag}>` : "";
const PAYLOAD_URL_RE = /^[^?]*\/_payload.json(?:\?.*)?$/ ;
const PAYLOAD_FILENAME = "_payload.json" ;
const renderer = defineRenderHandler(async (event) => {
	const nitroApp = useNitroApp();
	// Whether we're rendering an error page
	const ssrError = event.path.startsWith("/__nuxt_error") ? getQuery$1(event) : null;
	if (ssrError && !("__unenv__" in event.node.req)) {
		throw createError({
			status: 404,
			statusText: "Page Not Found: /__nuxt_error",
			message: "Page Not Found: /__nuxt_error"
		});
	}
	// Initialize ssr context
	const ssrContext = createSSRContext(event);
	// needed for hash hydration plugin to work
	const headEntryOptions = { mode: "server" };
	ssrContext.head.push(appHead, headEntryOptions);
	if (ssrError) {
		// eslint-disable-next-line @typescript-eslint/no-deprecated
		const status = ssrError.status || ssrError.statusCode;
		if (status) {
			// eslint-disable-next-line @typescript-eslint/no-deprecated
			ssrError.status = ssrError.statusCode = Number.parseInt(status);
		}
		if (typeof ssrError.data === "string") {
			try {
				ssrError.data = destr(ssrError.data);
			} catch {}
		}
		setSSRError(ssrContext, ssrError);
	}
	// Get route options (for `ssr: false`, `isr`, `cache` and `noScripts`)
	const routeOptions = getRouteRules(event);
	// Whether we are prerendering route or using ISR/SWR caching
	const _PAYLOAD_EXTRACTION = !ssrContext.noSSR && (NUXT_RUNTIME_PAYLOAD_EXTRACTION);
	const isRenderingPayload = (_PAYLOAD_EXTRACTION || routeOptions.prerender) && PAYLOAD_URL_RE.test(ssrContext.url);
	if (isRenderingPayload) {
		const url = ssrContext.url.substring(0, ssrContext.url.lastIndexOf("/")) || "/";
		ssrContext.url = url;
		event._path = event.node.req.url = url;
	}
	if (routeOptions.ssr === false) {
		ssrContext.noSSR = true;
	}
	const payloadURL = _PAYLOAD_EXTRACTION ? joinURL(ssrContext.runtimeConfig.app.cdnURL || ssrContext.runtimeConfig.app.baseURL, ssrContext.url.replace(/\?.*$/, ""), PAYLOAD_FILENAME) + "?" + ssrContext.runtimeConfig.app.buildId : undefined;
	// Render app
	const renderer = await getRenderer();
	const _rendered = await renderer.renderToString(ssrContext).catch(async (error) => {
		// We use error to bypass full render if we have an early response we can make
		// TODO: remove _renderResponse in nuxt v5
		if ((ssrContext["~renderResponse"] || ssrContext._renderResponse) && error.message === "skipping render") {
			return {};
		}
		// Use explicitly thrown error in preference to subsequent rendering errors
		const _err = !ssrError && ssrContext.payload?.error || error;
		await ssrContext.nuxt?.hooks.callHook("app:error", _err);
		throw _err;
	});
	// Render inline styles
	// TODO: remove _renderResponse in nuxt v5
	const inlinedStyles = [];
	await ssrContext.nuxt?.hooks.callHook("app:rendered", {
		ssrContext,
		renderResult: _rendered
	});
	if (ssrContext["~renderResponse"] || ssrContext._renderResponse) {
		// TODO: remove _renderResponse in nuxt v5
		return ssrContext["~renderResponse"] || ssrContext._renderResponse;
	}
	// Handle errors
	if (ssrContext.payload?.error && !ssrError) {
		throw ssrContext.payload.error;
	}
	// Directly render payload routes
	if (isRenderingPayload) {
		const response = renderPayloadResponse(ssrContext);
		return response;
	}
	const NO_SCRIPTS = routeOptions.noScripts;
	// Setup head
	const { styles, scripts } = getRequestDependencies(ssrContext, renderer.rendererContext);
	// 1. Preload payloads and app manifest
	if (_PAYLOAD_EXTRACTION && !NO_SCRIPTS) {
		ssrContext.head.push({ link: [{
			rel: "preload",
			as: "fetch",
			crossorigin: "anonymous",
			href: payloadURL
		} ] }, headEntryOptions);
	}
	if (ssrContext["~preloadManifest"] && !NO_SCRIPTS) {
		ssrContext.head.push({ link: [{
			rel: "preload",
			as: "fetch",
			fetchpriority: "low",
			crossorigin: "anonymous",
			href: buildAssetsURL(`builds/meta/${ssrContext.runtimeConfig.app.buildId}.json`)
		}] }, {
			...headEntryOptions,
			tagPriority: "low"
		});
	}
	// 2. Styles
	if (inlinedStyles.length) {
		ssrContext.head.push({ style: inlinedStyles });
	}
	const link = [];
	for (const resource of Object.values(styles)) {
		// Do not add links to resources that are inlined (vite v5+)
		if ("inline" in getQuery(resource.file)) {
			continue;
		}
		// Add CSS links in <head> for CSS files
		// - in production
		// - in dev mode when not rendering an island
		link.push({
			rel: "stylesheet",
			href: renderer.rendererContext.buildAssetsURL(resource.file),
			crossorigin: ""
		});
	}
	if (link.length) {
		ssrContext.head.push({ link }, headEntryOptions);
	}
	if (!NO_SCRIPTS) {
		// 4. Resource Hints
		// Remove lazy hydrated modules from ssrContext.modules so they don't get preloaded
		// (CSS links are already added above, this only affects JS preloads)
		if (ssrContext["~lazyHydratedModules"]) {
			for (const id of ssrContext["~lazyHydratedModules"]) {
				ssrContext.modules?.delete(id);
			}
		}
		ssrContext.head.push({ link: getPreloadLinks(ssrContext, renderer.rendererContext) }, headEntryOptions);
		ssrContext.head.push({ link: getPrefetchLinks(ssrContext, renderer.rendererContext) }, headEntryOptions);
		// 5. Payloads
		ssrContext.head.push({ script: _PAYLOAD_EXTRACTION ? renderPayloadJsonScript({
			ssrContext,
			data: splitPayload(ssrContext).initial,
			src: payloadURL
		})  : renderPayloadJsonScript({
			ssrContext,
			data: ssrContext.payload
		})  }, {
			...headEntryOptions,
			tagPosition: "bodyClose",
			tagPriority: "high"
		});
	}
	// 6. Scripts
	if (!routeOptions.noScripts) {
		const tagPosition = "head";
		ssrContext.head.push({ script: Object.values(scripts).map((resource) => ({
			type: resource.module ? "module" : null,
			src: renderer.rendererContext.buildAssetsURL(resource.file),
			defer: resource.module ? null : true,
			tagPosition,
			crossorigin: ""
		})) }, headEntryOptions);
	}
	const { headTags, bodyTags, bodyTagsOpen, htmlAttrs, bodyAttrs } = await renderSSRHead(ssrContext.head, renderSSRHeadOptions);
	// Create render context
	const htmlContext = {
		htmlAttrs: htmlAttrs ? [htmlAttrs] : [],
		head: normalizeChunks([headTags]),
		bodyAttrs: bodyAttrs ? [bodyAttrs] : [],
		bodyPrepend: normalizeChunks([bodyTagsOpen, ssrContext.teleports?.body]),
		body: [replaceIslandTeleports(ssrContext, _rendered.html) , APP_TELEPORT_OPEN_TAG + (HAS_APP_TELEPORTS ? joinTags([ssrContext.teleports?.[`#${appTeleportAttrs.id}`]]) : "") + APP_TELEPORT_CLOSE_TAG],
		bodyAppend: [bodyTags]
	};
	// Allow hooking into the rendered result
	await nitroApp.hooks.callHook("render:html", htmlContext, { event });
	// Construct HTML response
	return {
		body: renderHTMLDocument(htmlContext),
		statusCode: getResponseStatus(event),
		statusMessage: getResponseStatusText(event),
		headers: {
			"content-type": "text/html;charset=utf-8",
			"x-powered-by": "Nuxt"
		}
	};
});
function normalizeChunks(chunks) {
	const result = [];
	for (const _chunk of chunks) {
		const chunk = _chunk?.trim();
		if (chunk) {
			result.push(chunk);
		}
	}
	return result;
}
function joinTags(tags) {
	return tags.join("");
}
function joinAttrs(chunks) {
	if (chunks.length === 0) {
		return "";
	}
	return " " + chunks.join(" ");
}
function renderHTMLDocument(html) {
	return "<!DOCTYPE html>" + `<html${joinAttrs(html.htmlAttrs)}>` + `<head>${joinTags(html.head)}</head>` + `<body${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body>` + "</html>";
}

const renderer$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: renderer
}, Symbol.toStringTag, { value: 'Module' }));
//# sourceMappingURL=index.mjs.map
