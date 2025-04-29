export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "app",
	appPath: "test-host/app",
	assets: new Set([".nojekyll","favicon.png","images/delete-icon.svg","images/Dots_whiteframe_for_dakrsetups.png","images/download-icon.svg","images/edit-icon.svg","images/EN_FundedbytheEU_RGB_POS.png","images/info.png","images/VR4VET_LOGO_DOTS_trnsprnt_Turquoise.png","impact_tool.xlsx","test.xlsx"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {start:"app/immutable/entry/start.B4OgBJ2G.js",app:"app/immutable/entry/app.B67UTBFe.js",imports:["app/immutable/entry/start.B4OgBJ2G.js","app/immutable/chunks/C0kO50z3.js","app/immutable/chunks/CP0asINM.js","app/immutable/chunks/CF4mypsj.js","app/immutable/chunks/jNu_azvm.js","app/immutable/entry/app.B67UTBFe.js","app/immutable/chunks/C_E_4ndo.js","app/immutable/chunks/CP0asINM.js","app/immutable/chunks/CfLlnYWl.js","app/immutable/chunks/D8nafNpf.js","app/immutable/chunks/jNu_azvm.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
