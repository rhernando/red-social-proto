class CreateEventos < ActiveRecord::Migration
  def change
    create_table :eventos do |t|
      t.date :fecha
      t.string :titulo
      t.string :descripcion

      t.timestamps
    end
  end
end
