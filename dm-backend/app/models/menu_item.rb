class MenuItem < ApplicationRecord
    belongs_to :user
    validates_inclusion_of :category, :in => ['Appetizer','Entree','Side','Dessert','Special']
    # Appetizer Entree Side Dessert Special

end

