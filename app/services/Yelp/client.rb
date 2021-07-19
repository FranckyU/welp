# frozen_string_literal: true

module Yelp
  class Client
    ENDPOINTS = {
      search: '/businesses/search',
      business_details: '/businesses/:id',
      autocomplete: '/autocomplete'
    }.freeze

    def fetch(endpoint, data = {})
      res = Faraday.get url_from(endpoint, data)
      JSON.parse(res.body)
    end

    private

    def url_from(endpoint, data)
      url = ENDPOINTS[endpoint]
      data.each { |k, v| url.gsub!(/:#{k}/, v) }
    end
  end
end
