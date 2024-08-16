// @ts-check
import td, { ReflectionKind } from "typedoc";

const TAG = "@typedocExpand";

/** @param {td.Application} app */
export function load(app) {
	// Automatically add the tag to the supported list of modifier tags
	app.on(td.Application.EVENT_BOOTSTRAP_END, () => {
		const tags = [...app.options.getValue("modifierTags")];
		if (!tags.includes(TAG)) {
			tags.push(TAG);
		}
		app.options.setValue("modifierTags", tags);
	});

	app.converter.on(td.Converter.EVENT_CREATE_DECLARATION, (context, decl) => {
		const symbol = context.project.getSymbolFromReflection(decl);

		if (
			!decl.kindOf(ReflectionKind.TypeAlias) ||
			!decl.comment?.hasModifier(TAG) ||
			!symbol
		) {
			return;
		}

		decl.comment.removeModifier(TAG);
		const type = context.checker.getDeclaredTypeOfSymbol(symbol);
		decl.type = context.converter.convertType(context.withScope(decl), type);
	});
}
