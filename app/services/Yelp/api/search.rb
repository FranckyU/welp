module Yelp
  module API
    class Search
      def self.call
        Yelp::Client.fetch(:search)
      end
    end
  end
end