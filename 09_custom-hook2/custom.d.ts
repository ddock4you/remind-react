type Mapping = Record<string, string>;
declare module '*.module.css' {
	const mapping: Mapping;
	export default mapping;
}

declare module '*.jpg';