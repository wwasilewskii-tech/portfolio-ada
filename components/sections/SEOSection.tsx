'use client'

import ScrollReveal from '@/components/animations/ScrollReveal'
import { Camera, Palette, MapPin, Award } from 'lucide-react'

/**
 * SEOSection
 * Sekcja zoptymalizowana pod SEO dla słów kluczowych:
 * - "fotograf szczecin"
 * - "grafik szczecin"
 *
 * Zawiera naturalne treści bez ingerencji w pozostałe sekcje strony
 */
export default function SEOSection() {
  return (
    <section className="relative overflow-hidden bg-navy-50 py-20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute left-0 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-400/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-yellow-400/10 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        {/* Main heading */}
        <ScrollReveal direction="up">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-display text-4xl font-bold text-navy-900 sm:text-5xl">
              Profesjonalna Fotografia i Grafika w Szczecinie
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-navy-700">
              Szukasz doświadczonego fotografa lub grafika w Szczecinie? Oferuję kompleksowe usługi w zakresie fotografii artystycznej, portretowej oraz profesjonalnego designu graficznego.
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 mb-16">
          {/* Fotograf Szczecin */}
          <ScrollReveal direction="left" delay={0.2}>
            <div className="group rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-xl">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                  <Camera className="h-8 w-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-navy-900">
                    Fotograf Szczecin
                  </h3>
                  <p className="text-sm text-purple-600 font-medium">
                    Fotografia artystyczna i portretowa
                  </p>
                </div>
              </div>

              <p className="mb-4 text-navy-700 leading-relaxed">
                Jako <strong>fotograf w Szczecinie</strong> od lat zajmuję się profesjonalną fotografią artystyczną i portretową.
                Specjalizuję się w tworzeniu nietuzinkowych, przemyślanych kompozycji, które łączą estetykę z głębokim przekazem.
                Moje prace fotograficzne były wielokrotnie prezentowane na wystawach w Szczecinie, w tym uznane ekspozycje
                <em>"Od miłości do nienawiści – jeden krok"</em> (2015, Szczecin Meeting Point),
                <em>"Interakcje poezja, fotografia, grafika"</em> (2015, Klub 12. Szczecińskiej Dywizji Zmechanizowanej)
                oraz <em>"Poetyckie rusałki"</em> (2016, Klub Hormon).
              </p>

              <p className="mb-4 text-navy-700 leading-relaxed">
                Współpracuję z klientami indywidualnymi, firmami oraz instytucjami kulturalnymi w Szczecinie i całym
                województwie zachodniopomorskim. Każda sesja fotograficzna to dla mnie możliwość opowiedzenia unikalnej
                historii – czy to poprzez intymny portret, dynamiczny reportaż z wydarzenia, czy artystyczną koncepcję
                stworzoną od podstaw.
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-navy-900 mb-3">Kompleksowe usługi fotograficzne w Szczecinie:</h4>
                <ul className="space-y-3 text-sm text-navy-700">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1 font-bold">•</span>
                    <div>
                      <strong className="text-navy-900">Fotografia portretowa i biznesowa</strong>
                      <span className="block mt-1">Profesjonalne portrety dla firm, LinkedIn, CV oraz sesje wizerunkowe dla przedsiębiorców i freelancerów ze Szczecina.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1 font-bold">•</span>
                    <div>
                      <strong className="text-navy-900">Sesje artystyczne i koncepcyjne</strong>
                      <span className="block mt-1">Autorskie projekty fotograficzne łączące sztukę, emocje i narrację wizualną. Idealne dla osób ceniących niepowtarzalność.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1 font-bold">•</span>
                    <div>
                      <strong className="text-navy-900">Reportaże z wydarzeń kulturalnych</strong>
                      <span className="block mt-1">Dokumentacja wystaw, koncertów, wernisaży i eventów w Szczecinie. Specjalizacja w fotografii kulturalnej i artystycznej.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1 font-bold">•</span>
                    <div>
                      <strong className="text-navy-900">Fotografia produktowa i reklamowa</strong>
                      <span className="block mt-1">Profesjonalne zdjęcia produktów dla e-commerce, katalogów i kampanii reklamowych lokalnych firm.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1 font-bold">•</span>
                    <div>
                      <strong className="text-navy-900">Fotografia dla literatów i wydawnictw</strong>
                      <span className="block mt-1">Portrety autorów, zdjęcia do promocji książek i materiały wizualne dla branży wydawniczej.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          {/* Grafik Szczecin */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="group rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-xl">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100">
                  <Palette className="h-8 w-8 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-navy-900">
                    Grafik Szczecin
                  </h3>
                  <p className="text-sm text-yellow-600 font-medium">
                    Design graficzny i ilustracje
                  </p>
                </div>
              </div>

              <p className="mb-4 text-navy-700 leading-relaxed">
                Jako <strong>grafik komputerowy w Szczecinie</strong> specjalizuję się w projektowaniu okładek książek,
                ilustracjach literackich oraz kompleksowej identyfikacji wizualnej. Moja wieloletnia współpraca ze
                Związkiem Literatów Polskich oraz licznymi autorami i wydawnictwami zaowocowała dziesiątkami zrealizowanych
                projektów – od tomików poezji, przez powieści, po audiobooki radiowe.
              </p>

              <p className="mb-4 text-navy-700 leading-relaxed">
                Ilustrowałam tomiki poezji Edyty Rauhut: <em>"Roztańczony atrament"</em>, <em>"…(nie) z tej bajki"</em>
                oraz <em>"Łapacz róż"</em>. Projektowałam okładki dla tomików <em>"Do rozważenia…"</em> Barbary Moraczewskiej-Jankowskiej,
                <em>"Z piątego wymiaru…"</em> Zenona Lacha-Ceraszyńskiego, a także okładkę audiobooka radiowego
                <em>"Zapiski z umierania"</em> Marii Pawlikowskiej-Jasnorzewskiej (2024). Realizuję projekty dla klientów
                z Szczecina, całej Polski i zdalnie z różnych zakątków kraju.
              </p>

              <p className="mb-4 text-navy-700 leading-relaxed">
                W mojej pracy jako grafik łączę artystyczną wrażliwość z profesjonalnym podejściem do designu.
                Każdy projekt traktuję indywidualnie, dbając o spójność wizualną, czytelność przekazu i dopasowanie
                do charakteru treści. Współpracuję z autorami, wydawnictwami, firmami oraz organizacjami kulturalnymi.
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-navy-900 mb-3">Profesjonalne usługi graficzne w Szczecinie:</h4>
                <ul className="space-y-3 text-sm text-navy-700">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1 font-bold">•</span>
                    <div>
                      <strong className="text-navy-900">Design okładek książek i publikacji</strong>
                      <span className="block mt-1">Projektowanie okładek dla wydawnictw, autorów self-publishingowych i instytucji kulturalnych. Pełna obsługa od koncepcji po skład typograficzny.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1 font-bold">•</span>
                    <div>
                      <strong className="text-navy-900">Ilustracje literackie i artystyczne</strong>
                      <span className="block mt-1">Autorskie ilustracje do tomików poezji, powieści, czasopism literackich oraz projektów kulturalnych. Specjalizacja w grafikach symbolicznych i narracyjnych.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1 font-bold">•</span>
                    <div>
                      <strong className="text-navy-900">Branding i identyfikacja wizualna</strong>
                      <span className="block mt-1">Kompleksowa identyfikacja wizualna dla marek, blogów, eventów i organizacji ze Szczecina. Logo, wizytówki, papier firmowy, social media.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1 font-bold">•</span>
                    <div>
                      <strong className="text-navy-900">Grafika reklamowa i marketingowa</strong>
                      <span className="block mt-1">Plakaty, ulotki, banery internetowe, grafiki na social media, materiały promocyjne dla firm i eventów kulturalnych.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1 font-bold">•</span>
                    <div>
                      <strong className="text-navy-900">Skład i łamanie publikacji</strong>
                      <span className="block mt-1">Profesjonalny skład typograficzny książek, katalogów, czasopism i ebooków. Przygotowanie plików do druku.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Why Choose Me - Local Focus */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="rounded-2xl bg-gradient-to-br from-navy-900 to-navy-800 p-8 md:p-12 text-white">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400/20">
                    <MapPin className="h-8 w-8 text-yellow-400" />
                  </div>
                </div>
                <h4 className="mb-2 font-display text-xl font-bold">Lokalnie w Szczecinie</h4>
                <p className="text-sm text-navy-200 leading-relaxed">
                  Działam w Szczecinie i okolicach – znam lokalną scenę kulturalną, artystyczną i biznesową miasta.
                  Oferuję elastyczne terminy spotkań i możliwość realizacji sesji w różnych lokalizacjach w Szczecinie.
                  Regularnie współpracuję z instytucjami kulturalnymi, wydawnictwami i firmami z regionu.
                </p>
              </div>

              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-400/20">
                    <Award className="h-8 w-8 text-purple-400" />
                  </div>
                </div>
                <h4 className="mb-2 font-display text-xl font-bold">Doświadczenie i Wystawy</h4>
                <p className="text-sm text-navy-200 leading-relaxed">
                  Moje prace fotograficzne i graficzne były prezentowane na wystawach w Szczecinie (Meeting Point,
                  Klub 12. Szczecińskiej Dywizji Zmechanizowanej, Klub Hormon) oraz w licznych publikacjach.
                  Wieloletnia współpraca ze Związkiem Literatów Polskich i środowiskiem literackim dała mi unikalne
                  doświadczenie w łączeniu słowa i obrazu.
                </p>
              </div>

              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400/20">
                    <Palette className="h-8 w-8 text-yellow-400" />
                  </div>
                </div>
                <h4 className="mb-2 font-display text-xl font-bold">Kompleksowa Obsługa</h4>
                <p className="text-sm text-navy-200 leading-relaxed">
                  Od koncepcji wizualnej, przez realizację sesji fotograficznej, po projektowanie graficzne i finalną
                  obróbkę – wszystko w jednym miejscu. Oszczędzasz czas i zyskujesz spójność wizualną projektu.
                  Jako fotograf i grafik w jednej osobie zapewniam pełną kontrolę nad ostatecznym efektem.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Obszar działania */}
        <ScrollReveal direction="up" delay={0.6}>
          <div className="mt-16 rounded-2xl bg-white p-8 md:p-12 shadow-lg">
            <h3 className="mb-6 text-center font-display text-3xl font-bold text-navy-900">
              Obszar Działania
            </h3>

            <div className="grid gap-8 md:grid-cols-2 mb-8">
              <div>
                <h4 className="mb-4 font-display text-xl font-semibold text-purple-700">
                  📸 Usługi Fotograficzne
                </h4>
                <p className="text-navy-700 leading-relaxed mb-4">
                  Jako <strong>fotograf w Szczecinie</strong> realizuję sesje fotograficzne głównie w Szczecinie
                  oraz w promieniu 50 km od miasta. Obsługuję klientów z:
                </p>
                <ul className="space-y-2 text-sm text-navy-700">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">✓</span>
                    <span><strong>Szczecin</strong> – centrum miasta, dzielnice, parki miejskie</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">✓</span>
                    <span><strong>Police</strong> – sesje plenerowe i biznesowe</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">✓</span>
                    <span><strong>Goleniów</strong> – portrety i fotografia eventowa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">✓</span>
                    <span><strong>Stargard</strong> – fotografia biznesowa i artystyczna</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">✓</span>
                    <span><strong>Województwo zachodniopomorskie</strong> – na indywidualne zlecenia</span>
                  </li>
                </ul>
                <p className="mt-4 text-sm text-navy-600 italic">
                  Posiadam własny sprzęt fotograficzny i doświadczenie w pracy w różnych lokalizacjach –
                  od wnętrz po plener, od studiów po przestrzenie publiczne w Szczecinie.
                </p>
              </div>

              <div>
                <h4 className="mb-4 font-display text-xl font-semibold text-yellow-700">
                  🎨 Usługi Graficzne
                </h4>
                <p className="text-navy-700 leading-relaxed mb-4">
                  Jako <strong>grafik komputerowy</strong> pracuję zdalnie z klientami z całej Polski,
                  oferując pełną obsługę online. Obsługuję klientów z:
                </p>
                <ul className="space-y-2 text-sm text-navy-700">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">✓</span>
                    <span><strong>Szczecin i okolice</strong> – spotkania osobiste, konsultacje w biurze klienta</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">✓</span>
                    <span><strong>Cała Polska</strong> – współpraca zdalna przez email, Zoom, telefon</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">✓</span>
                    <span><strong>Projekty międzynarodowe</strong> – design okładek dla polskich autorów za granicą</span>
                  </li>
                </ul>
                <p className="mt-4 text-sm text-navy-600 italic">
                  Grafika komputerowa nie zna granic – mogę pracować z Tobą niezależnie od lokalizacji.
                  Korzystam z nowoczesnych narzędzi komunikacji i udostępniania plików, co sprawia,
                  że współpraca jest płynna i profesjonalna.
                </p>
              </div>
            </div>

            <div className="border-t border-navy-100 pt-8">
              <h4 className="mb-4 text-center font-display text-xl font-semibold text-navy-900">
                Jak Rozpocząć Współpracę?
              </h4>
              <div className="grid gap-6 md:grid-cols-3 text-center">
                <div className="p-4 rounded-xl bg-navy-50">
                  <div className="mb-2 text-3xl">💬</div>
                  <h5 className="font-semibold text-navy-900 mb-2">1. Skontaktuj się</h5>
                  <p className="text-sm text-navy-700">
                    Napisz lub zadzwoń – opowiedz o swoim projekcie i oczekiwaniach.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-purple-50">
                  <div className="mb-2 text-3xl">📋</div>
                  <h5 className="font-semibold text-navy-900 mb-2">2. Wycena</h5>
                  <p className="text-sm text-navy-700">
                    Otrzymasz spersonalizowaną wycenę dostosowaną do zakresu projektu.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-yellow-50">
                  <div className="mb-2 text-3xl">🎯</div>
                  <h5 className="font-semibold text-navy-900 mb-2">3. Realizacja</h5>
                  <p className="text-sm text-navy-700">
                    Profesjonalna realizacja projektu z pełnym zaangażowaniem i dbałością o detale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
