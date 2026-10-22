// filters.service.ts
import _ from 'lodash';

interface LastQuery {
    where?: any;
    include?: any[];
    required?: boolean;
}

interface RequiredParams {
    [key: string]: string | boolean;
}

export class FiltersService {
    settings: { models: Record<string, any> };

    constructor(settings: { models: Record<string, any> }) {
        this.settings = settings;
    }

    // Stub methods – implement your own logic
    async prepareConditions(reqParam: any): Promise<any> {
        return {}; // your condition building logic
    }

    async includeFilters(fieldKey: string, reqParam: any, requiredParams: RequiredParams): Promise<any> {
        return {}; // your include building logic
    }

    mergeIncludeFilters(target: any[] = [], sources: any[]): void {
        target.push(...sources);
    }

    async applyFilters(
        filter_requests: Record<string, any> = {},
        last_query: LastQuery = {},
        required_params: RequiredParams = {}
    ): Promise<LastQuery> {
        const filter_include: any[] = [];

        try {
            if (!_.isEmpty(filter_requests)) {
                const pArray = _.map(filter_requests, async (req_param, key) => {
                    const field_key = _.toLower(key);

                    if (field_key === 'root') {
                        const parsed = JSON.parse(req_param);
                        last_query.where = await this.prepareConditions(parsed);

                        if (required_params['root']) {
                            last_query.required = required_params['root'] === 'true' || required_params['root'] === true;
                        }
                    } else if (_.has(this.settings.models, field_key)) {
                        const inc = await this.includeFilters(field_key, req_param, required_params);
                        filter_include.push(inc);
                    }
                });

                await Promise.all(pArray);

                if (filter_include.length > 0) {
                    this.mergeIncludeFilters(last_query.include, filter_include);
                }
            }

            return last_query;
        } catch (error) {
            throw error;
        }
    }
}
