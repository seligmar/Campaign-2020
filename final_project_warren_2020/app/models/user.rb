class User < ApplicationRecord
  has_many :donations 
  has_secure_password
end
