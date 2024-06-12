export function tryCatch<T>(fn: () => T, onError: (e: unknown) => T): T {
	try {
		return fn();
	} catch (e) {
		return onError(e);
	}
}
