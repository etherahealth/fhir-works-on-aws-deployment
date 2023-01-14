/*
 *  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *  SPDX-License-Identifier: Apache-2.0
 */

import { NoAuthConfig } from '@etherahealth/fhir-works-on-aws-authz-noauth';

export const financialResources: string[] = [
    'Coverage',
    'CoverageEligibilityRequest',
    'CoverageEligibilityResponse',
    'EnrollmentRequest',
    'EnrollmentResponse',
    'Claim',
    'ClaimResponse',
    'Invoice',
    'PaymentNotice',
    'PaymentReconciliation',
    'Account',
    'ChargeItem',
    'ChargeItemDefinition',
    'Contract',
    'ExplanationOfBenefit',
    'InsurancePlan',
];

const NoAuthRules = (baseResources: string[]): NoAuthConfig => {
    return {
        version: 1.0,
        groupRules: {
            everyone: {
                operations: ['create', 'read', 'update', 'delete', 'vread', 'search-type', 'transaction'],
                resources: baseResources,
            },
        },
    };
};

export default NoAuthRules;
