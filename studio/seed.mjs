import {getCliClient} from 'sanity/cli'
import fs from 'node:fs'
const documents=JSON.parse(fs.readFileSync(new URL('./initial-content.json',import.meta.url),'utf8'))
const client=getCliClient({apiVersion:'2026-10-01'})
let transaction=client.transaction()
for(const doc of documents)transaction=transaction.createIfNotExists(doc)
await transaction.commit()
console.log('Initial content added; existing documents were preserved.')