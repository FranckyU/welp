module Yelp
  module API
    class BusinessDetails
      def self.call(id:)
        Yelp::Client.fetch(:business_details, { id: id })
      end
    end
  end
end