import swaggerJSDoc from "swagger-jsdoc";

const doc = {
	info: {
		version: "v1.0.0",
		title: "Swagger Take Home Test",
		description: "Documentation for Take Home Test API",
	},
	servers: [{ url: "", description: "Server Development" }],
	component: {
		securitySchemes: {
			bearerAuth: { type: "http", scheme: "bearer" },
		},
		schemas: {},
	},
	apis: ["app/modules/**/*Controller.ts"],
};

const swaggerDef = swaggerJSDoc({ swaggerDefinition: doc });

export default swaggerDef;
