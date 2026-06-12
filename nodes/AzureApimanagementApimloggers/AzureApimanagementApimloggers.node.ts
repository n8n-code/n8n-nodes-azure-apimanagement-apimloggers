import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureApimanagementApimloggers implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Apimanagement Apimloggers',
                name: 'N8nDevAzureApimanagementApimloggers',
                icon: { light: 'file:./azure-apimanagement-apimloggers.png', dark: 'file:./azure-apimanagement-apimloggers.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Use REST APIs to manage Logger entities in Azure API Management deployments.',
                defaults: { name: 'Azure Apimanagement Apimloggers' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureApimanagementApimloggersApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
