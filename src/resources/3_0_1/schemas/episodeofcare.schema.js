const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

let EpisodeOfCareResourceType = new GraphQLEnumType({
	name: 'EpisodeOfCareResourceType',
	values: {
		EpisodeOfCare: { value: 'EpisodeOfCare' }
	}
});

/**
 * @name exports
 * @summary EpisodeOfCare Schema
 */
module.exports = new GraphQLObjectType({
	name: 'EpisodeOfCare',
	description: 'Base StructureDefinition for EpisodeOfCare Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(EpisodeOfCareResourceType),
			description: 'Type of this resource.'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'The EpisodeOfCare may be known by different identifiers for different contexts of use, such as when an external agency is tracking the Episode for funding purposes.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/episode-of-care-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'planned | waitlist | active | onhold | finished | cancelled.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'planned | waitlist | active | onhold | finished | cancelled.'
		},
		statusHistory: {
			type: new GraphQLList(require('./episodeofcarestatushistory.schema')),
			description: 'The history of statuses that the EpisodeOfCare has been through (without requiring processing the history of the resource).'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/episodeofcare-type
		type: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'A classification of the type of episode of care; e.g. specialist referral, disease management, type of funded care.'
		},
		diagnosis: {
			type: new GraphQLList(require('./episodeofcarediagnosis.schema')),
			description: 'The list of diagnosis relevant to this episode of care.'
		},
		patient: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'The patient who is the focus of this episode of care.'
		},
		managingOrganization: {
			type: require('./reference.schema'),
			description: 'The organization that has assumed the specific responsibilities for the specified duration.'
		},
		period: {
			type: require('./period.schema'),
			description: 'The interval during which the managing organization assumes the defined responsibility.'
		},
		referralRequest: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Referral Request(s) that are fulfilled by this EpisodeOfCare, incoming referrals.'
		},
		careManager: {
			type: require('./reference.schema'),
			description: 'The practitioner that is the care manager/care co-ordinator for this patient.'
		},
		team: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'The list of practitioners that may be facilitating this episode of care for specific purposes.'
		},
		account: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'The set of accounts that may be used for billing for this EpisodeOfCare.'
		}
	})
});
