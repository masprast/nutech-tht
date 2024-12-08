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
};

const swaggerDef = swaggerJSDoc({ swaggerDefinition: doc, apis: ["app/modules/**/*.ts"] });

export default swaggerDef;
