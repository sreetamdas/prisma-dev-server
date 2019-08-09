function author(parent, args, context) {
	return context.prisma.link({ id: parent.id }).author();
}

module.exports = {
	author,
};
