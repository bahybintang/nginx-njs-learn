import csv
import uuid
import json

output = []

with open('storage/invitees.csv', 'r') as f:
    reader = csv.reader(f)
    for row in reader:
        output.append({
            'id': f"bf-{str(uuid.uuid4())[:8]}",
            'name': row[0],
        })

json.dump(output, open('storage/invitees.json', 'w'))
