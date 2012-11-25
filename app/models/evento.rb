class Evento < ActiveRecord::Base
  attr_accessible :descripcion, :fecha, :titulo
end
