class CreateWinners < ActiveRecord::Migration[7.0]
  def change
    create_table :winners do |t|
      t.string :url_id
      t.string :url

      t.timestamps
    end
  end
end
