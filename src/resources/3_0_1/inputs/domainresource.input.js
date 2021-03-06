const { GraphQLInputObjectType, GraphQLEnumType, GraphQLString, GraphQLNonNull, GraphQLList } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('../../../utils/schema.utils');

let DomainResourceResourceInputType = new GraphQLEnumType({
	name: 'DomainResourceResourceInputType',
	values: {
		DomainResource: { value: 'DomainResource' }
	}
});

/**
 * @name exports
 * @summary DomainResource Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'DomainResource_Input',
	description: 'Base StructureDefinition for DomainResource Resource.',
	fields: () => extendSchema(require('./resource.input'), {
		resourceType: {
			type: new GraphQLNonNull(DomainResourceResourceInputType),
			description: 'Type of this resource.'
		},
		text: {
			type: require('./narrative.input'),
			description: 'A human-readable narrative that contains a summary of the resource, and may be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it \'clinically safe\' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.'
		},
		contained: {
			type: new GraphQLList(GraphQLString),
			description: 'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.'
		},
		extension: {
			type: new GraphQLList(require('./extension.input')),
			description: 'May be used to represent additional information that is not part of the basic definition of the resource. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.'
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input')),
			description: 'May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.'
		}
	})
});
