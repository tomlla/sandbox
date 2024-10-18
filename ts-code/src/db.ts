interface DbFrom {
	from: string;
}

interface DbFromWithJoin {
	from: string;
	joins: string[];
}

export const from = (opts: object) => {
	return opts;
};
