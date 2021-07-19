module Yelp
  module API
    class Autocompletion
      def self.call(term)
        Yelp::Client.fetch(:autocomplete, { term: term })
      end
    end
  end
end
