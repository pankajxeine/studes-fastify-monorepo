"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FiltersService = void 0;
// filters.service.ts
const lodash_1 = __importDefault(require("lodash"));
class FiltersService {
    settings;
    constructor(settings) {
        this.settings = settings;
    }
    // Stub methods – implement your own logic
    async prepareConditions(reqParam) {
        return {}; // your condition building logic
    }
    async includeFilters(fieldKey, reqParam, requiredParams) {
        return {}; // your include building logic
    }
    mergeIncludeFilters(target = [], sources) {
        target.push(...sources);
    }
    async applyFilters(filter_requests = {}, last_query = {}, required_params = {}) {
        const filter_include = [];
        try {
            if (!lodash_1.default.isEmpty(filter_requests)) {
                const pArray = lodash_1.default.map(filter_requests, async (req_param, key) => {
                    const field_key = lodash_1.default.toLower(key);
                    if (field_key === 'root') {
                        const parsed = JSON.parse(req_param);
                        last_query.where = await this.prepareConditions(parsed);
                        if (required_params['root']) {
                            last_query.required = required_params['root'] === 'true' || required_params['root'] === true;
                        }
                    }
                    else if (lodash_1.default.has(this.settings.models, field_key)) {
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
        }
        catch (error) {
            throw error;
        }
    }
}
exports.FiltersService = FiltersService;
