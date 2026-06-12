import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureApimanagementApimloggersApi implements ICredentialType {
        name = 'N8nDevAzureApimanagementApimloggersApi';

        displayName = 'Azure Apimanagement Apimloggers API';

        icon: Icon = { light: 'file:../nodes/AzureApimanagementApimloggers/azure-apimanagement-apimloggers.png', dark: 'file:../nodes/AzureApimanagementApimloggers/azure-apimanagement-apimloggers.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Apimanagement Apimloggers API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
