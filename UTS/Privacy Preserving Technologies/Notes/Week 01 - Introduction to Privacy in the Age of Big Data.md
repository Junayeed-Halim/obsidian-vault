---
type: course
course: Privacy Preserving Technologies
title: Week 01 - Introduction to Privacy in the Age of Big Data
status: evergreen
created: 2026-08-25
tags:
  - UTS
  - privacy
  - week
  - privacy-preserving-technologies
  - lecture-notes
---

# Week 01 - Introduction to Privacy in the Age of Big Data

> **Source:** [[UTS/Privacy Preserving Technologies/Sources/Big Privacy - Yu 2016]] (primary), [[UTS/Privacy Preserving Technologies/Sources/Science Survey - WK1]]
> **Course:** [[UTS/Privacy Preserving Technologies|Privacy Preserving Technologies]]

---

## 1. Summary

This week introduces the field of **privacy-preserving technologies** in the context of big data. The central tension: big data promises enormous benefits — better healthcare, smarter cities, more efficient services — but the same data collection and analysis capabilities pose unprecedented threats to individual privacy.

The core reading (Yu, 2016, "Big Privacy") surveys the landscape of privacy research and argues that:
1. Simple anonymisation (removing names and IDs) is **not enough** — re-identification is surprisingly easy.
2. Privacy research has developed along two main tracks: **data clustering methods** (k-anonymity, l-diversity, t-closeness) and **theoretical frameworks** (differential privacy).
3. A comprehensive privacy solution requires understanding from **multiple disciplines**: cryptography, communication theory, information theory, statistics, and law.
4. We are at an early stage — the theoretical foundations of privacy are still being developed, much like information theory was before Shannon.

**What you should walk away with:**
- Understanding why simple anonymisation fails (the re-identification problem).
- The roles in a privacy system: data generator, data curator, data user, data attacker.
- The two major research categories: data clustering and privacy frameworks.
- The concept of quasi-identifiers and why they're dangerous.
- The milestones of privacy research: k-anonymity → l-diversity → t-closeness → differential privacy.

---

## 2. Learning Objectives

By the end of this week you should be able to:

1. **Explain why simple anonymisation is insufficient** for protecting privacy in big data, with concrete examples (re-identification from few data points).
2. **Describe the four roles in a privacy system** (data generator, curator, user, attacker) and how attacks can target any of them.
3. **Distinguish between content privacy and interaction privacy** — two fundamentally different threat models.
4. **Explain the concept of quasi-identifiers** and why they're more dangerous than explicit identifiers.
5. **Trace the milestones of privacy research**: k-anonymity (1998), l-diversity (2007), t-closeness (2010), differential privacy (2006).
6. **Describe the difference between data clustering methods and theoretical privacy frameworks** — their strengths, weaknesses, and the gap between them.
7. **Understand the interdisciplinary nature of privacy** — cryptography, communication, statistics, law, and their roles.

---

## 3. Key Concepts

### 3.1 The Privacy Problem in Big Data

**Why big data is a privacy challenge:**

1. **Volume:** More data means more information about each individual. Even seemingly innocuous data points accumulate into detailed profiles.
2. **Velocity:** Data is collected in real-time (streaming, sensors, online activity). Privacy interventions must be fast.
3. **Variety:** Data comes in many forms — transaction records, location traces, social media posts, images, audio, video. Each type reveals different things.
4. **Linkability:** Different datasets can be linked together (using quasi-identifiers) to create much richer profiles than any single dataset provides.
5. **Advanced analytics:** Machine learning and data mining can extract patterns and make inferences that weren't intended — predicting sensitive attributes from apparently innocuous data.

**The fundamental problem:** In the age of big data, we can record extraordinary amounts of information about individuals. This information can be used for beneficial purposes (medical research, service improvement) but also for harmful ones (discrimination, surveillance, identity theft). Privacy-preserving technologies aim to enable the benefits while protecting individuals.

### 3.2 Why Simple Anonymisation Fails

**The classic approach:** Remove explicit identifiers (name, SSN, driver's licence number) from a dataset before releasing it. This is "simple anonymisation."

**Why it doesn't work:**

The key insight from Yu (2016): an ID is just "a representation of a set of features of a described object." We identify people by their characteristics, not by their IDs. If you have enough characteristics (even seemingly harmless ones), you can identify someone without needing their name.

**The landmark re-identification studies:**

| Study | Data | Result |
|---|---|---|
| **De Montjoye et al. (2013)** | 15 months of mobile phone location data for 1.5 million people. Anonymised (names removed, only location + time). | **95% of people** could be uniquely identified with just **4 spatial-temporal points**. |
| **Credit card transaction study** | 3 months of credit card transactions for 1.1 million people. Anonymised. | **90% of individuals** re-identified with just **4 spatio-temporal points**. |

These studies demonstrate a crucial point: **human behaviour is highly unique and predictable.** Even without names, the pattern of where you go and when is enough to identify you. Your "behavioural fingerprint" is as identifying as your name.

**The deeper insight:** Privacy threats don't just come from direct identifier matching. They come from:
- **Linkage attacks:** Combining anonymised data with other publicly available data (e.g., linking anonymised medical records with public voter registration lists using date of birth, gender, and postcode).
- **Inference attacks:** Predicting sensitive information from non-sensitive data (e.g., predicting medical conditions from purchasing patterns).
- **Behavioural fingerprinting:** Identifying individuals from their unique patterns of behaviour (location traces, browsing habits, purchase history).

### 3.3 Content Privacy vs. Interaction Privacy

Yu (2016) divides privacy study into two categories:

**Content Privacy:**
- Attacks target the **content** of data — attempting to identify individuals or infer sensitive information from anonymised or encrypted datasets.
- **Example 1:** An attacker knows a person visited certain shops at certain times. They use this to extract that person's full transaction history from an anonymised credit card database.
- **Example 2:** An attacker identifies speakers in a confidential meeting recording using voice fingerprints from other sources.
- **Threat model:** The attacker has some side information about the target and uses it to extract more information from the dataset.

**Interaction Privacy:**
- Attacks target the **interaction patterns** — monitoring how a user interacts with services to infer their behaviour, habits, or identity.
- **Example 1:** Monitoring encrypted web traffic to determine which websites a user is visiting (traffic analysis — visible packet sizes and timing patterns).
- **Example 2:** Monitoring user behaviour at the application level to identify a user from a set of anonymised interactions (behavioural fingerprinting).
- **Threat model:** The attacker observes patterns of interaction, not the content itself.

**Why the distinction matters:** Different defence mechanisms are needed for each type. Content privacy might be protected by anonymisation or encryption. Interaction privacy might require traffic obfuscation, mix networks, or changing behaviour patterns. A comprehensive privacy solution must address both.

### 3.4 The Four Roles in a Privacy System

Yu (2016) defines four roles (building on the general privacy system framework):

| Role | Description | Examples |
|---|---|---|
| **Data Generator** | Individuals or organisations that produce raw data. | Patients (medical records), customers (transaction records), social media users (posts, photos), mobile phone users (location traces). |
| **Data Curator** | Entities that collect, store, hold, and release data. Usually anonymise before releasing. | Hospitals, banks, social media platforms, government agencies, research institutions. |
| **Data User** | People who access released (usually anonymised) datasets for analysis, research, or services. | Researchers, data scientists, journalists, businesses. | **Data Attacker** | A special type of data user who tries to extract more information than intended — either benign (researcher probing privacy limits) or malicious (identity thief, stalker). | Anyone with access to the released data and some side information.

**Key insight:** The data attacker is a **special case of the data user.** Anyone who accesses the released data can potentially attack it. The curator must protect against the worst-case user — someone with side information and malicious intent.

**Attack surfaces:**
1. **Collecting:** The data curator collects data from generators. Privacy concerns: informed consent, data minimisation (collect only what's needed).
2. **Anonymising:** The curator anonymises data before release. Privacy concerns: is the anonymisation sufficient? (We've seen it often isn't.)
3. **Communicating:** Data users access the released data. Privacy concerns: can users be identified from access patterns? Can the data be linked with other sources?

### 3.5 Data Attributes and Quasi-Identifiers

A record in a dataset can be divided into four categories of attributes:

| Category | Definition | Example (medical database) | Privacy Risk |
|---|---|---|---|
| **Explicit identifiers** | Attributes that directly and uniquely identify an individual. | Name, social security number, driver's licence number. | Removed before release (suppression). |
| **Quasi-identifiers** | Attributes that don't uniquely identify alone but can when combined with other data. | Age, gender, postcode, occupation, date of birth. | **The main privacy risk.** With enough quasi-identifiers, re-identification is possible. |
| **Sensitive information** | The information the data curator wants to protect. | Medical diagnosis, salary, criminal record, sexual orientation. | The target of the attack. |
| **Other** | Attributes that don't fall into the above categories. | Random identifiers, timestamps (sometimes). | Generally lower risk. |

**Quasi-identifiers are the critical concept.** They're called "quasi" because:
- They're not unique on their own (many people share the same age, gender, or postcode).
- But **combinations** of quasi-identifiers can be unique or nearly unique.
- For example: {age: 32, gender: female, postcode: 2000, occupation: "night shift nurse"} might uniquely identify one person in a dataset.

**The equivalence class (qid group):** The set of records that share the same quasi-identifier values. If an equivalence class has only one record, that record is uniquely identified (by the quasi-identifiers). If it has k records, an attacker can narrow the target down to k possibilities.

### 3.6 The Milestones of Privacy Research

Yu (2016) traces the development of modern privacy research through key milestones:

#### Data Clustering Methods (practical, database-focused)

| Method | Year | Authors | Key Idea | Limitation |
|---|---|---|---|---|
| **k-Anonymity** | 1998 | Sweeney | Release data where each record is indistinguishable from at least \(k-1\) others (based on quasi-identifiers). Achieved through generalisation (e.g., age → age range) and suppression (removing values). | Doesn't protect against attribute disclosure — all records in an equivalence class might have the same sensitive value. |
| **l-Diversity** | 2007 | Machanavajjhala et al. | Extension of k-anonymity: each equivalence class must contain at least \(l\) "well-represented" values for the sensitive attribute. Prevents the case where all records in a class have the same diagnosis. | Doesn't handle cases where sensitive values are semantically similar (e.g., "HIV+" and "AIDS" are different but semantically close). |
| **t-Closeness** | 2010 | Li et al. | Extension of l-diversity: the distribution of sensitive attribute values in each equivalence class must be close (within distance \(t\)) to the distribution in the overall dataset. | More complex to implement; choosing the right \(t\) is non-trivial. |

**Data clustering methods** are practical and feasible — they work on real databases. But they **lack a profound theoretical foundation.** They're based on intuition about what constitutes a "safe" release, not on rigorous mathematical guarantees.

#### Theoretical Privacy Frameworks

| Framework | Year | Authors | Key Idea | Significance |
|---|---|---|---|---|
| **Differential Privacy** | 2006 | Dwork, McSherry, Nissim, Smith | A rigorous mathematical definition: a data release mechanism is \(\varepsilon\)-differentially private if the probability of any output changes by at most \(e^\varepsilon\) when any single individual's data is added or removed. | Provides a **provable guarantee**: the presence or absence of any individual in the dataset has a bounded effect on the output. Even an attacker with arbitrary side information cannot infer much about any individual. |

**Differential privacy** is the most significant theoretical development in privacy research. It provides mathematically provable privacy guarantees, unlike the ad-hoc nature of data clustering methods.

**How it works (intuitively):** Differential privacy adds **controlled noise** to the results of queries on a dataset. The noise is calibrated so that:
- The answers are still useful (accurate at the aggregate level).
- But an attacker cannot tell whether any specific individual's data was included or not.

The privacy parameter \(\varepsilon\) (epsilon) controls the privacy-utility tradeoff:
- **Small \(\varepsilon\):** Strong privacy, more noise, less accurate results.
- **Large \(\varepsilon\):** Weaker privacy, less noise, more accurate results.

**Further developments:**
- **Differential identifiability** (2010): Extends differential privacy to bound the probability that an individual can be identified.
- **Membership privacy** (2010): Protects against determining whether a specific individual is in the dataset.

### 3.7 The Interdisciplinary Nature of Privacy

Privacy research draws from multiple disciplines, each contributing different perspectives and tools:

| Discipline | Contribution | Example |
|---|---|---|
| **Cryptography** | Encryption, secure computation, zero-knowledge proofs. | Homomorphic encryption (compute on encrypted data), secure multi-party computation (multiple parties compute jointly without revealing inputs). |
| **Communication / Networking** | Anonymising communication channels. | Onion routing (Tor), Crowds system, mix networks. Protect against traffic analysis and eavesdropping. |
| **Information Theory** | Shannon's perfect secrecy (1949): maximise entropy to minimise probability of recognition. | Quantifying privacy leakage using information-theoretic measures. |
| **Statistics** | Disclosure control, survey methodology, sampling. | How to release statistical summaries without revealing individual information. |
| **Computer Science / Data Mining** | Privacy-preserving data publishing (PPDP), privacy-aware learning. | k-Anonymity, l-diversity, t-closeness, differential privacy, federated learning. |
| **Law / Policy** | Privacy regulations, data protection frameworks, enforcement. | GDPR (EU), Australian Privacy Act, "right to be forgotten" (EU Court of Justice, 2014). |

**Key insight:** No single discipline provides a complete solution. Cryptography can protect data in transit but doesn't help with data that must be analysed (you need to decrypt it to use it). Anonymisation can protect released data but fails against re-identification. Legal frameworks provide enforcement but don't solve the technical problem. A comprehensive approach requires all of these.

### 3.8 Applications of Privacy-Preserving Technologies

Yu (2016) mentions several application areas:

| Application | Privacy Challenge | Techniques |
|---|---|---|
| **Privacy-Preserving Data Publishing (PPDP)** | Releasing useful datasets while protecting individual privacy. | k-Anonymity, l-diversity, t-closeness, differential privacy. |
| **Privacy-Aware Data Mining / Machine Learning** | Learning from data without exposing individual records. | Differential privacy in ML (add noise to gradients or outputs), federated learning (train on decentralised data). |
| **Electronic Voting** | Votes must be private (no one knows how you voted) but verifiable (you can confirm your vote was counted). | Cryptographic voting protocols, zero-knowledge proofs, mix-nets. |
| **Web Browsing Privacy** | Preventing tracking of browsing behaviour. | Tor, privacy-focused browsers, blocking third-party cookies. |
| **Location Privacy** | Protecting location traces from re-identification. | Obfuscation, dummy locations, differential privacy for location data. |

---

## 4. Important Formulas

### 3.1 k-Anonymity

A dataset satisfies **k-anonymity** if each record is indistinguishable from at least \(k-1\) other records with respect to the quasi-identifiers.

Formally: for each record \(t\) in the released dataset, there are at least \(k-1\) other records that have the same quasi-identifier values (belong to the same equivalence class).

**Maximum re-identification probability:** \(1/k\)

If an attacker knows the quasi-identifier values of their target, they can narrow the target down to the equivalence class of size \(k\). With no additional information, the probability of correctly identifying the target is at most \(1/k\).

### 3.2 l-Diversity

A dataset satisfies **l-diversity** if, for each equivalence class, there are at least \(l\) "well-represented" distinct values for the sensitive attribute.

Formally: for each equivalence class \(E\) and each sensitive attribute value \(v\), the proportion of records in \(E\) with value \(v\) is at most \(1/l\) (or equivalently, \(| \{ \text{distinct sensitive values in } E \} | \geq l\)).

**Additional protection:** Even if an attacker identifies the equivalence class of their target, they cannot be sure of the sensitive value (there are at least \(l\) possibilities, all well-represented).

### 3.3 t-Closeness

A dataset satisfies **t-closeness** if, for each equivalence class, the distribution of sensitive attribute values is close to the distribution in the overall dataset.

Formally: For each equivalence class \(E\), the distance between the distribution of sensitive values in \(E\) and the distribution in the full dataset is at most \(t\):

\[
D(P_E, P_{dataset}) \leq t
\]

Where \(D\) is a distance measure (commonly Earth Mover's Distance / Wasserstein distance).

**Protection:** Prevents the case where sensitive values in an equivalence class are skewed relative to the population, even if there are \(l\) distinct values.

### 3.4 Differential Privacy (Intuitive Definition)

A randomised mechanism \(M\) gives \(\varepsilon\)-differential privacy if for all datasets \(D_1\) and \(D_2\) that differ by at most one record (one is \(D_1\), the other is \(D_1\) with one record added or removed), and for all possible outputs \(S\):

\[
P(M(D_1) \in S) \leq e^\varepsilon \cdot P(M(D_2) \in S)
\]

**Interpretation:**
- The output distribution changes by at most a factor of \(e^\varepsilon\) when one individual's data is added or removed.
- If \(\varepsilon\) is small, the output is nearly the same regardless of any individual — strong privacy.
- If \(\varepsilon\) is large, the output can differ significantly — weaker privacy.

**Common mechanisms for achieving differential privacy:**
- **Laplace mechanism:** Add noise drawn from Laplace distribution with scale \(\Delta f / \varepsilon\), where \(\Delta f\) is the sensitivity (maximum change in the query result from one record).
- **Exponential mechanism:** For non-numeric outputs, select outputs with probability proportional to \(e^{\varepsilon \cdot u(x) / (2\Delta u)}\), where \(u\) is a utility function.

---

## 5. Worked Examples

### Example 1: Why Simple Anonymisation Fails

**Scenario:** A hospital releases an anonymised patient dataset for research. They remove names and patient IDs. The dataset contains: age, gender, postcode, date of admission, diagnosis.

**Attack:** An attacker knows that their neighbour (Alice, age 34, female, postcode 2000) was admitted to this hospital on a specific date. They query the dataset: "All female patients, age 34, postcode 2000, admitted on [date]."

If only one record matches, Alice is re-identified. Her diagnosis is now known to the attacker.

**Analysis:**
- Age + gender + postcode + date of admission are all quasi-identifiers.
- In a small dataset, this combination might be unique.
- The attacker used **side information** (knowledge about Alice) plus the quasi-identifiers to re-identify her.
- Removing the name didn't help because the quasi-identifiers were sufficient.

**Solution approaches:**
- **k-anonymity:** Generalise age to a range (30-39), postcode to a broader area, so Alice is in an equivalence class of size \(k\).
- **Differential privacy:** Add noise to aggregate statistics so Alice's presence/absence doesn't significantly affect outputs.

---

### Example 2: Computing k-Anonymity

**Problem:** A dataset has the following records:

| Name | Age | Gender | Postcode | Diagnosis |
|---|---|---|---|---|
| Alice | 34 | F | 2000 | Asthma |
| Bob | 35 | M | 2000 | Diabetes |
| Carol | 34 | F | 2001 | Asthma |
| Dave | 45 | M | 2000 | Hypertension |
| Eve | 34 | F | 2000 | Diabetes |

Apply k-anonymity with \(k = 2\) by generalising age to ranges and postcode to district level.

**Solution:**

After generalisation:

| Age Range | Gender | Postcode District | Diagnosis |
|---|---|---|---|
| 30-39 | F | 200* | Asthma |
| 30-39 | M | 200* | Diabetes |
| 30-39 | F | 200* | Asthma |
| 40-49 | M | 200* | Hypertension |
| 30-39 | F | 200* | Diabetes |

Wait — we need to check the equivalence classes.

**Equivalence class 1:** Age 30-39, Female, Postcode 200* → 3 records (Alice, Carol, Eve). Size = 3 ≥ 2 ✓.
**Equivalence class 2:** Age 30-39, Male, Postcode 200* → 1 record (Bob). Size = 1 < 2 ✗.
**Equivalence class 3:** Age 40-49, Male, Postcode 200* → 1 record (Dave). Size = 1 < 2 ✗.

The current anonymisation doesn't satisfy \(k = 2\). We need to generalise further:

| Age Range | Gender | Postcode District | Diagnosis |
|---|---|---|---|
| 30-49 | * | 200* | Asthma |
| 30-49 | * | 200* | Diabetes |
| 30-49 | * | 200* | Asthma |
| 30-49 | * | 200* | Hypertension |
| 30-49 | * | 200* | Diabetes |

Now all 5 records are in one equivalence class of size 5. \(k = 5 \geq 2\). ✓

But at what cost? We've lost a lot of information — age is now just "30-49" and gender is generalised to "*". This illustrates the **privacy-utility tradeoff**: more privacy (larger \(k\), more generalisation) means less useful data.

---

### Example 3: Differential Privacy Intuition

**Problem:** A survey asks 1,000 people "Do you have condition X?" (yes/no). The true proportion is 15%. An attacker wants to know if their target (Alice) has condition X. They know Alice participated in the survey.

**Without privacy:** Release the exact count: 150 out of 1,000 have condition X. The attacker knows Alice is in the survey. If the count were 149 without Alice, then Alice must have condition X (150 - 149 = 1). The attacker learns Alice's status perfectly.

**With differential privacy (Laplace mechanism):**
- Query: count of "yes" responses.
- Sensitivity: 1 (adding or removing one person changes count by at most 1).
- Add Laplace noise with scale \(1/\varepsilon\).
- For \(\varepsilon = 0.5\): scale = 2. Typical noise might be ±3-4.
- Release: 150 + Laplace(2) ≈ 150 ± 4 (approximately).

The attacker sees e.g., 153. Can they tell if Alice has the condition?
- If Alice has it: true count = 150, noisy output = 153.
- If Alice doesn't: true count = 149, noisy output = 153 (possible but less likely).

The ratio of probabilities is bounded by \(e^\varepsilon = e^{0.5} \approx 1.65\). The attacker gains **some** information but not certainty. The privacy guarantee is mathematical — it holds regardless of the attacker's side information.

---

### Example 4: Threat Model — Content Privacy Attack

**Scenario:** A shopping mall releases anonymised transaction data: {timestamp, store, amount, payment method}. Names and loyalty card numbers are removed.

**Attack (content privacy):**
1. The attacker knows their target, Bob, shops at this mall regularly.
2. The attacker knows Bob's typical shopping patterns: Saturdays, electronics store, ~150 AUD per visit.
3. The attacker queries the dataset: "All transactions on Saturday at the electronics store with amount ~150."
4. If there's exactly one match, Bob is re-identified. The attacker now knows Bob visited the electronics store on that Saturday (and could infer other information from the full transaction record).

**Defence:**
- k-anonymity: generalise timestamps to day ranges, amounts to ranges, so Bob appears in an equivalence class of size \(k\).
- Differential privacy: add noise to aggregate statistics (e.g., "how many people visited the electronics store on Saturday?") so individual transactions can't be identified.

---

### Example 5: Threat Model — Interaction Privacy Attack

**Scenario:** A user accesses a sensitive website (e.g., a health advice site) over an encrypted connection (HTTPS).

**Attack (interaction privacy — traffic analysis):**
1. The attacker monitors the encrypted traffic between the user and the website.
2. Even though the content is encrypted, the **packet sizes and timing patterns** are visible.
3. Different pages on the website have different sizes (a health article about symptom A is a different size than one about symptom B).
4. By matching observed packet sequences to known page sizes, the attacker can infer which pages the user visited — even though the connection was encrypted.

**Defence:**
- Padding packets to uniform sizes (reduces information from size).
- Sending dummy traffic / cover traffic (makes timing patterns less informative).
- Using Tor or similar anonymising networks (routes traffic through multiple hops to obscure the source).

---

## 6. Practical Applications

### Privacy-Preserving Data Publishing (PPDP)

**Problem:** A data curator wants to release a dataset for research while protecting individual privacy.

**Approach:**
1. **Identify sensitive attributes** and quasi-identifiers.
2. **Choose a privacy model:** k-anonymity, l-diversity, t-closeness, or differential privacy.
3. **Apply transformation:** generalisation, suppression, noise addition, or synthetic data generation.
4. **Evaluate:** check that the privacy model is satisfied and assess the utility loss.

**Real-world use cases:**
- Census data release (statistical summaries, not individual records).
- Medical research datasets (e.g., MIMIC, but with privacy protections).
- Government open data portals.

### Differential Privacy in Machine Learning

**Problem:** Train ML models on sensitive data (medical records, financial data) without exposing individual records.

**Approach:**
1. **DP-SGD (Differentially Private Stochastic Gradient Descent):** Add noise to the gradients during training. The model learns from the aggregate patterns but not from individual examples.
2. **Output perturbation:** Train the model normally, then add noise to the final parameters or predictions.
3. **Private aggregation:** Multiple parties train local models and aggregate them with noise (Federated Learning + DP).

**Real-world use cases:**
- Apple uses differential privacy in iOS to collect usage statistics without identifying individual users.
- Google uses DP in Chrome to collect browsing statistics.
- US Census Bureau uses differential privacy for the 2020 Census data release.

### Federated Learning

**Problem:** Multiple parties (e.g., hospitals, mobile devices) want to collaboratively train a model without sharing their raw data.

**Approach:**
1. Each party trains a local model on their own data.
2. Model updates (gradients or parameters) are sent to a central server.
3. The server aggregates the updates (e.g., averaging) to improve a global model.
4. The global model is sent back to the parties.

**Privacy benefit:** Raw data never leaves the local party. However, model updates can still leak information (gradient inversion attacks). Adding differential privacy to the updates addresses this.

**Real-world use cases:**
- Google Keyboard (Gboard) — learns typing predictions from mobile devices without uploading keystrokes.
- Healthcare — multiple hospitals train a diagnostic model without sharing patient records.
- Financial fraud detection — multiple banks collaborate without sharing customer data.

### Electronic Voting

**Problem:** A voting system must satisfy seemingly contradictory requirements:
- **Privacy:** No one can tell how you voted (not even the system administrator).
- **Verifiability:** You can confirm your vote was counted correctly.
- **Integrity:** Votes cannot be altered or deleted.
- **Eligibility:** Only eligible voters can vote.

**Approach:** Cryptographic voting protocols use:
- **Homomorphic encryption:** Votes are encrypted; the tally can be computed on encrypted votes without decrypting individual votes.
- **Zero-knowledge proofs:** Prove that a vote is valid (e.g., "I voted for exactly one candidate") without revealing which candidate.
- **Mix-nets:** Shuffle and re-encrypt votes to break the connection between voter and vote.

**Real-world use cases:** Several pilot elections have used cryptographic voting (e.g., in Switzerland, Estonia's i-voting system).

---

## 7. Quiz Questions with Answers

### Q1: What is the key reason simple anonymisation (removing names and IDs) fails to protect privacy?

**Answer:** Because individuals can be re-identified using **quasi-identifiers** — attributes like age, gender, postcode, and date that, in combination, can uniquely identify a person. Landmark studies showed that 4 spatio-temporal points are enough to re-identify 95% of individuals in mobility data and 90% in credit card data. An ID is just a representation of features; removing the ID doesn't remove the features that make a person identifiable.

---

### Q2: Explain the difference between content privacy and interaction privacy.

**Answer:**
- **Content privacy** protects the actual data/content from being used to identify individuals or infer sensitive information. Attacks target the data itself — e.g., re-identifying someone from an anonymised dataset using quasi-identifiers and side information.
- **Interaction privacy** protects the patterns of interaction from being monitored and analysed. Attacks target how a user interacts with services — e.g., traffic analysis of encrypted web traffic to determine which websites are visited based on packet sizes and timing.

Different defences are needed for each: anonymisation and encryption for content privacy; traffic obfuscation and anonymising networks for interaction privacy.

---

### Q3: What are quasi-identifiers, and why are they more dangerous than explicit identifiers?

**Answer:** Quasi-identifiers are attributes that don't uniquely identify an individual on their own but can when combined with other data (e.g., age, gender, postcode, date of birth). They're more dangerous than explicit identifiers because:
1. They're often left in datasets (they seem harmless — "who cares about age and postcode?").
2. They're often available from other public sources (voter registration, social media, public records).
3. Combinations of quasi-identifiers are often unique or nearly unique.
4. Explicit identifiers are typically removed before release, but quasi-identifiers are frequently overlooked.

---

### Q4: What is the key difference between k-anonymity and differential privacy? Which provides stronger guarantees?

**Answer:**
- **k-Anonymity** is a property of the released dataset: each record must be indistinguishable from at least \(k-1\) others based on quasi-identifiers. It's a heuristic — it reduces the probability of re-identification to \(1/k\) but doesn't provide a formal guarantee against all attacks (especially if the attacker has additional knowledge).
- **Differential privacy** provides a **mathematical guarantee**: the output distribution changes by at most \(e^\varepsilon\) when any one individual's data is added or removed. This guarantee holds regardless of the attacker's side information or computational power. It's a provable, rigorous privacy definition.

Differential privacy provides much stronger guarantees. k-anonymity is practical and widely used but lacks theoretical rigour.

---

### Q5: In the four-role privacy model (data generator, curator, user, attacker), explain where the main privacy risks occur at each stage.

**Answer:**
- **Data generator stage:** Risk of over-collection — collecting data that isn't needed. Risk of lack of informed consent — generators may not understand what data is collected or how it will be used.
- **Data curator stage:** Risk of inadequate anonymisation — the anonymisation may be insufficient (as we've seen with simple anonymisation failures). Risk of data breach — the curator holds the raw data and is a high-value target.
- **Data user / attacker stage:** Risk of re-identification — the user (or attacker) can link the released data with other sources to identify individuals. Risk of inference — predicting sensitive attributes from non-sensitive data. The attacker is a special type of user who actively tries to breach privacy.

---

### Q6 (Privacy-specific): Why does differential privacy add noise, and how does it balance privacy and utility?

**Answer:** Differential privacy adds noise to mask the contribution of any single individual. Without noise, a query result might reveal whether a specific person's data was included (e.g., the count changes by exactly 1 when Alice is added). With noise, the result is perturbed so that the presence or absence of any individual doesn't significantly affect the output.

The privacy-utility balance is controlled by \(\varepsilon\) (epsilon):
- **Small \(\varepsilon\): Strong privacy** (noise is large relative to signal, individual contributions are well-hidden), but results are less accurate (lower utility).
- **Large \(\varepsilon\): Weaker privacy** (individual contributions are more visible), but results are more accurate (higher utility).

The choice of \(\varepsilon\) depends on the application — what level of privacy is needed, and how much accuracy can be sacrificed.

---

### Q7 (Privacy-specific): What is the "right to be forgotten" mentioned in the Big Privacy paper, and why is it significant?

**Answer:** The "right to be forgotten" (established by the European Court of Justice in 2014) gives European citizens the right to ask search engines to remove items that are "inaccurate, irrelevant, or excessive." It's significant because:
1. It recognises that privacy isn't just about collecting data — it's also about controlling what persists online.
2. It creates tension with other values — freedom of information, historical record, public interest.
3. It's an example of how legal and regulatory approaches complement technical ones in privacy protection.
4. It highlights that privacy is a social and legal concept, not purely technical — different societies may have different privacy standards.

---

## 8. Common Mistakes

| Mistake | Why It's Wrong | Correct Understanding |
|---|---|---|
| **"If I remove names, the data is anonymous"** | False. Quasi-identifiers can re-identify individuals. | Anonymisation requires systematic protection of quasi-identifiers, not just removing explicit identifiers. |
| **"k-anonymity is the same as differential privacy"** | Different guarantees. k-anonymity is heuristic; DP is provable. | Understand the distinction: k-anonymity reduces re-identification probability; DP provides a mathematical privacy guarantee. |
| **"More data = better privacy"** | More data usually means more information about each individual, increasing privacy risk. | Privacy and data collection are often in tension. Data minimisation (collect only what's needed) is a key privacy principle. |
| **"Encryption solves privacy"** | Encryption protects data in transit and at rest, but data must be decrypted to be used. | Encryption is one tool, but not a complete solution. Privacy must be addressed at all stages: collection, storage, processing, release. |
| **"Privacy and utility are incompatible"** | False trade-off framing. There's usually a spectrum — you can sacrifice some utility for privacy. | Differential privacy explicitly models the trade-off. Good privacy engineering finds the right balance for the application. |
| **"Only malicious attackers matter"** | Privacy protections should work against the worst case — but benign researchers can also inadvertently breach privacy. | Privacy is about protecting against any unauthorised disclosure, regardless of intent. |

---

## 9. Exam Notes

**High-probability exam topics:**

1. **Why simple anonymisation fails** — the re-identification studies, the concept of quasi-identifiers, the behavioural fingerprint argument. Be ready to explain with a concrete example.

2. **The four roles in a privacy system** (data generator, curator, user, attacker) and the attack surfaces at each stage.

3. **Content privacy vs. interaction privacy** — definitions, threat models, examples, and different defence approaches.

4. **Quasi-identifiers** — definition, why they're dangerous, equivalence classes, and how they relate to k-anonymity.

5. **Milestones of privacy research:**
   - k-Anonymity (1998): definition, how it works (generalisation, suppression), limitation.
   - l-Diversity (2007): how it extends k-anonymity, what additional protection it provides.
   - t-Closeness (2010): distribution-based protection.
   - Differential Privacy (2006): definition, the \(\varepsilon\) parameter, how it works (noise addition), why it's stronger than data clustering methods.

6. **Differential privacy** — the intuitive definition (output doesn't change much when one person is added/removed), the \(\varepsilon\) parameter and the privacy-utility tradeoff, common mechanisms (Laplace mechanism).

7. **The interdisciplinary nature of privacy** — cryptography, communication, information theory, statistics, law. Know examples of each.

8. **Practical applications** — PPDP, differential privacy in ML, federated learning, electronic voting. Know the privacy challenge and the technique used in each.

**Exam tip:** Expect scenario-based questions — "A hospital wants to release patient data. What privacy risks exist, and what techniques would you recommend?" Be ready to apply the concepts to new situations.

---

## 10. Revision Cheat Sheet

**Core problem:** Big data enables amazing applications but threatens privacy. Simple anonymisation is not enough — re-identification is easy with quasi-identifiers.

**Why anonymisation fails:** IDs are just representations of features. We identify people by their characteristics (behavioural fingerprint), not by their names. 4 spatio-temporal points → 95% re-identification in mobility data.

**Content vs. Interaction Privacy:**
- **Content:** Attacks on the data itself (re-identification, inference).
- **Interaction:** Attacks on communication patterns (traffic analysis, behavioural fingerprinting).

**Four roles:** Data Generator → Data Curator → Data User (including Data Attacker). Attacks can target any stage.

**Quasi-identifiers:** Attributes that don't uniquely identify alone but do in combination (age, gender, postcode). The main privacy risk in released datasets.

**Milestones:**
- k-Anonymity (1998): each record in an equivalence class of size \(\geq k\). Max re-id probability \(1/k\).
- l-Diversity (2007): each equivalence class has \(\geq l\) distinct sensitive values.
- t-Closeness (2010): sensitive value distribution in each class close to overall distribution.
- Differential Privacy (2006): rigorous mathematical guarantee. Output changes by at most \(e^\varepsilon\) when one person is added/removed. Noise-based.

**Disciplines:** Cryptography (encryption, MPC), Communication (Tor, onion routing), Information Theory (entropy, secrecy), Statistics (disclosure control), Law (GDPR, privacy acts).

**Applications:** PPDP, DP in ML, Federated Learning, Electronic Voting.

**Key formula (DP):** \(P(M(D_1) \in S) \leq e^\varepsilon \cdot P(M(D_2) \in S)\) where \(D_1, D_2\) differ by one record.

---

## 11. Related Links

- [[UTS/Privacy Preserving Technologies/Sources/Big Privacy - Yu 2016]] — primary source material
- [[UTS/Privacy Preserving Technologies/Sources/Science Survey - WK1]] — supplementary reading
- [[UTS/Privacy Preserving Technologies/Notes/Week 02 - Differential Privacy in Depth]] — next week
- [[UTS/Privacy Preserving Technologies/Quiz Prep/Week 01 Quiz Prep]] — practice questions
- [[UTS/Privacy Preserving Technologies/Weekly Summaries/Week 01 Summary]] — weekly summary
- [[UTS/Machine Learning/Notes/Week 03 - Classification Algorithms]] — related ML concepts (privacy-aware learning)
- [[UTS/Machine Learning/Notes/Week 02 - Supervised Learning & Model Evaluation]] — regularisation (noise as regularisation)

---

## 12. Security Risks (Privacy Extension)

### Re-identification Attacks

**What they are:** Combining anonymised data with other information to identify individuals.

**Types:**
1. **Deterministic re-identification:** The quasi-identifier combination is unique. The attacker finds the exact record.
2. **Probabilistic re-identification:** The combination is not unique but narrows down to a small set. The attacker uses additional information to pick the most likely match.
3. **Linkage attacks:** Linking two datasets on common attributes to create a richer dataset that reveals more than either alone.

**Why they're effective:**
- Quasi-identifiers are often publicly available (voter rolls, social media, public records).
- Human behaviour is highly unique (the behavioural fingerprint).
- Many datasets share common attributes (postcode, age, gender are everywhere).

### Inference Attacks

**What they are:** Predicting sensitive attributes from non-sensitive ones, even without re-identifying individuals.

**Types:**
1. **Attribute inference:** Predicting a sensitive attribute (e.g., medical condition) from apparently innocuous attributes (e.g., purchasing patterns, browsing history).
2. **Membership inference:** Determining whether a specific individual is in a dataset (e.g., "Is Alice in this medical study?"). This can be sensitive even without learning Alice's data — the fact that she's in a study for a particular condition is itself sensitive.

**Why ML makes inference attacks worse:**
- ML models can learn complex, non-linear relationships between features.
- A model trained on sensitive data can leak information about the training data through its predictions or parameters.
- Even aggregate statistics can enable inference when combined with other data.

### Data Breach Risks

**What they are:** Unauthorised access to data held by the curator.

**Types:**
1. **External attacks:** Hackers break into the curator's systems.
2. **Insider threats:** Employees or contractors misuse their access.
3. **Accidental exposure:** Misconfigured systems, lost devices, sent-to-the-wrong-person errors.

**Why curators are high-value targets:**
- They hold the raw, identifiable data (the most sensitive form).
- They aggregate data from many individuals (a single breach exposes many people).
- They may hold data for long periods (accumulating more information over time).

### Abuse of Legitimate Access

**What it is:** People with legitimate access to data using it for unauthorised purposes.

**Examples:**
1. A healthcare worker looking up a celebrity's medical records out of curiosity.
2. A police officer checking a partner's criminal record without cause.
3. A data analyst selling insights derived from private data.

**Why it's hard to prevent:**
- The person has legitimate access — their actions look normal.
- Data access logs can detect anomalies but can't prevent determined insiders.
- The line between legitimate and illegitimate use can be blurry.

---

## 13. Threat Models (Privacy Extension)

### Threat Model 1: The Curious Data User

**Who:** A data user (researcher, analyst) with legitimate access to the released dataset.

**Capability:** Can query the dataset, run analyses, link with other data they have access to.

**Goal:** May be benign (research) or may have personal motives (curiosity about someone they know).

**Risk:** Even benign users can inadvertently breach privacy — publishing an analysis that reveals individual information, or linking datasets in ways the curator didn't anticipate.

### Threat Model 2: The External Attacker with Side Information

**Who:** Someone outside the system who has some information about a target individual.

**Capability:** Can access the released dataset (if it's public) or query it (if there's an API). Has side information about the target (from social media, public records, personal knowledge).

**Goal:** Re-identify the target or infer sensitive information about them.

**Risk:** The most common threat model for PPDP. The attacker combines the released data with their side information. This is exactly the scenario in the re-identification studies.

### Threat Model 3: The Honest-but-Curious Curator

**Who:** The data curator who is honest (follows the protocol) but curious (wants to learn more than they should from the data).

**Capability:** Has access to the raw, identifiable data before anonymisation.

**Goal:** Learn sensitive information about individuals beyond what they're supposed to.

**Risk:** The curator sees the data before it's anonymised. They could memorise information, or create a "backdoor" in the anonymisation process. This is why trust in the curator is important, and why techniques like differential privacy (which don't require trusting the curator) are valuable.

### Threat Model 4: The Malicious Data Generator

**Who:** Someone who provides data to the system with malicious intent.

**Capability:** Can provide false or crafted data.

**Goal:** Poison the dataset to harm others (e.g., add false records to make someone else look suspicious), or to extract information later (e.g., provide known data and see how it's used).

**Risk:** Data poisoning attacks. The curator must verify and clean incoming data, but this is often difficult.

### Threat Model 5: The Inference Attacker (ML-Specific)

**Who:** Someone with access to a trained ML model (or its predictions).

**Capability:** Can query the model (input data, get predictions). May have access to the model parameters (white-box) or only predictions (black-box).

**Goal:** Infer information about the training data — e.g., determine if a specific person's data was used for training (membership inference), or reconstruct training examples (model inversion).

**Risk:** ML models can leak information about their training data. This is a growing area of privacy research, especially relevant for models trained on sensitive data (medical, financial).

---

## 14. Privacy Techniques (Privacy Extension)

### Anonymisation Techniques (Data-Centric)

| Technique | How It Works | Privacy Guarantee | Limitations |
|---|---|---|---|
| **Suppression** | Remove values (entire records or specific attributes). | Removes the risk from suppressed values. | Loss of information. Doesn't protect remaining attributes. |
| **Generalisation** | Replace values with less specific ones (age 34 → age 30-39, postcode 2000 → 200*). | Reduces granularity, making records harder to distinguish. | Loss of utility. May not be sufficient if generalised values are still identifying. |
| **k-Anonymity** | Generalise/suppress until each record is in an equivalence class of size \(\geq k\). | Re-identification probability \(\leq 1/k\) (with no additional information). | No protection against attribute disclosure (all records in class may have same sensitive value). Heuristic, not provable. |
| **l-Diversity** | Extend k-anonymity: each equivalence class has \(\geq l\) distinct sensitive values. | Reduces attribute disclosure risk. | Doesn't handle semantically similar sensitive values. Still heuristic. |
| **t-Closeness** | Distribution of sensitive values in each class close to overall distribution. | Protects against skewed sensitive values in classes. | More complex. Choice of \(t\) and distance metric affects protection. |

### Differential Privacy (Mathematics-Centric)

| Aspect | Description |
|---|---|
| **Core idea** | Add controlled noise to query results so that the presence/absence of any individual has minimal effect. |
| **Guarantee** | Mathematical, provable. Holds against any attacker with any side information. |
| **Privacy parameter** | \(\varepsilon\) (epsilon). Smaller = stronger privacy, less accurate. Larger = weaker privacy, more accurate. |
| **Sensitivity** | Maximum change in query result from adding/removing one record. Determines how much noise is needed. |
| **Laplace mechanism** | Add Laplace noise with scale \(\Delta f / \varepsilon\) to numeric query results. |
| **Exponential mechanism** | For non-numeric outputs, select with probability proportional to utility. |
| **Composition** | Running multiple differentially private queries degrades privacy. The \(\varepsilon\) values add up (basic composition) or combine more efficiently (advanced composition). |

### Cryptographic Techniques (Computation-Centric)

| Technique | How It Works | Use Case |
|---|---|---|
| **Homomorphic Encryption** | Perform computations on encrypted data without decrypting. The result, when decrypted, matches the computation on plaintext. | Private cloud computing — send encrypted data to a server, get encrypted results back. |
| **Secure Multi-Party Computation (MPC)** | Multiple parties jointly compute a function over their inputs without revealing their inputs to each other. | Private data collaboration — multiple hospitals compute statistics over combined data without sharing individual records. |
| **Zero-Knowledge Proofs** | Prove that a statement is true without revealing any information beyond the truth of the statement. | Voting — prove your vote is valid without revealing who you voted for. Authentication — prove you know a password without sending it. |
| **Attribute-Based Encryption** | Encrypt data so that it can only be decrypted by users with specific attributes (e.g., "over 18 and a doctor"). | Fine-grained access control for encrypted data. |

### System-Level Techniques

| Technique | How It Works | Use Case |
|---|---|---|
| **Federated Learning** | Train models locally on decentralised devices; share model updates, not raw data. | Mobile keyboard prediction, healthcare (multiple hospitals), finance (multiple banks). |
| **Tor / Onion Routing** | Route traffic through multiple relays, encrypting at each layer. Each relay only knows the previous and next hop. | Anonymised web browsing, hiding communication patterns. |
| **Mix Networks** | Collect messages, shuffle them, and re-encrypt before forwarding. Breaks the link between sender and recipient. | Anonymous communication systems. |
| **Differential Privacy in Data Collection** | Add noise at the point of data collection (on the user's device) before sending to the server. | Apple iOS telemetry, Google Chrome statistics. The server never sees individual raw data. |

---

## 15. Real-World Use Cases (Privacy Extension)

### Use Case 1: US Census Bureau — Differential Privacy for the 2020 Census

**Challenge:** The Census collects detailed personal information about every US resident. The data is used for apportionment, redistricting, and research. But releasing detailed data risks re-identifying individuals.

**Solution:** The Census Bureau adopted differential privacy for the 2020 Census data release. They add carefully calibrated noise to the published statistics to provide formal privacy guarantees while maintaining the utility of the data for its intended purposes.

**Impact:** This was a landmark adoption of differential privacy at a national scale. It sparked debate about the right balance of privacy and accuracy for census data, and demonstrated that differential privacy can be applied to large-scale, high-stakes data releases.

### Use Case 2: Apple — Differential Privacy in iOS

**Challenge:** Apple wants to collect usage data from iPhone users to improve products (e.g., which emoji are most popular, which words are frequently typed) without identifying individual users or learning their personal habits.

**Solution:** Apple uses differential privacy in iOS. Data is collected on the device, noise is added locally (before leaving the device), and only the noisy, aggregated data is sent to Apple. Apple cannot see any individual's raw data.

**Impact:** This demonstrated that differential privacy can be used in consumer products at scale. It allows companies to learn from user data while providing privacy guarantees to individual users.

### Use Case 3: Healthcare — MIMIC Database

**Challenge:** The MIMIC database contains detailed medical records from ICU patients at Beth Israel Deaconess Medical Center. It's an invaluable resource for medical research, but contains sensitive patient information.

**Solution:** The data is de-identified following HIPAA guidelines (removing explicit identifiers, generalising quasi-identifiers, shifting dates). Researchers must complete ethics training and sign data use agreements. Access is through a controlled portal.

**Impact:** MIMIC has enabled thousands of medical research studies. It shows a practical approach to balancing research access with privacy protection, though it relies on de-identification and access controls rather than formal privacy guarantees like differential privacy.

### Use Case 4: Federated Learning in Mobile Keyboards

**Challenge:** Google wants to improve Gboard's typing predictions (next-word suggestions, autocorrect) based on how people actually type. But collecting keystrokes would be a massive privacy intrusion.

**Solution:** Federated Learning. The predictive model is trained locally on each device using that device's typing data. Model updates (not keystrokes) are sent to Google, where they're aggregated to improve the global model. Google never sees individual keystrokes.

**Impact:** This is one of the most successful real-world deployments of federated learning. It demonstrates that collaborative ML can be done without centralising sensitive data.

### Use Case 5: Tor — Anonymised Browsing

**Challenge:** People in oppressive regimes, journalists, activists, and privacy-conscious users need to browse the web without being tracked or identified.

**Solution:** Tor (The Onion Router) routes traffic through a network of volunteer relays. Traffic is encrypted in layers (like an onion). Each relay decrypts one layer to know where to send the traffic next, but doesn't know both the source and destination. This breaks the link between the user and the websites they visit.

**Impact:** Tor is used by millions of people daily. It's a foundational tool for internet privacy and anonymity, though it has limitations (slow, doesn't protect against all threats, exit nodes can see unencrypted traffic).

---

## 16. Sources

- [[UTS/Privacy Preserving Technologies/Sources/Big Privacy - Yu 2016]] — primary source (Yu, S. "Big Privacy: Challenges and Opportunities of Privacy Study in the Age of Big Data," IEEE Access, 2016)
- [[UTS/Privacy Preserving Technologies/Sources/Science Survey - WK1]] — supplementary science survey
- [[UTS/Machine Learning/Notes/Week 02 - Supervised Learning & Model Evaluation]] — related: regularisation as noise, bias-variance
- [[UTS/Machine Learning/Notes/Week 03 - Classification Algorithms]] — related: inference attacks on ML models

---

*These notes follow the [[UTS/Templates/Lecture Note Template|Lecture Note Template]]. For the weekly summary, see [[UTS/Templates/Weekly Summary Template|Weekly Summary Template]].*
