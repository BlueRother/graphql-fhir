const {
	CompartmentDefinitionQuery,
	CompartmentDefinitionListQuery,
	CompartmentDefinitionInstanceQuery
} = require('./query');

const {
	CompartmentDefinitionCreateMutation,
	CompartmentDefinitionUpdateMutation,
	CompartmentDefinitionDeleteMutation
} = require('./mutation');

/**
 * @name exports
 * @static
 * @summary GraphQL Configurations. This is needed to register this profile
 * with the GraphQL server.
 */
module.exports = {
	/**
	* Define Query Schema's here
	* Each profile will need to define the two queries it supports
	* and these keys must be unique across the entire application, like routes
	*/
	query: {
		CompartmentDefinition: CompartmentDefinitionQuery,
		CompartmentDefinitionList: CompartmentDefinitionListQuery
	},
	/**
	* Define Mutation Schema's here
	* Each profile will need to define the supported mutations
	* and these keys must be unique across the entire application, like routes
	*/
	mutation: {
		CompartmentDefinitionCreate: CompartmentDefinitionCreateMutation,
		CompartmentDefinitionUpdate: CompartmentDefinitionUpdateMutation,
		CompartmentDefinitionDelete: CompartmentDefinitionDeleteMutation
	},
	/**
	* These properties are so the core router can setup the approriate endpoint
	* for a direct query against a resource
	*/
	instance_query: {
		name: 'CompartmentDefinition',
		path: '/3_0_1/CompartmentDefinition/:id',
		query: CompartmentDefinitionInstanceQuery
	}
};
